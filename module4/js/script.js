var x = "G";
function funA() {
    var x = "A";
    funB();
}
function funB() {
    console.log("x = " + x);
};

// funA();
// funB();
console.log(x / 2);

// Function constructors
function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// Fun in Fin + this
var literalCircle = {
    radius: 10,
  
    getArea: function () {
      var self = this;
      console.log(this);
  
      var increaseRadius = function () {
        //self.radius = 20;
        this.radius = 20;
      };
      increaseRadius();
      console.log(this.radius);
  
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
  console.log(literalCircle.getArea());
  console.log(literalCircle);
  
  

  var circle = {
    radius: 10,
    initCircle: function (double) {
      var increaseRadius = function () {
        this.radius *= 2;
      };
      if (double)
        increaseRadius();
      return this.radius;
    }
  };
  console.log(circle.initCircle("double"));

