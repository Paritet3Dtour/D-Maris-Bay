$(function() {

// For video-banner
  var video_modal = $('.videoModal').remodal();
  $('#banner-video-play').click(function(){
    if (screen.width > 1024) { 
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('#video-banner').get(0).play();
      $('.banner__shadow').addClass('active');
    }else{
      $(this).removeClass('active');
      $('#video-banner').get(0).pause(); 
      $('.banner__shadow').removeClass('active');
    }}else{
      video_modal.open();
    }
  });

// For button "scrollTop"
$(window).scroll(function() {
  if ($(this).scrollTop() > $('.banner').height()) {
    if (screen.width > 1024) {
    $('#banner-video-play').removeClass('active');
    $('.banner__shadow').removeClass('active');
    $('#video-banner').get(0).pause();} 
    $('header').addClass('active');
  } else {  
    $('header').removeClass('active');
  }; 
});

// For menu
$('#header_menu_btn').click(function(){
    $('.menu').show().addClass('active');
  });
  $('.menu .nav li').click(function(){  
    $('.menu').hide().removeClass('active');
  });
  $('#menu_out').click(function(){
    $('.menu').hide().removeClass('active');
  });

// For smooth scrolling to anchors
$(document).ready(function() {
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if ( 
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 700, function() {
          var $target = $(target); 
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
          };
        });
      }
    }
  }); });

// Animations on scroll
  var $animation_elements = $('.animation-element');
  var $window = $(window);
  var check_if_in_view = function() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position - 100 <= window_bottom_position)) {
            $element.addClass('in-view');
      } else {
        // $element.removeClass('in-view');
      }
    });
  }
  check_if_in_view();
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

// For slider (number-card)
var numSlick = 0;
$('.about-hotel__item__listGallery.sl').each( function() {
  numSlick++;
  $(this).addClass( 'slider-' + numSlick ).slick({
    arrows: true,
    prevArrow: $(this).parent().find('.hotel-gallery__prev'),    
    nextArrow: $(this).parent().find('.hotel-gallery__next'), 
    fade: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,  
    responsive: [{
          breakpoint: 767,    
          settings: {
          arrows: false, 
          dots: true,  
      }
  }] 
  });
}); 

// For slider (reviews)
  $('.reviews__list').slick({
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2, 
        dots: false,
        infinite: true, 
        arrows: true,
        prevArrow: $('.reviews .hotel-gallery__prev'),    
        nextArrow: $('.reviews .hotel-gallery__next'),      
        autoplay: false,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
      }
    }]
    });
$('.reviews__item').click(function(){
  $('.reviewModal__info__name').text($(this).find('.reviews__item__info__name').text()); 
  $('.reviewModal__info__date').text($(this).find('.reviews__item__info__date').text()); 
  $('.reviewModal__text').html($(this).find('.reviews__item__info__text').html()); 
  $('.reviewModal__info__photo').attr('style', $(this).find('.reviews__item__info__photo').attr('style'));   
});

// For services list 
$('.services__item__heading').click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active').parent().find('.services__item__content').slideUp();
  }else{
    $(this).addClass('active').parent().find('.services__item__content').slideDown();
  }
});

