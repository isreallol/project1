document.addEventListener("DOMContentLoaded", animation);

function animation(){
    /*gsap.from("#title", {
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
    gsap.to("#title", {
        y: -30,
        opacity: 0,
        duration: 1.5,
        ease: "power1.in"
    });

    gsap.to("#subtitle", {
        y: -20,
        opacity: 0,
        duration: 2,
        ease: "power1.in",
        delay: 0.5
    });*/

    gsap.from("#title", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "back.in(1.5)"
    });

    gsap.from("#subtitle", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "back.in(1.5)",
        delay: 0.5,
        onComplete: function(){gsap.to('#options',{
            duration: 1,
            opacity: 1,
            delay: 0.5,
            stagger: 0.2, // stagger in from the left with a 0.2 second gap in between animations
            y: -10,
            ease: "sine.out"
        })}
    });

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
    //TAKEOUT
    gsap.from("#t_subtitle", {
        opacity: 0,
        easein: 'power1,out',
        duration: 3.5,
    })

    gsap.from("#t_subtitle", {
        x: 390,
        duration: 2.5,
    })

    gsap.from(".main-image", {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        delay: 1,
        ease: "power2.out"
    });

}

