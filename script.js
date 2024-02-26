function cursoeEffect() {
    var page1con = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")


page1con.addEventListener ("mousemove", function(dets){
    gsap.to(cursor,{
        left:dets.x-63,
        top:dets.y-67
    })

})

page1con.addEventListener ("mouseenter", function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1

    })

})

page1con.addEventListener ("mouseleave", function(dets){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })

})

}

cursoeEffect()

function Dollarloading(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay: 1.5,
        duration: 0.2,
        stagger:0.2
        
    })
    
    gsap.from("#page1 h3", {
        x:-100,
        opacity:0,
        delay: 0.8,
        duration: 1
    })
    
    gsap.from("#page1 h4", {
        x:100,
        opacity:0,
        delay: 0.8,
        duration: 1
    })

}

Dollarloading()

gsap.from("#nav a",{
    x:-100,
    opacity:0,
    duration:0.8,
})

gsap.from("#nav #links ",{
    x:100,
    opacity:0,
    duration:0.8,
})


// gsap.from("#page1 video",{
//     opacity: 0,
//     duration:0.5
// })