var hoursOpen = ["10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
var table = document.getElementById("stores");
var stores = []
var pikePlace = new CookieStore ('Pike Place', 8, 17, 88, 5.2, 'pikeRow');
var seaTac = new CookieStore ('SeaTac Airport', 8, 6, 24, 1.2, 'seaTacRow');
var southcenter = new CookieStore ('Southcenter', 8, 11, 38, 1.9, 'southcenterRow');
var bellevueSquare = new CookieStore ('Bellevue Square', 8, 20, 48, 3.3, 'bellevueRow');
var alki = new CookieStore ('Alki', 8, 3, 24, 2.6, 'alkiRow');

function CookieStore(storeLocation, hoursOpen, min, max, avg, storeRow) {
  this.name = storeLocation;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookie = avg;
  this.row = storeRow;
  this.hoursOpen = hoursOpen;
  this.hourlySales = [];
  this.totalSales = 0;
};

CookieStore.prototype.getRandomcust = function() {
  return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
};
CookieStore.prototype.getHourlySales = function () {
  for (var i = 0; i< hoursOpen.length; i++) {
    var rand = Math.floor(this.getRandomcust() * this.avgCookie);
    this.hourlySales.push(rand);
    this.totalSales += rand;
  }
};

CookieStore.prototype.render = function() {
  this.getHourlySales();
  var storeSection = document.getElementById('stores');
  var row = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = this.name;
  row.appendChild(td);
  storeSection.appendChild(row);

  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = this.hourlySales[i];
    row.appendChild(tdHourly);

  }
  storeSection.appendChild(row);
};

  var storeSection = document.getElementById('stores');
  var thead = document.createElement('thead');
  storeSection.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = "Location";
  row.appendChild(td);

  for (var i = 0; i < hoursOpen.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = hoursOpen[i];
    row.appendChild(td);
  }

// Render
  pikePlace.render();
  seaTac.render();
  southcenter.render();
  bellevueSquare.render();
  alki.render();

// Clear Fields
var clearFields = function(event){
  event.target.storeLocal.value = null;
  event.target.minCustInput.value = null;
  event.target.maxCustInput.value = null;
  event.target.avgInput.value = null;
};

var form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var newStore = event.target.storeLocal.value;
  var newMin = event.target.minCustInput.value;
  var newMax = event.target.maxCustInput.value;
  var newAvg = event.target.avgInput.value;
  var newRow = event.target.storeLocal.value + "Row";
  new CookieStore(newStore, newMin, newMax, newAvg, newRow);
  clearFields(event);
});
