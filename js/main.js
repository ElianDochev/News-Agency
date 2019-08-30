
  //---------------------------------------------------------------------------------------------------------------------------------------------
  window.addEventListener('scroll',function(){
    if(this.window.scrollY>100){
      document.getElementById('main-nav').style.opacity=0.95;
    }
    else{
      document.getElementById('main-nav').style.opacity=1;
    }
  }); 
  