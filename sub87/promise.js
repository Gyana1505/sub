import fs from "fs/promises"
let a=await fs.readFile("gg.txt")//herwe we do not to async function to await because it present in module so we directly use it
let b=await fs.writeFile("gg.txt","this is a good thing")
//let b=await fs.appendFile("gg.txt","nice to see you") append is use do not remove the content present before it write
console.log(a.toString(),b)