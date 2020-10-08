function hascollided(ob1,ob2) {
  bulletRightEdge=ob1.x + ob1.width/2;   
  wallLeftEdge=ob2.x - ob2.width/2;
      weight=random(30,52)
    if (bulletRightEdge>=wallLeftEdge) {
      return true
    } 
    return false;
  }