// For gallery rooms
var gitem1 = [
  {"src": 'img/rooms/default/1/1.jpg','thumb': 'img/rooms/default/1/1.jpg'},
  {"src": 'img/rooms/default/1/2.jpg','thumb': 'img/rooms/default/1/2.jpg'},
  {"src": 'img/rooms/default/1/3.jpg','thumb': 'img/rooms/default/1/3.jpg'},
  {"src": 'img/rooms/default/1/4.jpg','thumb': 'img/rooms/default/1/4.jpg'},
  {"src": 'img/rooms/default/1/5.jpg','thumb': 'img/rooms/default/1/5.jpg'},
  {"src": 'img/rooms/default/1/6.jpg','thumb': 'img/rooms/default/1/6.jpg'},
];
var gitem2 = [
  {"src": 'img/rooms/default/2/1.jpg','thumb': 'img/rooms/default/2/1.jpg'}, 
  {"src": 'img/rooms/default/2/2.jpg','thumb': 'img/rooms/default/2/2.jpg'}, 
  {"src": 'img/rooms/default/2/3.jpg','thumb': 'img/rooms/default/2/3.jpg'}, 
  {"src": 'img/rooms/default/2/4.jpg','thumb': 'img/rooms/default/2/4.jpg'}, 
  {"src": 'img/rooms/default/2/5.jpg','thumb': 'img/rooms/default/2/5.jpg'}, 
  {"src": 'img/rooms/default/2/6.jpg','thumb': 'img/rooms/default/2/6.jpg'}, 
];
var gitem3 = [
  {"src": 'img/rooms/default/3/1.jpg','thumb': 'img/rooms/default/3/1.jpg'},
  {"src": 'img/rooms/default/3/2.jpg','thumb': 'img/rooms/default/3/2.jpg'},
  {"src": 'img/rooms/default/3/3.jpg','thumb': 'img/rooms/default/3/3.jpg'},
  {"src": 'img/rooms/default/3/4.jpg','thumb': 'img/rooms/default/3/4.jpg'},
  {"src": 'img/rooms/default/3/5.jpg','thumb': 'img/rooms/default/3/5.jpg'},
  {"src": 'img/rooms/default/3/6.jpg','thumb': 'img/rooms/default/3/6.jpg'},
]; 
var gitem4 = [
  {"src": 'img/rooms/default/4/1.jpg','thumb': 'img/rooms/default/4/1.jpg'},
  {"src": 'img/rooms/default/4/2.jpg','thumb': 'img/rooms/default/4/2.jpg'},
  {"src": 'img/rooms/default/4/3.jpg','thumb': 'img/rooms/default/4/3.jpg'},
  {"src": 'img/rooms/default/4/4.jpg','thumb': 'img/rooms/default/4/4.jpg'},
  {"src": 'img/rooms/default/4/5.jpg','thumb': 'img/rooms/default/4/5.jpg'},
  {"src": 'img/rooms/default/4/6.jpg','thumb': 'img/rooms/default/4/6.jpg'},
];   
var gitem5 = [
  {"src": 'img/rooms/default/5/1.jpg','thumb': 'img/rooms/default/5/1.jpg'},
  {"src": 'img/rooms/default/5/2.jpg','thumb': 'img/rooms/default/5/2.jpg'},
  {"src": 'img/rooms/default/5/3.jpg','thumb': 'img/rooms/default/5/3.jpg'},
  {"src": 'img/rooms/default/5/4.jpg','thumb': 'img/rooms/default/5/4.jpg'}, 
  {"src": 'img/rooms/default/5/5.jpg','thumb': 'img/rooms/default/5/5.jpg'},
  {"src": 'img/rooms/default/5/6.jpg','thumb': 'img/rooms/default/5/6.jpg'},
];
var gitem7 = [  
  {"src": 'img/rooms/suite/1/1.jpg','thumb': 'img/rooms/suite/1/1.jpg'},
  {"src": 'img/rooms/suite/1/2.jpg','thumb': 'img/rooms/suite/1/2.jpg'},
  {"src": 'img/rooms/suite/1/3.jpg','thumb': 'img/rooms/suite/1/3.jpg'},
  {"src": 'img/rooms/suite/1/4.jpg','thumb': 'img/rooms/suite/1/4.jpg'},
  {"src": 'img/rooms/suite/1/5.jpg','thumb': 'img/rooms/suite/1/5.jpg'},
  {"src": 'img/rooms/suite/1/6.jpg','thumb': 'img/rooms/suite/1/6.jpg'},
];
var gitem8 = [  
  {"src": 'img/rooms/suite/2/1.jpg','thumb': 'img/rooms/suite/2/1.jpg'},
  {"src": 'img/rooms/suite/2/2.jpg','thumb': 'img/rooms/suite/2/2.jpg'},
  {"src": 'img/rooms/suite/2/3.jpg','thumb': 'img/rooms/suite/2/3.jpg'},
  {"src": 'img/rooms/suite/2/4.jpg','thumb': 'img/rooms/suite/2/4.jpg'},
  {"src": 'img/rooms/suite/2/5.jpg','thumb': 'img/rooms/suite/2/5.jpg'},
  {"src": 'img/rooms/suite/2/6.jpg','thumb': 'img/rooms/suite/2/6.jpg'},
];
var gitem9 = [  
  {"src": 'img/rooms/suite/3/1.jpg','thumb': 'img/rooms/suite/3/1.jpg'},
  {"src": 'img/rooms/suite/3/2.jpg','thumb': 'img/rooms/suite/3/2.jpg'},
  {"src": 'img/rooms/suite/3/3.jpg','thumb': 'img/rooms/suite/3/3.jpg'},
  {"src": 'img/rooms/suite/3/4.jpg','thumb': 'img/rooms/suite/3/4.jpg'},
  {"src": 'img/rooms/suite/3/5.jpg','thumb': 'img/rooms/suite/3/5.jpg'},
  {"src": 'img/rooms/suite/3/6.jpg','thumb': 'img/rooms/suite/3/6.jpg'},
];
var gitem10 = [  
  {"src": 'img/rooms/suite/4/1.jpg','thumb': 'img/rooms/suite/4/1.jpg'},
  {"src": 'img/rooms/suite/4/2.jpg','thumb': 'img/rooms/suite/4/2.jpg'},
  {"src": 'img/rooms/suite/4/3.jpg','thumb': 'img/rooms/suite/4/3.jpg'},
  {"src": 'img/rooms/suite/4/4.jpg','thumb': 'img/rooms/suite/4/4.jpg'},
  {"src": 'img/rooms/suite/4/5.jpg','thumb': 'img/rooms/suite/4/5.jpg'},
  {"src": 'img/rooms/suite/4/6.jpg','thumb': 'img/rooms/suite/4/6.jpg'}, 
];
var gitem11 = [  
  {"src": 'img/rooms/suite/5/1.jpg','thumb': 'img/rooms/suite/5/1.jpg'},
  {"src": 'img/rooms/suite/5/2.jpg','thumb': 'img/rooms/suite/5/2.jpg'},
  {"src": 'img/rooms/suite/5/3.jpg','thumb': 'img/rooms/suite/5/3.jpg'},
  {"src": 'img/rooms/suite/5/4.jpg','thumb': 'img/rooms/suite/5/4.jpg'},
  {"src": 'img/rooms/suite/5/5.jpg','thumb': 'img/rooms/suite/5/5.jpg'},
  {"src": 'img/rooms/suite/5/6.jpg','thumb': 'img/rooms/suite/5/6.jpg'},
];
var gitem12 = [  
  {"src": 'img/rooms/suite/6/1.jpg','thumb': 'img/rooms/suite/6/1.jpg'},
  {"src": 'img/rooms/suite/6/2.jpg','thumb': 'img/rooms/suite/6/2.jpg'},
  {"src": 'img/rooms/suite/6/3.jpg','thumb': 'img/rooms/suite/6/3.jpg'},
  {"src": 'img/rooms/suite/6/4.jpg','thumb': 'img/rooms/suite/6/4.jpg'},
  {"src": 'img/rooms/suite/6/5.jpg','thumb': 'img/rooms/suite/6/5.jpg'},
  {"src": 'img/rooms/suite/6/6.jpg','thumb': 'img/rooms/suite/6/6.jpg'},
];
var gitem13 = [  
  {"src": 'img/rooms/suite/7/1.jpg','thumb': 'img/rooms/suite/7/1.jpg'},
  {"src": 'img/rooms/suite/7/2.jpg','thumb': 'img/rooms/suite/7/2.jpg'},
  {"src": 'img/rooms/suite/7/3.jpg','thumb': 'img/rooms/suite/7/3.jpg'},
  {"src": 'img/rooms/suite/7/4.jpg','thumb': 'img/rooms/suite/7/4.jpg'},
  {"src": 'img/rooms/suite/7/5.jpg','thumb': 'img/rooms/suite/7/5.jpg'},
  {"src": 'img/rooms/suite/7/6.jpg','thumb': 'img/rooms/suite/7/6.jpg'}, 
];
var gitem14 = [  
  {"src": 'img/rooms/suite/8/1.jpg','thumb': 'img/rooms/suite/8/1.jpg'},
  {"src": 'img/rooms/suite/8/2.jpg','thumb': 'img/rooms/suite/8/2.jpg'},
  {"src": 'img/rooms/suite/8/3.jpg','thumb': 'img/rooms/suite/8/3.jpg'},
  {"src": 'img/rooms/suite/8/4.jpg','thumb': 'img/rooms/suite/8/4.jpg'},
  {"src": 'img/rooms/suite/8/5.jpg','thumb': 'img/rooms/suite/8/5.jpg'},
  {"src": 'img/rooms/suite/8/6.jpg','thumb': 'img/rooms/suite/8/6.jpg'},
];
var gitem15 = [  
  {"src": 'img/rooms/suite/9/1.jpg','thumb': 'img/rooms/suite/9/1.jpg'},
  {"src": 'img/rooms/suite/9/2.jpg','thumb': 'img/rooms/suite/9/2.jpg'},
  {"src": 'img/rooms/suite/9/3.jpg','thumb': 'img/rooms/suite/9/3.jpg'},
  {"src": 'img/rooms/suite/9/4.jpg','thumb': 'img/rooms/suite/9/4.jpg'},
  {"src": 'img/rooms/suite/9/5.jpg','thumb': 'img/rooms/suite/9/5.jpg'},
  {"src": 'img/rooms/suite/9/6.jpg','thumb': 'img/rooms/suite/9/6.jpg'}, 
];
var gitem16 = [  
  {"src": 'img/rooms/suite/10/1.jpg','thumb': 'img/rooms/suite/10/1.jpg'},
  {"src": 'img/rooms/suite/10/2.jpg','thumb': 'img/rooms/suite/10/2.jpg'},
  {"src": 'img/rooms/suite/10/3.jpg','thumb': 'img/rooms/suite/10/3.jpg'},
  {"src": 'img/rooms/suite/10/4.jpg','thumb': 'img/rooms/suite/10/4.jpg'},
  {"src": 'img/rooms/suite/10/5.jpg','thumb': 'img/rooms/suite/10/5.jpg'},
  {"src": 'img/rooms/suite/10/6.jpg','thumb': 'img/rooms/suite/10/6.jpg'}, 
];
var gitem17 = [  
  {"src": 'img/rooms/villa/1.jpg','thumb': 'img/rooms/villa/1.jpg'},
  {"src": 'img/rooms/villa/2.jpg','thumb': 'img/rooms/villa/2.jpg'},
  {"src": 'img/rooms/villa/3.jpg','thumb': 'img/rooms/villa/3.jpg'},
  {"src": 'img/rooms/villa/4.jpg','thumb': 'img/rooms/villa/4.jpg'},
  {"src": 'img/rooms/villa/5.jpg','thumb': 'img/rooms/villa/5.jpg'},
  {"src": 'img/rooms/villa/6.jpg','thumb': 'img/rooms/villa/6.jpg'}, 
];

