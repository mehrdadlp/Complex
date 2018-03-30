function Complex(x,y) { this.set(x,y); } ;
Complex.prototype = new Array;
Complex.prototype.set = function(x,y) {
    this.length=0;
    if(typeof(x)==='string') {
        var coords = x.match(/(\d+)\+[i,j](\d+)/i);
        this.push(+coords[1],+coords[2]);
    } else {
        this.push(x,y);
    }
    return this;
};
Complex.prototype.r = function() {
    return Math.sqrt(Math.pow(this[0],2) + Math.pow(this[1],2));
};

Complex.prototype.theta = function() {
    if(this[0]==0&&this[1]==0)
        return undefined
    if(this[0]>=0)
        return (Math.atan(this[1]/this[0])*180)/Math.PI;
    if(this[0]<0 && this[1]>=0)
        return (Math.atan(this[1]/this[0]) + Math.PI)*180/Math.PI;
    if(this[0]<0 && this[1]<0)
        return ((Math.atan(this[1]/this[0]) - Math.PI)*180)/Math.PI;
};

Complex.prototype.setPolar = function(r,theta) {
    this.length = 0;
    this.push(r*Math.cos((theta*Math.PI)/180),r*Math.sin((theta*Math.PI)/180));
    return this;
};
Complex.prototype.getPolar = function() {
    return [this.r(),this.theta()];
};
Complex.prototype.valueOf = function() {
    return [this.r()];
};
Complex.prototype.toString = function() {return this[0] + '+i' + this[1]}

Complex.prototype.multiply = function(a) {
    return new Complex((this[0]*a[0] - this[1]*a[1]),(this[0]*a[1]+this[1]*a[0]));
};
Complex.prototype.divide = function divide(b) {
	var denominator = Math.pow(b[0],2) + Math.pow(b[1],2);
	return new Complex(
		(this[0]*b[0] + this[1]*b[1])/denominator,
		(this[1]*b[0] - this[0]*b[1])/denominator
	);
};
Complex.prototype.plus = function(b) {
    return new Complex(this[0]+b[0],this[1]+b[1]);
};
Complex.prototype.minus = function(b) {
    return new Complex(this[0]-b[0],this[1]-b[1]);
};
Complex.prototype.conj = function() {
    return new Complex(this[0],-this[1]);
};
Complex.prototype.equals = function(b) {
    return this[0] === b[0] && this[1] === b[1];
};
//(x1+iy1) (x2+iy2) = x1*x2 + i*x1*y2 + i* y1*x2 - y1*y2
//(x1*x2 - y1*y2) + i (x1*y2 + y1 *x2)
function type(a) {
    return Object.prototype.toString.call(a).replace(/\[object (.+)\]/i,"$1").toLowerCase();
}
