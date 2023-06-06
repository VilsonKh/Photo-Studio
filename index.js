$(function () {
  $('.portfolio__gallery').slick({
    centerMode: true,
   
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.gallery__button-left',
    nextArrow: '.gallery__button-right',
    dots: false,
  })

  $('.locations__gallery').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.locations__button-left',
    nextArrow: '.locations__button-right',
  })

  const expandArrow = $('.arrow__container');
  const expandButton = $('.opening-button');
  const expandArea = $('.idea__expand')

  expandButton.on('click',function() {
   

    if(expandArea.height()) {
      expandArea.css('height','0');
      expandArrow.css('transform', 'rotate(0deg)');
    } else {
      expandArea.css('height','auto')
      expandArrow.css('transform', 'rotate(180deg)');
    }
  })




})