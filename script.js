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
        x: 250,
        //ease: 'bounce.out',
        duration: 2,
    })
    gsap.to("#subtitle", {
        x: 280,
        //ease: 'bounce.out',
        duration: 2.5,
    })

    const textElement = document.getElementById('myGlowText');

    textElement.addEventListener('mouseover', () => {
    textElement.classList.add('glowing-text');
    });

    textElement.addEventListener('mouseout', () => {
    textElement.classList.remove('glowing-text');
    });

}