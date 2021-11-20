// //////////////////DIV 1//////////////

function foo1(){
    var bgin=prompt("Enter color for BACKGROUND")
    var btn=document.getElementById("btn1")
    btn.style.backgroundColor=bgin


}
function foo2(){
    
    var textin=prompt("Enter color for TEXT")
    var btn=document.getElementById("btn1")
    btn.style.color=textin

}
// //////////////////DIV 2//////////////

function shoImg(){
    var img0 = document.getElementById("Myimg")
      
}


function bigImg(){
    var img1 = document.getElementById("Myimg")
    img1.style.width = " 400px"
}

function smaImg(){
    var carImg = document.getElementById("Myimg")
    carImg.style.width= " 100px"
}

function hidImg(){
    var carImg = document.getElementById("Myimg")
    carImg.className += " hidImg"                      /////style.css////
}



// //////////////////DIV 3//////////////

function bulbToggler( id , element  ){
            
            if(id == 1){
                element.src = "./images/on (1).gif"
            }else{
                element.src = "./images/off.gif"
    
            }
    
    }



    // //////////////////DIV 4//////////////
 



 function paraclr(){
    var clr1=prompt("enter 1st clr")
    var clr2=prompt("enter 2nd clr")
    var clr3=prompt("enter 3rd clr")
    var clr4=prompt("enter 4th clr")

    var para= document.getElementsByTagName("p")
     para[0].style.color=clr1
     para[1].style.color=clr2
     para[2].style.color=clr3
     para[3].style.color=clr4
 }   