const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart
const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');


const openModal = function() {
	modalCart.classList.add('show');
};

const closeModal = function() {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click',  openModal);
modalClose.addEventListener('click', closeModal);


//закрытие модального окна по фону
modalCart.addEventListener('click', function(e) { 
	if (e.target !== modal) {
        closeModal();
    }
});


//scroll smooth

(function() {
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for(let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', function(e) {
			e.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({   //не работает в старых браузерах
				behavior: 'smooth',//какая прокрутка
				block: 'start' //до куда прокручивать 
			});
		});
	}
})();
