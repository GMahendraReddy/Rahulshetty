// function prime(){
// let num = 4
// let count = 0
//     for(let i =2; i <= num; i++){

//         if(num%i ==0){
//             count ++
//         }
//     }
//     if(count ==1){
//         console.log("prime NUmber")
//     }else{
//         console.log("not a prime")
//     }
// }
// prime()

function primetotal(){
   

    for(let i =2; i<= 100; i++){
         let isprime = true
        for(let j = 2; j <Math.sqrt(i); j++){
            if(i % j == 0){
                isprime = false
                break
            }
        }
        if(isprime){
            console.log(i)
        }
    }
    
}
primetotal()