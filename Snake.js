/**
 * Created by 糯米 on 2017/8/24.
 */
(function(window){
  function Snake(option){
    this.map=option.map;
    this.size=option.size||25;
    this.direction="left";
    this.body=[
      {x:15,y:5},
      {x:16,y:5},
      {x:17,y:5},
      {x:18,y:5}
    ];
  }
    Snake.prototype={
      render:function(){
        for (var i = 0; i < this.body.length; i++) {
          var s = document.createElement("div");
          s.style.backgroundColor = "#ccc";
          if (i == 0) {
            s.style.backgroundColor = "yellow";
          }
          s.style.position="absolute";
          s.style.left=this.size*this.body[i].x+"px";
          s.style.top=this.size*this.body[i].y+"px";
          s.style.width=this.size+"px";
          s.style.height=this.size+"px";
          s.style.borderRadius="50%";
          this.map.map.appendChild(s);
        }
      },
      move:function(){
         for(var i=this.body.length-1;i>0;i--){
           this.body[i].x=this.body[i-1].x;
           this.body[i].y=this.body[i-1].y;
         }
        var head=this.body[0];
        switch(this.direction){
          case "left":
            head.x--;
            break;
          case "right":
            head.x++;
            break;
          case "up":
            head.y--;
            break;
          case "down":
            head.y++;
            break;
        }
      },
      eat:function(){
        var foot=this.body[this.body.length-1];
        var obj={
          x:foot.x,
          y:foot.y
        }
        this.body.push(obj);
        //this.body.push(foot);
        //console.log(this.body);
      }

    }
  window.Snake=Snake;
})(window);