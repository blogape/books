// 操作dom元素 将content显示到网页上

function show(content){
    window.document.getElementById('app').innerHTML='Hello'+content
}
//通过CommonJS规范导出show 函数
module.exports=show;