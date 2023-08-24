// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});

(function() {
    $('nav a').on('click', function(e) {
      console.log(this.hash)
      if(this.hash !== ''){
        e.preventDefault()
  
        const hash = this.hash
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        },
        800)
      }
    })
    // $('.fade').addClass('active')
  })