var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Pike Place Store
var pikePlace = {
  name: "Pike Place",
  min: 17,
  max: 88,
  avgCookie: 5.2,
  hourlySales: [],
  totalSales: 0,

  getRandomCust: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },

  getHourlySales: function () {
    for (var i = 0; i< hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
render: function() {
  this.getHourlySales();
  var sectionEl = document.getElementById("pikePlaceStore");
  var ulEl = document.createElement("ul");

  for (var i = 0; i < hoursOpen.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement("li");
  liElTotal.textContent = "Total: " + this.totalSales;
  ulEl.appendChild(liElTotal);
  sectionEl.textContent = this.name;
  sectionEl.appendChild(ulEl);
  },
};

pikePlace.render();
// end of Pike Place Store

// SeaTac Airport Store
var seaTac = {
  name: "SeaTac Airport",
  min: 6,
  max: 24,
  avgCookie: 1.2,
  hourlySales: [],
  totalSales: 0,

  getRandomCust: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },

  getHourlySales: function () {
    for (var i = 0; i< hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
render: function() {
  this.getHourlySales();
  var sectionEl = document.getElementById("seaTacStore");
  var ulEl = document.createElement("ul");

  for (var i = 0; i < hoursOpen.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement("li");
  liElTotal.textContent = "Total: " + this.totalSales;
  ulEl.appendChild(liElTotal);
  sectionEl.textContent = this.name;
  sectionEl.appendChild(ulEl);
  },
};

seaTac.render();
// end of SeaTac Store

// Southcenter Store
var southcenter = {
  name: "Southcenter Store",
  min: 11,
  max: 38,
  avgCookie: 1.9,
  hourlySales: [],
  totalSales: 0,

  getRandomCust: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },

  getHourlySales: function () {
    for (var i = 0; i< hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
render: function() {
  this.getHourlySales();
  var sectionEl = document.getElementById("southcenterStore");
  var ulEl = document.createElement("ul");

  for (var i = 0; i < hoursOpen.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement("li");
  liElTotal.textContent = "Total: " + this.totalSales;
  ulEl.appendChild(liElTotal);
  sectionEl.textContent = this.name;
  sectionEl.appendChild(ulEl);
  },
};

southcenter.render();
// end of Southcenter Store

// Bellevue Square Store
var bellevueSquare = {
  name: "Bellevue Square Store",
  min: 11,
  max: 48,
  avgCookie: 3.3,
  hourlySales: [],
  totalSales: 0,

  getRandomCust: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },

  getHourlySales: function () {
    for (var i = 0; i< hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
render: function() {
  this.getHourlySales();
  var sectionEl = document.getElementById("bellevueSquareStore");
  var ulEl = document.createElement("ul");

  for (var i = 0; i < hoursOpen.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement("li");
  liElTotal.textContent = "Total: " + this.totalSales;
  ulEl.appendChild(liElTotal);
  sectionEl.textContent = this.name;
  sectionEl.appendChild(ulEl);
  },
};

bellevueSquare.render();
// End of Bellevue Square Store

// Alki Store
var alki = {
  name: "Alki Store",
  min: 3,
  max: 24,
  avgCookie: 2.6,
  hourlySales: [],
  totalSales: 0,

  getRandomCust: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },

  getHourlySales: function () {
    for (var i = 0; i< hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
render: function() {
  this.getHourlySales();
  var sectionEl = document.getElementById("alkiStore");
  var ulEl = document.createElement("ul");

  for (var i = 0; i < hoursOpen.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement("li");
  liElTotal.textContent = "Total: " + this.totalSales;
  ulEl.appendChild(liElTotal);
  sectionEl.textContent = this.name;
  sectionEl.appendChild(ulEl);
  },
};

alki.render();
