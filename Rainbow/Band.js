class Band {
  
    constructor(x,y,w,h,color) {
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.color = color;
  }

    appear()
    {
      stroke("white");
      fill(this.color);
      rect(this.x, this.y, this.w, this.h,);
    }

}