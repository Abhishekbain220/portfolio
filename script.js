gsap.from(".heading",{
    x:100,
    opacity:0,
    duration:1,
    delay:1
    
})

const tl=gsap.timeline()

tl.from(".profileImage",{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:".profileImage",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
})
tl.from(".intro",{
    opacity:0,
    x:-100,
    scrollTrigger:{
        trigger:".intro",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from(".Projects",{
    opacity:0,
    duration:5,
    y:-100,
    scrollTrigger:{
        trigger:".Projects",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})

gsap.from(".ECommerce",{
    opacity:0,
    duration:5,
    x:200,
    scrollTrigger:{
        trigger:".ECommerce",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})
gsap.from(".socialMedia",{
    opacity:0,
    duration:5,
    x:200,
    scrollTrigger:{
        trigger:".socialMedia",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})
gsap.from(".videoApp",{
    opacity:0,
    duration:10,
    x:200,
    scrollTrigger:{
        trigger:".videoApp",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})


gsap.from(".Frontend",{
    opacity:0,
    duration:5,
    y:-100,
    scrollTrigger:{
        trigger:".Frontend",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})

gsap.from(".dummy",{
    opacity:0,
    duration:5,
    x:200,
    scrollTrigger:{
        trigger:".dummy",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})

gsap.from(".web",{
    opacity:0,
    duration:5,
    x:-200,
    scrollTrigger:{
        trigger:".web",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})