$('.rooms__item__gallery').on('click', function() {
    let gall_ind = String($(this).attr('gallery-index'));  
    $(this).lightGallery({
        mode: 'lg-fade',
        speed: 100,
        pager: false,
        share: false, 
        download: false,
        thumbMargin: 10,
        thumbWidth: 130, 
        thumbHeight: '80px',
        dynamic: true,
        dynamicEl: eval(gall_ind)
    })
});


// For forms
$('.banner button').click(function(){
  var formValS = $(this).val();
  gevent('button_pressed', 'Кнопка с баннера', formValS); 
  $('textarea[name=comment]').html('Кнопка с баннера - Забронировать');   
});
$('#menu_form button').click(function(){ 
  $('textarea[name=comment]').html('Кнопка с меню - Забронировать');   
});
$('.about-hotel__item__content__btn').click(function(){ 
  $('textarea[name=comment]').html('Кнопка с описания отеля - Забронировать');   
});
$('.rooms__item__info__btn').click(function(){
  var formValS = $(this).val(); 
  gevent('button_pressed', 'Кнопка с карточки номера', formValS); 
  var parent = $(this).parent().parent();
  var text = "";
  text += parent.children('.rooms__item__name').text()+"\r\n"; 
  text += parent.find('.rooms__item__info__price b').text()+"\r\n"; 
  $('textarea[name=comment]').html(text); 
}); 
$('.rooms__villa__item__info__btn').click(function(){
  var formValS = $(this).val(); 
  gevent('button_pressed', 'Кнопка с карточки номера', formValS);    
  $('textarea[name=comment]').html('Вилла от 34 000 €'); 
});
$('#footer-form button').click(function(){  
  $('textarea[name=commentFooter]').html('Кнопка с футера - Забронировать');   
}); 

