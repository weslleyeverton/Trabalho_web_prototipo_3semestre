// As animações scroll foram importadas do site; https://greensock.com/
gsap.timeline({
    scrollTrigger:{
         trigger:".box",
         start:"center center", //Animation start at this point
         end: "bottom top", //Animation End at this point
         scrub: true,
         pin: true
    }
})
.from(".text1", {x : innerWidth * 1 })
.from(".text2", {x : innerWidth * -1 })
.from(".text3", {x : innerWidth * 1 })
.from(".paragrafo", {y : innerWidth * 1 })
.from(".svg", {
    y : innerHeight * 1,
    rotate: 360
 })

 //esportes

 gsap.timeline({
    scrollTrigger:{
         trigger:".box2",
         start:"center center", //começot
         end: "bottom top", //fim
         scrub: true,
         pin: true
    }
})
.from(".text4", {x : innerWidth * 1 })
.from(".text5", {x : innerWidth * -1 })
.from(".text6", {x : innerWidth * 1 })
.from(".paragrafo2", {y : innerWidth * 1 })
.from(".svg-esporte", {
    x : innerHeight * 1,
    rotate: 360
 })

 //compras

 gsap.timeline({
    scrollTrigger:{
         trigger:".box3",
         start:"center center", //começo animaçao
         end: "bottom top", //fim animaçao
         scrub: true,
         pin: true
    }
})
.from(".text7", {x : innerWidth * 1 })
.from(".text8", {x : innerWidth * -1 })
.from(".text9", {x : innerWidth * 1 })
.from(".paragrafo3", {y : innerWidth * 1 })
.from(".svg-compra", {
    x : innerHeight * -1,
    rotate: 360
 })
