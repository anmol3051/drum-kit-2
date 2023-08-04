var buttons=document.querySelectorAll(".drum");
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        buttonanimation(this.innerHTML);
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})
function buttonanimation(currentkey){
    var activekey=document.querySelector('.'+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed");
    },100);

}
function makesound(key){
    switch (key) {
        case 'w':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'd':
            var t=new Audio("sounds/tom-1.mp3");
            t.play();
            break;
        case 'j':
            var j=new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case 'k':
            var k=new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case 'l':
            var l=new Audio("sounds/tom-4.mp3");
            l.play();
            break;
        default:
            alert("error caused by button "+buttonhtml);
            break;
    }
}

// var audio=new Audio("sounds/crash.mp3");
// audio.play();