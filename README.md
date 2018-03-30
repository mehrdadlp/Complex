# Complex
Basic Complex Numbers


## Usage
```javascript
var a = new Complex(2,3);
var b = new Complex("4+i5");
```

## Comparison
```javascript
a < b       // true  (compares absolute value)
a === b     // false (compares absolute value)
a.equals(b) // false (compares real and imaginary parts)
```

## Methods

### Multiply
```javascript
console.log("a x b is equals to: " + a.multiply(b));
// a x b is equals to: -7+i22
```

### Addition
```javascript
var c = a.plus(b);
```
### Subtraction
```javascript
var d = a.minus(b);
```

### Conjugate
```javascript
a.conj();
```
### Reciprocal
```javascript
var e = a.rec();
//returns (1/a)
```

### Polar
```javascript
a.setPolar(r,theta);
a.getPolar();
a.r();     //return polar form radius
a.theta(); //return polar form angle (degree)
```
