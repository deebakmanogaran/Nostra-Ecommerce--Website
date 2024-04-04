// Select the X btn in Html
var xbtn = document.getElementById("btn-x")
var div1 = document.querySelector(".div1")

xbtn.addEventListener("click",function(){
    div1.style.display = "none"

})

// for hiding the X-button 

var subdiv4 = document.querySelector(".subdiv4")
var div3 = document.querySelector(".div3")

subdiv4.addEventListener("click",function(){
    div3.style.display="none"
})

var icon1 = document.querySelector(".icon1")
var div3 = document.querySelector(".div3")

icon1.addEventListener("click",function(){
    div3.style.display="block"
})


// most wanted

var images = document.querySelectorAll(".image1");

images.forEach(function(img) {
    img.addEventListener("click", function(event) {
        if (event.target.src.includes("black-heart")) {
            event.target.src = "./images/red-heart.jpeg";
        } else {
            event.target.src = "./images/black-heart.jpeg";
        }
    });
});

// for slider

var sliderleft = document.getElementById("slider-left-activate")
var sliderright =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

sliderright.addEventListener("click",function(){

    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
}
)

sliderleft.addEventListener("click",function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
 
}
)



