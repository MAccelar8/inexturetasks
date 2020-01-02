$(document).ready(function() {

  $('.filter').filterizr();


  $(".home-page").slick({
    dots: true,
    arrow: true
  });
});

$('.form-control').click(function(){jQuery(this).attr('placeholder', '')})


// function linkclicked(Obj){
//   console.log(Obj)
//   document.getElementById("home").classList.remove('nav-home');
//   document.getElementById("about").classList.remove('nav-about');
//   document.getElementById("services").classList.remove('nav-services');
//   document.getElementById("work").classList.remove('nav-work');
//   document.getElementById("contact").classList.remove('nav-contact');

//   var name = "nav-"+ Obj.id;

//   Obj.classList.add(name);
// }


function filtercontent(Obj){
  // console.log(Obj.parentNode.children.length);
  var sibling = Obj.parentNode.children;
  for(var i=0; i<sibling.length;i++){
    sibling[i].classList.remove('active');
  }
  Obj.classList.add('active');
}

