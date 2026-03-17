function palendrome(){

    let num = 121

    let rev = 0
    while(num > 0){
        let rem = num % 10 //= 1, 2, 1
        rev = 10*rev + rem // 1, 12, 121
        num = Math.floor(num/10) // 12, 1, 
    }
    console.log(rev)

    let s = "rohit"
    let s1 = s.split('').reverse().join('')
    console.log(s1)
}

palendrome()