
var SiteName= document.getElementById("sname");
var SiteUrl= document.getElementById("surl");
var AlertBtn = document.getElementById("alert")
const myModal = new bootstrap.Modal('#exampleModal', {
    keyboard: false
  })



// array of the data return from the function i put it on global to store all the objects 
var AllWeb=[]

// to kep the data when refresh the page 
if(localStorage.getItem('AllData') != null){

    AllWeb = JSON.parse(localStorage.getItem('AllData'));

    Display()

}


function ValidName(){

    var regex = /^[A-z]{3,}[0-9]{0,}$/g

    if(regex.test(SiteName.value) == true){


        return true;
    }
    else{


        return false;
    }

}
function ValidUrl(){
    var regex = /^https?:\/\//g

    if(regex.test(SiteUrl.value) == true){


        return true;
    }
    else{


        return false;
    }

}

// to take value from the user 
function GetWebSite(){
     if(ValidName() && ValidUrl() == true ){
        var Data={
            SN:SiteName.value,
            SU:SiteUrl.value,
        };
        SiteUrl.classList.remove("is-invalid")
        SiteName.classList.remove("is-invalid")
         SiteUrl.classList.add("is-valid")
         SiteName.classList.add("is-valid")


        AllWeb.push(Data)
        console.log(AllWeb)
        ClrWebSite()
         Display()
     }
     else {
        myModal.show()  

        SiteUrl.classList.remove("is-valid")
        SiteName.classList.remove("is-valid")
        SiteUrl.classList.add("is-invalid")
         SiteName.classList.add("is-invalid")
     }
   

// AllWeb.push(Data)
// console.log(AllWeb)
// ClrWebSite()
// Display()

// convert array to string 
localStorage.setItem("AllData", JSON.stringify(AllWeb));
//  to show the data on console 
console.log(localStorage.getItem("AllData"));

}

// to remove the value after user input 
function ClrWebSite(){


    var Data={

        SN:SiteName.value="",
        SU:SiteUrl.value="",

    };
    SiteUrl.classList.remove("is-valid")
    SiteUrl.classList.remove("is-invalid")

    SiteName.classList.remove("is-invalid")
    SiteName.classList.remove("is-valid")



}

// to display the html data 
function Display(){

  var cartoona ="";

for(var i =0 ; i<AllWeb.length ; i++){

    cartoona +=` <tr>
                    <td>${i+1}</td>
                    <td>${AllWeb[i].SN}</td>
                    <td><a href=${AllWeb[i].SU} target=_blank ><button type="button" class="btn btn-success" ><span class="me-2"><i class="fa-solid fa-eye"></i></span>visit</button></a></td>
                    <td><button type="button" class="btn btn-danger" onclick="DeleteData(${i})"><span class="me-2"><i class="fa-solid fa-trash"></i></span>Delete</button></td>

                </tr>`

}

document.getElementById("row").innerHTML=cartoona;

}

// button to delete the data 
function DeleteData(i){
    AllWeb.splice(i,1)
    localStorage.setItem("AllData", JSON.stringify(AllWeb));
    Display()

}

