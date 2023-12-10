function numberPrimary(n:number):boolean{
    for (let i=2 ; i<n ; i++) {
        if(n%i==0) { 
            return false;
        } 
    }
    return true;
}

function numberPrimaryList(n:number){
    let arr: number[] = [];
    for (let i=1; i<n ;i++){
            if(numberPrimary(i)==true){
                arr.push(i);
            }
    }
    return arr;

}

console.log(numberPrimaryList(200));