/*
transform-origin
images
*/
//document.getElementById("hr").value=null;
//document.getElementById("min").value=null;
var uname;
function rClock(){
  uname = prompt("Enter your name: ");
	check();
	//clock();
	setInterval(check, 1000);
}

function check(){
	var hour=document.getElementById("hr").value;
    var minute=document.getElementById("m").value;
  if(hour=="" && minute==""){
     clock();
 }else{
     clock2();
	}
	
}

function clock2(){
  var hour=document.getElementById("hr").value;
  var minute=document.getElementById("m").value;
  var date= new Date();
  var time=[hour, minute, date.getSeconds()];
  cc(time);
}

function clock(){
  var date= new Date();
  var time=[date.getHours(), date.getMinutes(), date.getSeconds()];
  cc(time);
}
function cc(time){
	 var clockDivs=[document.getElementById("hour"), document.getElementById("min"),document.getElementById("sec")];
  
  var hour=time[1]/2+time[0]*30;
  
  clockDivs[0].style.transform="rotate("+hour +"deg)";
  clockDivs[1].style.transform="rotate("+ time[1]*6 +"deg)";
  clockDivs[2].style.transform="rotate("+ time[2]*6 +"deg)";
  var h=time[0];
   var m=time[1];
    var s=time[2];
	if(h>=5 && h<12){
     document.body.style.backgroundImage = "url('images/bg/morning_blur.jpg')";
	 document.getElementById("greet").innerHTML="Good Morning, "+uname;
	}else if(h>=12 && h<=16){
	 document.body.style.backgroundImage = "url('images/bg/afternoon_blur.jpg')";
	 document.getElementById("greet").innerHTML="Good Afternoon, "+uname;
	}else if(h>16 && h<=19){
	 document.body.style.backgroundImage = "url('images/bg/evening_blur.jpg')";
	 document.getElementById("greet").innerHTML="Good Evening, "+uname;
	}else if(h>19 || h<5){
	 document.body.style.backgroundImage = "url('images/bg/night_blur.jpg')";
	 document.getElementById("greet").innerHTML="Good Night, "+uname;
	 
	}else{
	alert("oops");
	}
	//document.getElementById("val").innerHTML=sec;
}

function hideIt(){
 document.getElementById("hr").value="";
 document.getElementById("m").value="";
 document.getElementById("show").style.display="none";
}
function custom(){
 var check=document.getElementById("show").style.display;
 if(check=="none"){
   check=document.getElementById("show").style.display="block";
 }else{
   check=document.getElementById("show").style.display="none";
 }

}
//fucntion to change the watch face
function changeclock()
{
  var clc = document.getElementById("clockstyle").selectedIndex;
  if(clc==1)
  {
    document.getElementById('clockFace').style.backgroundImage = "url('images/dark_clock_face1.png')";
    document.getElementById('hour').style.backgroundImage = "url('images/dark_clock_hour.png')";
    document.getElementById('min').style.backgroundImage = "url('images/dark_clock_min.png')";
    document.getElementById('sec').style.backgroundImage = "url('images/dark_clock_sec.png')";
  }
  else if(clc==2)
  {
    document.getElementById('clockFace').style.backgroundImage = "url('images/classic_clock_face1.png')";
    document.getElementById('hour').style.backgroundImage = "url('images/classic_clock_hour.png')";
    document.getElementById('min').style.backgroundImage = "url('images/classic_clock_min.png')";
    document.getElementById('sec').style.backgroundImage = "url('images/classic_clock_sec.png')";
  }
  else if(clc==3)
  {
    document.getElementById('clockFace').style.backgroundImage = "url('images/old_clock_face.png')";
    document.getElementById('hour').style.backgroundImage = "url('images/old_clock_hour.png')";
    document.getElementById('min').style.backgroundImage = "url('images/old_clock_min.png')";
    document.getElementById('sec').style.backgroundImage = "url('images/old_clock_sec.png')";
  }
}
