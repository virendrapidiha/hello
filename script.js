var tl = gsap.timeline();

tl.from(".top",{
    Y: '-100%',
    duration: 0.5,
    opacity:0,
    stagger: 0.3
})

tl.from(".top .left,.top .right",{
    opacity: 0,
    duration: 0.3,
    delay:0.1,
    stagger: 0.3
})

tl.from(".center .left",{
    x: -100,
    duration: 0.3,
    dealy: 0.1,
    opacity: 0,
    stagger: 0.3,
})

tl.from(".center .right",{
    opacity:0,
    duration: 0.2,
    delay: 0.1,
    stagger: 0.3
})