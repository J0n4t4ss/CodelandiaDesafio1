//ScrollReveal: show elements when scroll the page 
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
  })
  
  scrollReveal.reveal(
    `#card-1 .notice, 
    #card-2 .notice, 
    #card-3 .notice
    `,
    { interval: 100 }
  )