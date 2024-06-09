const fs=require("fs")
console.log(fs)//it print fs module it give all function in it
console.log("starting")//1st it done
//fs.writeFileSync("gg.txt","gyana is a good boy")//this approch is not good because js support async in nature and it does not support it so next line not run until it finish the work of current  line
/*fs.writeFile("gg2.txt","i am a good boy",()=>{//it schedule then//after 2nd run it run
    console.log("done");
    fs.readFile("gg2.txt",(error,data)=>{
        console.log(error,data.toString());//data .toString is use to convest number to string ,if we write only data it give only number so for decode we use data.toString
        
    })
    
})//it is called callback hell*/
console.log("ending")//it run 2nd
fs.appendFile("gg.txt","here we write content ",(e,d)=>{
    console.log(d)//by useing this it write the containt in file which path you give
})