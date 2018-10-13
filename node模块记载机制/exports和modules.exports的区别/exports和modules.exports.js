/*exports.area = () =>{
    console.log('我是exports.area')
}
module.exports.area = ()=>{
    console.log('我是modules.exports.area')
}*/
console.log(exports === module.exports)

//如果手动改变了exports或者module.exports的指向两者就不相等了

module.exports = function(){
    
}
console.log('手动改变指向')
console.log(exports === module.exports)