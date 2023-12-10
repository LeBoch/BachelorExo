let salut:string = "salut";
let coco:number = salut.length;
let res:string = "";
for (let i = 0 ; i<coco ; i++) {
     res =res+salut[(coco-1)-i];
}
console.log(res);