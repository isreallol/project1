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

   gsap.to("#title", {
        x: 350,
        //ease: 'bounce.out',
        duration: 2,
    })
    gsap.to("#subtitle", {
        x: 370,
        //ease: 'bounce.out',
        duration: 2.5,
    })

    gsap.to("#options", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
        stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
        ease: "sine.out"
    });

}

