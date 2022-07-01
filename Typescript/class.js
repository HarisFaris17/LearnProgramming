class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //disebut dnegan properties (getter and setter)
    // getter dalam typescript bisa tanpa parentheses ()
    //setter dalam typscript bisa menggunakan assignment
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    set X(x) {
        this.x = x;
    }
    set Y(y) {
        this.y = y;
    }
}
//build instance of Point class
let pointObject = new Point(1, 2);
console.log(pointObject.X);
// class declaration diatas dapat diubah mnejadi lebih compact
class PointCompact {
    //disini field didefinisikan pada parameter. dan juga dapat menspesifikan access modifier nya
    //dan menurut konvensi, lebih baik field diawali dengan _, agar pada getter dan setter dapat menggunakan nama fieldnya
    //sehingga memudahkan penggunaan dari instance classnya
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    //properties dapat menggunakan nama seperti field namun tanppa _ agar memudahkan penggunaan oleh object
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
}
let ObjectPointCompact = new PointCompact(3, 4);
console.log(ObjectPointCompact.x, ObjectPointCompact.y);
