/**
 * Created by 糯米 on 2017/8/24.
 */
(function(window){
 function Map(option){
   this.color=option.color||"pink";
   this.size=option.size||25;
   this.row=option.row||20;
   this.col=option.col||30;
   this.map=null;
 }
  Map.prototype.render=function(){
    var m=document.createElement("div");
    this.map=m;
    m.style.option="relative";
    m.style.width=this.size*this.col+"px";
    m.style.height=this.size*this.row+"px";
    m.style.backgroundColor=this.color;
    window.document.body.appendChild(m);
  };
  window.Map=Map;
})(window);