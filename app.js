var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
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

  var tdTotal = document.createElement('th');
  tdTotal.textContent = this.totalSales;
  tdTotal.innerHTML = "Total";
  row.appendChild(tdTotal);
  storeSection.appendChild(row);


pikePlace.render();
seaTac.render();
southcenter.render();
bellevueSquare.render();
alki.render();

// Clear Fields
var clearFields = function(event){
  event.target.storeLocal.value = null;
  event.target.minInput.value = null;
  event.target.maxInput.value = null;
  event.target.avgInput.value = null;
};

var formEl = document.getElementById("form");
formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  var newStore = event.target.storeLocal.value;
  var newMin = event.target.minInput.value;
  var newMax = event.target.maxInput.value;
  var newAvg = event.target.avgInput.value;
  var newRow = event.target.storeLocal.value + "Row";
  new CookieStore(newStore, newMin, newMax, newAvg, newRow);
  clearFields(event);
});
