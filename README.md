# Complex
Basic Complex Numbers

## Usage
var a = new Complex(2,3);
var b = new Complex("4+i5");

## Comparison
a < b       // true (compares polar form radius)
a.equals(b) // false

## Methods

### Multiply
console.log("a x b is equals to: " + a.multiply(b));
// a x b is equals to: -7+i22

### Addition
var c = a.plus(b);

### Conjugate
a.conj();

### Polar
a.setPolar(r,theta);
a.getPolar();
a.r();     //return polar form radius
a.theta(); //return polar form angle (degree)

