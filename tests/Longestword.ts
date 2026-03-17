function longestword(s: string){

    let map = new Map<string, number>()
    let arr = s.trim().split(/\s+/)
   // let minlen = 0
   // let maxkey 

    for(let a of arr){  
        map.set(a, a.length)
    }
     let maxvalue = Math.max(...map.values())

    for(let [key,value] of map){
        // if(value > minlen){
        //     minlen = value
        //     maxkey = key
        // }
       
        if(value == maxvalue){
         console.log(key)
        }
    }
    //console.log(maxkey)

}
longestword("Good Morning")