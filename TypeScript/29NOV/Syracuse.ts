function syracuse(n: number): number {
    let count: number = 0
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2 
           
        }
        else {
            n = 3 * n + 1
        }
        count ++
    }
    return count;
}
console.log(syracuse(5))