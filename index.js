gsap.registerPlugin(ScrollTrigger) 


gsap.set('.image',{
    opacity:0,
})
const tl1 = gsap.timeline().to('.video',{
    width: '33.33%',
    objectFit:'cover',
    duration:'0.01',
    x:'+=450',
}).to('.image',{
    opacity:1,
    y:'-=955',
    duration:'0.5',
})

ScrollTrigger.create({
    animation:tl1,
    trigger:'.container_video',
    start:'20% 10%',
    end:'bottom 80%',
    scrub:true,
    pin:true,
    toggleActions: 'play reverse play reverse',
})



