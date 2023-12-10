let array:number[]=[1,8,13,21,4,5,7];
let n:number = array.length;
let res:number = 0;

for (let i=0 ; i<n ; i++) {
    if(array[i]%2!=0){
        res = res+array[i];
    }
}
console.log(res);