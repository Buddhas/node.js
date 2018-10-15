const fs = require("fs");
const path = require("path");

//有个坑：fs模块读取文件的相对路径是以启动server.js的位置为基准的，而不是以server.js文件的位置。所以在官方文档中建议用绝对路径来显示
const url = path.join(`${__dirname}`, "1");

//同步读取数据
{
  let buf = fs.readFileSync(url);
  let data = fs.readFileSync(url, "utf8");
  console.log(buf);
  console.log(data);
}

//异步读取数据
{
    let data = fs.readFile(url,'utf8',(err,data)=>{
        console.log(data)
    })
}
