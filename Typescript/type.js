var i = 1;
i = 'a';
i = true;
console.log(i);
var j;
j = 1;
j = 2;
console.log(j);
//j='a'
console.log(j);
var a = 1;
var b = "haris";
var c = true;
var d = [1, 2, 3];
var e = [1, true, 'lasdjkf'];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color);
