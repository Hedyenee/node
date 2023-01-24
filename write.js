const fs =require('fs')
fs.writeFile("text.txt","HELLO WORD","utf-8",(err,data)=> {
    if (err) throw err 
    else console.log(data)
})