$("#menu_form").validate({  
    rules: {
    'sender_phone': {               
        minlength: 4 
    }   
    }  
});
$("#leadform").validate({ 
    rules: {  
    'sender_phone': {               
        minlength: 4 
    }
    }  
});
$("#main_form").validate({ 
    rules: {  
    'sender_phone': {               
        minlength: 4 
    }
    }  
});
$("#footer-form").validate({ 
    rules: {  
    'sender_phone': {               
        minlength: 4 
    }
    }  
}); 

$("#main_form button").bind('click', function () {   
  if ($("#main_form").valid()) { 
    gevent('request', 'Основная форма','none'); //отправка формы   
    sended($(this).attr('formid')); 
    $('.formModal__slTy').slideDown();         
    $('.formModal__slOne').slideUp();       
    }else{
       $("#main_form input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#main_form input[name=sender_phone]").focus(); 
    }   
});

$("#footer-form button").bind('click', function () {  
  if ($("#footer-form").valid()) {  
    gevent('request', 'Форма в футере','none'); //отправка формы    
    sended($(this).attr('formid'));
    $('.footer-form__slTy').slideDown();         
    $('.footer-form__tops').slideUp(); 
    }else{
       $("#footer-form input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#footer-form input[name=sender_phone]").focus();     
    }        
});
$("#leadform button").bind('click', function () {  
  if ($("#leadform").valid()) {  
    gevent('request', 'Форма в футере','none'); //отправка формы    
    sended($(this).attr('formid'));
    $('.lead-form__slTy').slideDown();         
    $('.lead-form__content__slOne').slideUp(); 
    }else{
       $("#leadform input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#leadform input[name=sender_phone]").focus();     
    }        
});
$("#menu_form button").bind('click', function () {  
  if ($("#menu_form").valid()) {  
    gevent('request', 'Форма в футере','none'); //отправка формы    
    sended($(this).attr('formid'));
    $('.menu__form__slTy').slideDown();         
    $('.menu__form__slOne').slideUp(); 
    }else{
       $("#menu_form input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#menu_form input[name=sender_phone]").focus();     
    }        
});

