let i = 1;
//compilation error
/*i = 'a';
i= true;*/

console.log(i);

let j:number;
j=1;
j=2;
console.log(j);
//j='a'
console.log(j);

let a:number = 1;
let b:string = "haris";
let c:boolean = true;
let d:number[] = [1,2,3];
let e:any[] = [1,true,'lasdjkf']

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

enum Color {Red=3,Green,Blue}
var color = Color.Red;
console.log(color);