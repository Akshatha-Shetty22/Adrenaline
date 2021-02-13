document.getElementById("d1").addEventListener("click",fun1);
document.getElementById("d2").addEventListener("click",fun2);
document.getElementById("d3").addEventListener("click",fun3);
document.getElementById("d4").addEventListener("click",fun4);
function fun1()
{
    
    document.getElementById("secondpage1").style.display="none";
    document.getElementById("thirdpage1").style.display="none";
    document.getElementById("fourthpage1").style.display="none";
    document.getElementById("firstpage1").style.display="";
}

function fun2()
{
    document.getElementById("firstpage1").style.display="none";
    document.getElementById("thirdpage1").style.display="none";
    document.getElementById("fourthpage1").style.display="none";
    document.getElementById("secondpage1").style.display="";
}
function fun3()
{
    document.getElementById("firstpage1").style.display="none";
    document.getElementById("secondpage1").style.display="none";
    document.getElementById("fourthpage1").style.display="none";
    document.getElementById("thirdpage1").style.display="";
}
function fun4()
{
    document.getElementById("firstpage1").style.display="none";
    document.getElementById("secondpage1").style.display="none";
    document.getElementById("thirdpage1").style.display="none";
    document.getElementById("fourthpage1").style.display="";
}

