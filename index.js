var next = document.getElementById("next")
var last = document.getElementById("last")
var show = document.getElementById("show-picture")
var index = 0
var imgLength = 7
// var imgList = [""]
next.onclick = function(){
  // alert("next")
  index ++
  index %= imgLength
  setLi(change.children[index-1 < 0? imgLength -1 : index - 1],change.children[index])
}
last.onclick = function(){
  index --
  if(index < 0){
    index = imgLength - 1
  }
  setLi(change.children[index+1 == imgLength ? 0 : index + 1],change.children[index])
}
var change = document.getElementById("change")
var changes = []
for(i = 0; i < imgLength; i ++){
  changes[i] = document.createElement("li")
  changes[i].changeIndex = i
  changes[i].onclick = function(){
    setLi(change.children[index],this)
  }
  if(i == 0){
    addClass(changes[0],"selected")
  }
  change.appendChild(changes[i])
}
/**为li标签设置响应事件方法 
 * 第一个参数为之前选中的li
 * 第二个参数为正在点击的li
*/
function setLi(prev,next){
  addClass(next,"selected")
  removeClass(prev,"selected") 
  index = next.changeIndex
  show.style.backgroundImage = "url(img/"+index+".jpg)"
}



/**工具类，考虑到加载问题，放在同一文件下
 * - addClass方法，向一个对象中添加class，如果该对象已存在该class则不进行任何操作
 * - removeClass方法，移除对象中的class，如果该对象不存在该class则不进行任何操作，并返回false
 */
function addClass(obj,newClass){
  var oldClass = obj.className
  var reg = new RegExp("\\b"+newClass+"\\b");
  if(!reg.test(oldClass)){
    obj.className += ' '+newClass
  }else{

  }
}
function removeClass(obj,newClass){
  var reg = new RegExp("\\b"+newClass+"\\b");
  if(reg.test(obj.className)){
    var classNames =  obj.className.split(reg)
    obj.className = ""
    for(i = 0; i < classNames.length; i++){
      if(classNames[i]){
        obj.className += " "+classNames[i]
      }
    }
  }else{
    return false
  }
}
