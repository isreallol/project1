document.addEventListener("DOMContentLoaded", animation);

function animation(){
    /*gsap.from('#title', {
        y:-40,
        ease: 'bounce.out',
        duration: 3,
        onComplete: function(){gsap.to('#title',{
            opacity: 0,
            easein: 'power1,out',
            duration: 4,
        })}
    })

    gsap.from('#subtitle', {
        y:-20,
        ease: 'bounce.out',
        duration: 3,
        onComplete: function(){gsap.to('#subtitle',{
            opacity: 0,
            easein: 'power1,out',
            duration: 7,
        })}
    })*/

    gsap.from("#title", {
        opacity: 0,
        easein: 'power1,out',
        duration: 1.5,
    })

    gsap.to('#title',{
        y: 20,
            ease: 'bounce.out',
            duration: 1.5,
    })

    gsap.from("#subtitle", {
        opacity: 0,
        easein: 'power1,out',
        duration: 2,
    })

    gsap.to("#subtitle", {
        x: 390,
        duration: 2,
        onComplete: function(){gsap.to('#options',{
            duration: 1,
            opacity: 1,
            delay: 0.5,
            stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
            ease: "sine.out"
        })}
    })

    //LEFTOVERS
    gsap.from("#leftover_title", {
        opacity: 0,
        easein: 'power1,out',
        duration: 2.5,
    })

    gsap.from("#leftover_title", {
        x: 390,
        duration: 2.5,
    })

    gsap.from("#leftover_subtitle", {
        opacity: 0,
        easein: 'power1,out',
        duration: 4.5,
    })

    gsap.from("#leftover_subtitle", {
        x: 390,
        duration: 4.5,
    })

    //CRISPER
    gsap.from("#faze_up", {
        opacity: 0,
        easein: 'power1,out',
        duration: 2.5,
    })

    gsap.from("#faze_up", {
        y:40,
        //ease: 'bounce.out',
        duration: 2.5,
    })
}

