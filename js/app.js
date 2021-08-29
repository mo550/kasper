// Start NavBar
window.addEventListener('scroll', function(){

  const navbar = document.querySelector('.navbar');

  if(window.pageYOffset > 80){
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});


// Start Search Button

var searchIcon = document.getElementById('search-icon'),
    searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', function(){
  searchInput.classList.toggle('active');
});

// Start Loader Wrapper
$(window).on('load', function(){
  $('.loader-wrapper').fadeOut("slow");
});

// Start Scroll To Top Button
const scrollToTop = document.getElementById('scrollToTop');

window.addEventListener('scroll', function(e) {
  if (window.pageYOffset > 850) {
    scrollToTop.classList.add('active');
  } else {
    scrollToTop.classList.remove('active');
  }
  scrollToTop.addEventListener('click', function(){
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  });
});


// Portfolio Menu Filter
$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.item').show('1000');
    }else {
      $('.item').not('.'+value).hide('1000');
      $('.item').filter('.'+value).show('1000');
    }
  });
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});


// Initialize AOS Library
(function() {

  AOS.init({
    duration: 900,
    offset: 150,
    mirror: false,
    once: true
  });

  window.addEventListener('load', AOS.refresh);

}());
