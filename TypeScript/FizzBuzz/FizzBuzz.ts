function FizzBuzz(n: number): string {

    let result: string = "1";
    
    for (let i = 1; i < n; i++) {
        if ((i + 1) % 5 == 0 && (i + 1) % 3 == 0) {
            result = result + "-FizzBuzz"
        }
        
        else if ((i + 1) % 5 == 0) {
            result = result + "-Buzz"
        }
        
        else if ((i + 1) % 3 == 0) {
            result = result + "-Fizz"
        }
        else {
            result = result + "-" + (i + 1)
        }
    }
    return result
}
console.log(FizzBuzz(200))