function sended(idform) {
      AjaxFormRequest(/*'messegeResult',*/ idform, 'sendmessage.php'); 
  }
    function AjaxFormRequest(/*result_id,*/idform, url) {
       var tdata = jQuery("#"+idform).serialize();
       var turl = "url="+location.href;
       if (tdata !== '') {
           tdata += "&"+turl;
       } else {
           tdata = turl;
       }
       jQuery.ajax({
          url:     url,
          type:     "POST",
          dataType: "html",
          data: tdata,
          success: function(response) {
        //document.getElementById('envelope').style.display='block';
        //document.getElementById('fade').style.display='block'
            //document.getElementById(result_id).innerHTML = response;
        //envelope_h1_change('Спасибо за обращение');
        //document.getElementById('env_form').style.backgroundColor='rgba(40,32,16,0.8)';
        //window.location.href = "/thanks";
          }/*,
          error: function(response) { 
            document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
        document.getElementById('envelope').style.display='block';
        document.getElementById('fade').style.display='block'
          }*/
       });} 
    function gevent(action, category='', label='', value=''){
        var params = {};
        if (category !=='') { params.event_category = category; }
        if (label !=='') { params.event_label = label; }
        if (value !=='') { params.value = value; }
        gtag('event', action, params);
    }  

// Disable sound after closing modal 
$(document).on('closing', '.videoModal', function (e) {
  $('.videoModal iframe').each(function(index) {                
  $(this).attr('src', $(this).attr('src'));       
  return false;
  });    
});


});  
