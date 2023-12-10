function arrayValue(arr:number []):number{
let result:number = 0;
for (let i=0; i<arr.length; i++) {
    if(arr[i]%2!=0){
        result = result + arr[i]  
    }else {
        result = result / arr[i]
    }   
}
return result;
}
console.log(arrayValue([1,6,13,24,8]))