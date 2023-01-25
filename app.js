"use strict"

let stepCounter ={
    spep_count:0,
    increase:function(){
        this.spep_count+=1
        return this 
    },
    decrease(){
        this.spep_count-=1
        return this
    },
    reset(){
        this.spep_count=0
        return this
    },
    read(){
        console.log(this.spep_count)
        return this
    }
    

}

stepCounter.increase().increase().increase().read().decrease().decrease().decrease().increase().read().reset().read()