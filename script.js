
// -----------------  JavaScript  -------------------------
{
    // Active menu bar navigation
    let menuLi = document.querySelectorAll('header ul li a');
    let section = document.querySelectorAll('section');

    function activeMenu(){
        let len= section.length;
        while(--len && window.scrollY+97 < section[len].offsetTop){}
        menuLi.forEach(sec=> sec.classList.remove("active"));
        menuLi[len].classList.add("active");

    }
    activeMenu();
    window.addEventListener("scroll",activeMenu);

}




{
    // Sticky navbar
    const header = document.querySelector("header");
    window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",window.scrollY>50)
    })
}




// affiche header
    let header__elem = document.querySelector("header");
    let scroll__position = 0;
     header__elem.classList.add("hidden__display");

    window.addEventListener("scroll",function(){
    let current__scrollPosition = this.window.scrollY;
     if(current__scrollPosition<scroll__position){
         header__elem.classList.add("hidden__opacity");

     }
     else{
         header__elem.classList.remove("hidden__opacity");
          header__elem.classList.remove("hidden__display");
     }
     scroll__position = current__scrollPosition;

    });


// menu navbar toggle
    let menuIcon= document.querySelector("#menu-icon");
    let navlist= document.querySelector(".navlist");

    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    }

    window.onscroll = ()=>{
        menuIcon.classList.remove("bx-x");
        navlist.classList.remove("open");
    }




//  ------------  JQUERY  ------------------------
var text__email = "nyantsafifaliana240@gmail.com";
var text__about ="My name is ANDRIAFAMANTANANTSOA Ny Antsa Fifaliana and I have a passion for computer development and design, creating innovative and aesthetic solutions. I am 23 years old and I come from Madagascar. I live in Ambohidroa Antananarivo TANA VI. I am always looking for new challenges and learning opportunities. You can check my achievements on this portofolio.";
var text__achievement = "Achievements";
var text__skills = "SKILLS";
var text__others = "OTHERS";
var text__welcome = "Welcome to my portfolio !";



var speedEmail = "120";
var speedAbout = "1";
var speedAchievement = "120";
var speedSkills = "120";
var speedOthers = "120";
var speedWelcome = "80";


var typingEmail = false;
var typingAbout = false;
var typingAchievement = false;
var typingSkills = false;
var typingOthers = false;
var typingWelcome = false;



var _email= $('.emailText');
var email= _email[0];
var _about=$('.aboutText');
var about= _about[0];
var _achievement=$('.achievementText');
var achievement= _achievement[0];
var _skills=$('.skillsText');
var skills= _skills[0];
var _others=$('.othersText');
var others= _others[0];
var _welcome=$('.welcomeText');
var welcome= _welcome[0];


 function isInViewport(elem){
    var bounding = elem.getBoundingClientRect();
    return (bounding.top>=0 && bounding.left>=0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
 }


 function typeWriter(text,i,elem,speed){

    if(elem=="emailText"){
        typingEmail= true;
    }
    if(elem=="achievementText"){
         typingAchievement = true;
     }

    if(elem=="aboutText"){
         typingAbout= true;
    }
    if(elem=="skillsText"){
        typingSkills= true;
    }
    if(elem=="othersText"){
    typingOthers= true;
    }
    if(elem=="welcomeText"){
        typingWelcome= true;
    }

    if(i < text.length){
         $("."+elem).html(text.substring(0,i+1));
         setTimeout(function(){typeWriter(text,i+1,elem,speed);},speed);
     }
 }



 $(window).scroll(function(){
    if(isInViewport(email) && !typingEmail){
        var topEmail = $('.emailText')[0].getBoundingClientRect().top;
        var height1 = $(window).height();
        if(topEmail < height1){
            typeWriter(text__email,0,"emailText",speedEmail);
        }
    }
    if(isInViewport(about) && !typingAbout){
        var topAbout = $('.aboutText')[0].getBoundingClientRect().top;
        var height2 = $(window).height();
        if(topAbout < height2){
            typeWriter(text__about,0,"aboutText",speedAbout);
        }
    }
    if(isInViewport(achievement) && !typingAchievement){
        var topAchievement = $('.achievementText')[0].getBoundingClientRect().top;
        var height3 = $(window).height();
        if(topAchievement < height3){
            typeWriter(text__achievement,0,"achievementText",speedAchievement);
        }
    }  
    if(isInViewport(skills) && !typingSkills){
        var topSkills = $('.skillsText')[0].getBoundingClientRect().top;
        var height4 = $(window).height();
        if(topSkills < height4){
            typeWriter(text__skills,0,"skillsText",speedSkills);
        }
    }  
    if(isInViewport(others) && !typingOthers){
        var topOthers = $('.othersText')[0].getBoundingClientRect().top;
        var height5 = $(window).height();
        if(topOthers < height5){
            typeWriter(text__others,0,"othersText",speedOthers);
        }
    }  
    if(isInViewport(welcome) && !typingWelcome){
        var topWelcome = $('.welcomeText')[0].getBoundingClientRect().top;
        var height6 = $(window).height();
        if(topWelcome < height6){
            typeWriter(text__welcome,0,"welcomeText",speedWelcome);
        }
    } 
 });






// when loading accueil
var items = $('.load-animation');
items.css({opacity:0, bottom : -100});
var i=0;
function showItem(){
    if(i<items.length){
        $(items[i]).animate({opacity:1, bottom:0},600);
        i++;
        setTimeout(showItem,600);
    }
}


// for div when loading
var loader = document.querySelector(".load");
var svg = document.querySelector("._svg");

    $(window).on("load",function(){
         setTimeout(function(){loader.style.transition = "opacity 1s";loader.style.opacity = 0;},3000)
         setTimeout(function(){loader.remove();},4000);
         setTimeout(function(){ document.body.style.overflow = "auto";},4000);
         setTimeout(function(){ svg.style.transition="opacity 1s"; svg.style.opacity =1;},4000);
         setTimeout(function(){showItem();},4000);
         setTimeout(function(){typeWriter(text__email,0, "emailText", speedEmail);},4000);
    })








