var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var table = document.getElementById("stores");
var stores = []
var pikePlace = stores.push(new CookieStore ('Pike Place', 8, 17, 88, 5.2, 'pikeRow'));
var seaTac = stores.push(new CookieStore ('SeaTac Airport', 8, 6, 24, 1.2, 'seaTacRow'));
var southcenter = stores.push(new CookieStore ('Southcenter', 8, 11, 38, 1.9, 'southcenterRow'));
var bellevueSquare = stores.push(new CookieStore ('Bellevue Square', 8, 20, 48, 3.3, 'bellevueRow'));
var alki = stores.push(new CookieStore ('Alki', 8, 3, 24, 2.6, 'alkiRow'));

function CookieStore(storeLocation, hoursOpen, min, max, avg, storeRow) {
  //hoursOpen isn't used anywhere. Why is it there?
  this.name = storeLocation;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookie = avg;
  //this.row doesn't appear to be necessary
  this.row = storeRow;
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
  var storeSection = document.getElementById('stores');
  var row = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = this.name;
  row.appendChild(td);

  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = this.hourlySales[i];
    row.appendChild(tdHourly);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalSales;
  row.appendChild(total);

  storeSection.appendChild(row);
};

function generateTableHeading(){
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
}

generateTableHeading();
stores.forEach(function(store){
  store.getHourlySales();
  store.render();
});

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
  var newStoreName = event.target.storeLocal.value;
  var newMin = parseInt(event.target.minInput.value);
  var newMax = parseInt(event.target.maxInput.value);
  var newAvg = parseFloat(event.target.avgInput.value);
  var newRow = newStoreName + "Row";
  var newStore = new CookieStore(newStoreName, 8, newMin, newMax, newAvg, newRow);
  newStore.getHourlySales();
  newStore.render();
  stores.push(newStore);
  clearFields(event);
});
