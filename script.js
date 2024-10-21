function section1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
    y:-20,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.2,
})
tl.from(".center-part1 h1,.center-part1 p",{
    x:-150,
    opacity:0,
    duration:0.3,
    stagger:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})
tl.from(".center-part2 img",{
    x:100,
    opacity:0,
    duration:0.5,
},"-=0.7")
tl.from(".section1bottom img",{
    opacity:0,
    y:20,
    stagger:0.15,
    duration:0.5
})

}
section1Animation()


function section2Animation(){
   

 var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 60%",
        end:"top 0%",
        scrub:1,

    }
 })

 tl2.from(".services",{
    y:20,
    opacity:0,
 })
 tl2.from(".elem.line1.left",{
    x:-100,
    opacity:0,
    duration:1
 },"anime")
 tl2.from(".elem.line1.right",{
    x:100,
    opacity:0,
    duration:1
 },"anime")
 tl2.from(".elem.line2.left",{
    x:-100,
    opacity:0,
    duration:1
 },"anime1")
 tl2.from(".elem.line2.right",{
    x:100,
    opacity:0,
    duration:1
 },"anime1") 
}
section2Animation()