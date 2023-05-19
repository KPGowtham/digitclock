var date=new Date()
function clk()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh=hh-12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fulltime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    document.getElementById("sec").innerHTML=ss
    if(mo==0)
    {
        mo="Jan"
    }
    if(mo==1)
    {
        mo="Feb"
    }
    if(mo==2)
    {
        mo="Mar"
    }
    if(mo==3)
    {
        mo="apr"
    }
    if(mo==4)
    {
        mo="may"
    }
    if(mo==5)
    {
        mo="june"
    }
    if(mo==6)
    {
        mo="july"
    }
    if(mo==7)
    {
        mo="aug"
    }
    if(mo==8)
    {
        mo="sept"
    }
    if(mo==9)
    {
        mo="oct"
    }
    if(mo==10)
    {
        mo="nov"
    }
    if(mo==11)
    {
        mo="dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body");
    document.getElementById("date").innerHTML=fullDate
    switch(dy)
    {
        case 0:dy="Sunday"
        bdy.style.backgroundImage="url(1.jpeg)"
        break;

        case 1:dy="Monday"
        bdy.style.backgroundImage="url(2.jpeg)"
        break;
        case 2:dy="Tuesday"
        bdy.style.backgroundImage="url(3.jpeg)"
        break;
        case 3:dy="Wednesday"
        bdy.style.backgroundImage="url(4.jpeg)"
        break;
        case 4:dy="Thursday"
        bdy.style.backgroundImage="url(a.jpeg)"
        break;
        case 5:dy="Friday"
        bdy.style.backgroundImage="url(b.jpeg)"
        break;
        case 66:dy="Saturaday"
        bdy.style.backgroundImage="url(pikachu-pokemon.gif)"
        break;
    }
    document.getElementById("day").innerHTML=dy;
    setTimeout(clk,1000)


}
function greet()
{
    var Time=date.getHours()
    if(Time>=5 && Time<=12)
    {
        document.getElementById("message").innerHTML="Good Morn!!!"
        document.getElementById("vid").src=""
        document.getElementById("container").style.backgroundColor="rgba(250,250,35,.53"
        document.getElementById("time").style.color="black"
        document.getElementById("date").style.color="darkblue"
        document.getElementById("day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }
    else if(Time>=12 && Time<16)
    {
        document.getElementById("message").innerHTML="Good afternoon!!!"
        document.getElementById("vid").src=""
        document.getElementById("container").style.backgroundColor="rgba(250,250,35,.53"
        document.getElementById("time").style.color="black"
        document.getElementById("date").style.color="darkblue"
        document.getElementById("day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }
    else if(Time>=16 && Time<20)
    {
        document.getElementById("message").innerHTML="Good even!!!"
        document.getElementById("vid").src=""
        document.getElementById("container").style.backgroundColor="rgba(250,250,35,.53"
        document.getElementById("time").style.color="black"
        document.getElementById("date").style.color="darkblue"
        document.getElementById("day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }
    else
    {
        document.getElementById("message").innerHTML="Good night!!!"
        document.getElementById("vid").src=""
        document.getElementById("container").style.backgroundColor="rgba(250,250,35,.53"
        document.getElementById("time").style.color="black"
        document.getElementById("date").style.color="darkblue"
        document.getElementById("day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }

}
greet()
function removeTheGreetWindow(){
    document.getElementById("greet").style.display="none"
}
setTimeout(removeTheGreetWindow,5000) 
function removeAlarm()
{
    document.getElementById("alarm").style.display="none"
}
function loadAlarm()
{
    document.getElementById("alarm").style.display="flex"
}
var audioFile=new Audio()
audioFile.src="./kabir.mp3"

function setAlarm()
{
    var select=document.querySelectorAll("select")
    var userhh=select[0].value
    var usermm=select[1].value
    var useram_pm=select[2].value
    console.log(userhh,usermm,useram_pm)

    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh=hh-12
        }
        
    }
    if(hh==0)
    {
        hh=12
    }
    console.log(hh,mm,am_pm);
    if(userhh==hh && usermm==mm && useram_pm==am_pm)
    {
        audioFile.play();
    }
    else
    {
        audioFile.pause();
    }
    setTimeout(setAlarm,1000)
    document.getElementById("alarm").style.display="none"
}



