// 
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.screen.width < 990) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}

function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// ===========================================
// отправка формы =============>
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка была отправлена. Наш менеджер свяжется с вами в течение 24 часов.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// ============================
// ===============================================

$('.slider__box').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
	{
	  breakpoint: 1500,
	  settings: {
		arrows: false,
	  }
	},

 ]

});
// ---------------------------- language -------------------

const select = document.querySelector('.select-lang');
const allLeng = ['ru', 'en'];

select.addEventListener('change', chengeURLLanguage);


function chengeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}
function chengeLanguage() {
	let hash = window.location.hash;
	hash = hash.substring(1);

	if (!allLeng.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	// document.querySelector('title').innerHTML = langArr['unit'][hash];
	// document.querySelector('.leng-menu1').innerHTML = langArr['menu1'][hash];
	// document.querySelector('.leng-menu2').innerHTML = langArr['menu2'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.leng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}
chengeLanguage()


