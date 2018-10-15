const fs = require('fs')
const path = require('path')
const url = path.join(`${__dirname}`,'1')

//同步追加
{
    let append = fs.appendFileSync(url,'我是同步追加')
}

//异步追加
{
    let append = fs.appendFile(url,'我是异步追加',(err,data)=>{
        if(!err){
            console.log('异步追加成功')
        }
    })
}
 