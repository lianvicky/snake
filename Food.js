/**
 * Created by 糯米 on 2017/8/24.
 */
(function(window){
  function Food(option){
    this.map=option.map;
    this.color=option.color||"pink";
    this.size=option.size||25;
    this.x=0;
    this.y=0;
    this.setPos(); //随机获取位置
  }
  Food.prototype.render=function(){
    var f=document.createElement("div");
    f.style.position="absolute";
    f.style.width=this.size+"px";
    f.style.height=this.size+"px";
    //console.log(this.x);
    //console.log(this.y);
    f.style.left=this.x*this.size+"px";
    f.style.top=this.y*this.size+"px";
    f.style.backgroundColor=this.color;
    this.map.map.appendChild(f);
  }
  Food.prototype.setPos=function(){
    this.x=parseInt(Math.random()*this.map.col);
    this.y=parseInt(Math.random()*this.map.row);
  }
  window.Food=Food;
})(window);