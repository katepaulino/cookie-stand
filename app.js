var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function CookieStore(name, hoursOpen, min, max, avg) {
  this.name = name;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookie = avg;
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

var pikePlace = new CookieStore ('Pike Place', 8, 17, 88, 5.2);
var seaTac = new CookieStore ('SeaTac Airport', 8, 6, 24, 1.2);
var southcenter = new CookieStore ('Southcenter', 8, 11, 38, 1.9);
var bellevueSquare = new CookieStore ('Bellevue Square', 8, 20, 48, 3.3);
var alki = new CookieStore ('Alki', 8, 3, 24, 2.6);

CookieStore.prototype.render = function() {
    this.getHourlySales();
    var storeSection = document.getElementById('stores');
    var newStore = document.createElement('section');
    storeSection.appendChild(newStore);
    var ulEl = document.createElement("ul");

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    newStore.textContent = this.name;
    newStore.appendChild(ulEl);
  }

  pikePlace.render();
  seaTac.render();
  southcenter.render();
  bellevueSquare.render();
  alki.render();
