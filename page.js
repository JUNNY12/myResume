
const headeradd = document.querySelector(".headeradd")
const fixedHeader =document.querySelector(".fixedHeader")
const mainCont = document.querySelector(".mainCont")
const connectContainer = document.querySelector(".connectContainer")
const menuButton = document.getElementById("menuClick")
const menu_Btn = document.querySelector(".menuBtn")
const mainbodyremove = document.querySelector(".mainbodyremove")
const introHead = document.querySelector(".introHead")
const  mainConnectCont = document.querySelector(".mainConnectCont")
const closeButton = document.getElementById("closeButton")
const close_Btn = document.querySelector(".closeBtn")
const lightMode = document.getElementById("lightMode")
const dark_mode = document.getElementById("darkMode")
const main_Body = document.querySelector(".mainBody")
const header_Light = document.querySelector(".headerLight")
const header_dark = document.querySelector(".headerDark")
const main_Text = document.querySelector(".mainText")
const header_Text = document.querySelector(".headerText")
const  connect_Text =document.querySelector(".connectText")
const change_cont = document.querySelector(".changeCont")
const footer_Container= document.querySelector(".footer-cont")

// ADDING TOP BLACK CONTAINER
window.addEventListener("scroll",() =>{
    if(window.scrollY >=100){
        headeradd.style.display="block"
        
    }
    else{
        headeradd.style.display="none"
    }
})



// DISPLAYING MENU CONTAINER
 function menuClick(){
    mainCont.style.display="none"
    headeradd.style.display="none"
    introHead.style.display ="none"
    mainConnectCont.style.display = "block"
    change_cont.style.display="none"
    footer_Container.style.display="none"

    

 }


//  ADDING CLICK TO THE MENU BUTTON

menuButton.addEventListener("click", function(e){
    e.preventDefault()
    menuClick();
})


// CLOSE BUTTON

function closeBtn(){
    mainCont.style.display="block"
    headeradd.style.display="block"
    introHead.style.display ="block"
    mainConnectCont.style.display = "none"
    change_cont.style.display="block"
    footer_Container.style.display="block"
}


closeButton.addEventListener("click", function(e){
    e.preventDefault()
    closeBtn();
})



// LIGHT MODE SECTION

function light_Mode(){
    main_Body.style.backgroundColor="white";
    header_Light.style.color="black";
    main_Text.style.backgroundColor="rgb(223, 223, 223)"
    main_Text.style.color="black";
    lightMode.style.display= "none";
    dark_mode.style.display= "block"
    fixedHeader.style.backgroundColor="white"
    menu_Btn.style.color="black"
    header_Text.style.color="black"
    mainConnectCont.style.backgroundColor="#e4dede"
    connect_Text.style.color="black"


}

lightMode.addEventListener("click", function(e){
    e.preventDefault()
    light_Mode()

})


// DARK MODE SECTION

function dark_Mode(){
    main_Body.style.backgroundColor="black";
    lightMode.style.display="block"
    dark_mode.style.display="none"
    header_dark.style.color="white";
    main_Text.style.backgroundColor="rgb(68, 66, 66)"
    main_Text.style.color="rgb(184, 184, 184)";
    fixedHeader.style.backgroundColor="black"
    menu_Btn.style.color="white"
    header_Text.style.color="white"
    mainConnectCont.style.backgroundColor="gray"
    connect_Text.style.color="white"

}

dark_mode.addEventListener("click", function(e){
    e.preventDefault()
    dark_Mode()
})

