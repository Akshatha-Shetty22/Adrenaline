setTimeout(changepages,1500)
function changepages()
{
    document.getElementById("firstpage").style.display="none";
    document.getElementById("secondpage").style.display="";
}

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.getElementById("r6").addEventListener("click",sample);

function sample()
{
    var db=openDatabase('adrebase','1.0','AdreDB',2*1024*1024);
    var a=document.getElementById("r1").value;
    var b=document.getElementById("r2").value;
    var c=document.getElementById("r3").value;
    var d=document.getElementById("r4").value;
    var e=document.getElementById("r5").value;
    if(a.length==0)
    {
        alert("Name field cannot be blank!!");
    }
     else if(b.length==0)
        {
            alert("Email field cannot be blank!!")
        }
     else if(c.length==0)
        {
            alert("College name field cannot be blank!!")
        }
     else if(d.length==0)
        {
            alert("Usn field cannot be blank!!")
        }
     else if(e.length==0)
        {
            alert("Mobile.no field cannot be blank!!")
        }
    else{
              db.transaction(function(tx)
                {
                    tx.executeSql("Create table if not exists information(email unique,name,college,usn,mobileno)");
                    tx.executeSql("Insert into information values(?,?,?,?,?)",[b,a,c,d,e]);
                });
    
            alert("REGISTRATION SUCCESSFUL");
          }
        
    }

