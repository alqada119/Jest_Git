const ahmed={
        printHello:()=>{
            return "Hello"
        },
        addNumber:(a,b)=>{
            return a+b
        },
        reverseString:(string)=>{
            let reversed=""
            for(i=string.length-1;i>=0;i--){
                reversed+=string.charAt(i)
            }
            return reversed
        }
    }


console.log(ahmed.reverseString("hello"))
module.exports=ahmed