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




