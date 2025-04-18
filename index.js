gsap.registerPlugin(ScrollTrigger) 
const widthWindow = window.innerWidth
const el = document.querySelector('.titulo_Image2');
const fontOriginal = window.getComputedStyle(el).fontSize;

gsap.set('.image, .fondogris_image1',{
    opacity:0,
})

gsap.set('.spring_section',{
    height: '80%',
    width: '75%',
})


const tl1 = gsap.timeline().to('.video , .fondogris_video',{
    width: '33.33%',
    objectFit:'cover',
    duration:'1',
    x:'+=100%',
}).to('.image , .fondogris_image1',{
    duration:'1',
    y:'-=950',
    opacity:1,
}).to('.container_images',{
    height:100
})
//).to('.titulo_Image2',{
//     x:"+=1000",
//     duration:'2',
// }).to('.subtitle_Image2 , .paragraph_Image2',{
//     y:"-=700",
//     duration:'2',
// })

const tl2 = gsap.timeline().to('.titulo_Image2',{
    x:`${widthWindow>=1700?"+=+65%":widthWindow>=1495?"+=+50%":"+=+65%"}`,
    duration:'3',
    fontSize:`${widthWindow<=1480?'60px':fontOriginal}`
}).to('.subtitle_Image2 , .paragraph_Image2',{
    y:"-=510",
}).to('.btnDiscover',{
    x:"+=500",
}).to('.image2',{
    x:'-=80%',
    opacity:1,
})

const tl3 = gsap.timeline().to('.section_objetivos',{
    height:'60%',
    opacity:1,
    duration:'0.2',
})
const tl4 = gsap.timeline().to('.spring_section',{
    height:'100%',
    width:'100%',
    duration:'0.5',
})

ScrollTrigger.create({
    animation:tl1,
    trigger:'.container',
    start:'top top',
    end:'bottom 80%',
    scrub:true,
    pin:'.container',

    toggleActions: 'play reverse play reverse',
})
ScrollTrigger.create({
    animation:tl2,
    trigger:'.container_Image2 ',
    start:'100% 90%',
    end:'bottom center',
    scrub:true,
    pin:'.container_Image2',

    toggleActions: 'play reverse play reverse',
})

ScrollTrigger.create({
    animation:tl3,
    trigger:'.container_objetivos',
    start:'top bottom',
    end:'top bottom',
    scrub:true,
    pin:'.container_objetivos',
    toggleActions: 'play reverse play reverse',
})
ScrollTrigger.create({
    animation:tl4,
    trigger:'.container_spring',
    start:'top bottom',
    end:'top bottom',
    scrub:true,
    toggleActions: 'play reverse play reverse',
})

const video = document.querySelector('.video');
video.addEventListener('canplaythrough', () => {
    video.play()
      .then(() => {
        console.log("🎬 El video ha comenzado a reproducirse.");
      })
      .catch(error => {
        console.error("⚠️ Error al intentar reproducir el video:", error);
      });
  });



