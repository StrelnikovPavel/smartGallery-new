
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-bild')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-bild');

         if (slider.classList.contains('_swiper_scroll')) {
            let sliderScroll = document.createElement('div');
            sliderScroll.classList.add('swiper-scrollbar');
            slider.appendChild(sliderScroll);
         }
      }
      if (slider.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
   for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
            el: sliderScrollBar,
            draggable: true,
            snapOnRelease: false
         },
         mousewheel: {
            releaseOnEdges: true,
         },
      });
      sliderScroll.scrollbar.updateSize();
   }
}


function sliders_bild_callback(params) { }
//====================================================================================================
if (document.querySelector('.portfolio__slider')) {
   new Swiper('.portfolio__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      //spaceBetween: 0,
      autoHeight: false,
      speed: 500,
      centeredSlides: false,
      watchOverflow: true,
      loop: false,
      navigation: {
         nextEl: '.navigation-portfolio__arrow-next',
         prevEl: '.navigation-portfolio__arrow-prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 30,
         },
         474.98: {
            slidesPerView: 1.5,
            spaceBetween: 0,
         },
         768: {
            slidesPerView: 2.5,
         },
         1100: {
            slidesPerView: 2.85,
         },
      },
   })
}

//====================================================================================================
let productSlider = new Swiper('.slider-product__body', {
   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 0,
   autoHeight: true,
   speed: 500,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   // navigation: {
   //    nextEl: '.navigation-portfolio__arrow-next',
   //    prevEl: '.navigation-portfolio__arrow-prev',
   // },
   // breakpoints: {
   //    474.98: {
   //       slidesPerView: 1.5,
   //       spaceBetween: 30,
   //    },
   //    768: {
   //       slidesPerView: 2.5,
   //    },
   //    992: {
   //       slidesPerView: 3.5,
   //    },
   // },
});
//====================================================================================================
let productSubslider = new Swiper('.subslider-product__body', {
   observer: true,
   observeParents: true,
   slidesPerView: 5,
   spaceBetween: 20,
   autoHeight: true,
   speed: 500,
   thumbs: {
      swiper: productSlider,
   },

   //centeredSlides: true,
   // navigation: {
   //    nextEl: '.navigation-portfolio__arrow-next',
   //    prevEl: '.navigation-portfolio__arrow-prev',
   // },
   // breakpoints: {
   //    474.98: {
   //       slidesPerView: 1.5,
   //       spaceBetween: 30,
   //    },
   //    768: {
   //       slidesPerView: 2.5,
   //    },
   //    992: {
   //       slidesPerView: 3.5,
   //    },
   // },
});
//====================================================================================================
if (document.querySelector('.portfolio__slider_more')) {
   new Swiper('.portfolio__slider_more', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      navigation: {
         nextEl: '.navigation-portfolio__arrow-next',
         prevEl: '.navigation-portfolio__arrow-prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 20,
         },
         474.98: {
            spaceBetween: 0,
         },
         768: {
            //slidesPerView: 2.5,
         },
         768: {
            slidesPerView: "auto",
         },
      },
   })
}
function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
   ua = navigator.userAgent;
   var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
   return is_ie;
}
if (isIE()) {
   document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
   document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('_webp');
   } else {
      document.querySelector('body').classList.add('_no-webp');
   }
});
function ibg() {
   if (isIE()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();

if (document.querySelector('.wrapper')) {
   document.querySelector('.wrapper').classList.add('_loaded');
}

var unlock = true;

//=================
//=================
//Menu
let body = document.querySelector("body");
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
   //let delay = 500;
   let menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (unlock) {
         //body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
         body.classList.toggle("_lock");
      }
   });
};
function menu_close() {
   let iconMenu = document.querySelector(".icon-menu");
   let menuBody = document.querySelector(".menu__body");
   let body = document.querySelector("body");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
   body.classList.remove("_lock");
}
//=================
//=================
//BodyLock
function body_lock(delay) {
   let body = document.querySelector("body");
   if (body.classList.contains('_lock')) {
      body_lock_remove(delay);
   } else {
      body_lock_add(delay);
   }
}
function body_lock_remove(delay) {
   let body = document.querySelector("body");
   if (unlock) {
      let lock_padding = document.querySelectorAll("._lp");
      setTimeout(() => {
         for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = '0px';
         }
         body.style.paddingRight = '0px';
         body.classList.remove("_lock");
      }, delay);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, delay);
   }
}
function body_lock_add(delay) {
   let body = document.querySelector("body");
   if (unlock) {
      let lock_padding = document.querySelectorAll("._lp");
      for (let index = 0; index < lock_padding.length; index++) {
         const el = lock_padding[index];
         el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }
      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add("_lock");

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, delay);
   }
}
//=================
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   let tabs_blocks = tab.querySelectorAll("._tabs-block");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');
         }
         tabs_item.classList.add('_active');
         tabs_blocks[index].classList.add('_active');
         e.preventDefault();
      });
   }
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
   for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
         if (spollersGo) {
            spollersGo = false;
            if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
               return false;
            }
            if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
               return false;
            }
            if (spoller.closest('._spollers').classList.contains('_one')) {
               let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
               for (let i = 0; i < curent_spollers.length; i++) {
                  let el = curent_spollers[i];
                  if (el != spoller) {
                     el.classList.remove('_active');
                     _slideUp(el.nextElementSibling);
                  }
               }
            }
            spoller.classList.toggle('_active');
            _slideToggle(spoller.nextElementSibling);

            setTimeout(function () {
               spollersGo = true;
            }, 500);
         }
      });
   }
}
//==================
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
   gallery_init();
}
function gallery_init() {
   for (let index = 0; index < gallery.length; index++) {
      const el = gallery[index];
      lightGallery(el, {
         counter: false,
         selector: 'a',
         download: false
      });
   }
}
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideDown = (target, duration = 500) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none')
      display = 'flex';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideToggle = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
   let start = performance.now();
   requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
         requestAnimationFrame(animate);
      }

   });
}
function makeEaseOut(timing) {
   return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
   }
}
function makeEaseInOut(timing) {
   return function (timeFraction) {
      if (timeFraction < .5)
         return timing(2 * timeFraction) / 2;
      else
         return (2 - timing(2 * (1 - timeFraction))) / 2;
   }
}
function quad(timeFraction) {
   return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
   return 1 - Math.sin(Math.acos(timeFraction));
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
   if (digi_animate.length > 0) {
      for (let index = 0; index < digi_animate.length; index++) {
         const el = digi_animate[index];
         const el_to = parseInt(el.innerHTML.replace(' ', ''));
         if (!el.classList.contains('_done')) {
            digi_animate_value(el, 0, el_to, 1500);
         }
      }
   }
}
function digi_animate_value(el, start, end, duration) {
   var obj = el;
   var range = end - start;
   // no timer shorter than 50ms (not really visible any way)
   var minTimer = 50;
   // calc step time to show all interediate values
   var stepTime = Math.abs(Math.floor(duration / range));

   // never go below minTimer
   stepTime = Math.max(stepTime, minTimer);

   // get current time and calculate desired end time
   var startTime = new Date().getTime();
   var endTime = startTime + duration;
   var timer;

   function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = digi(value);
      if (value == end) {
         clearInterval(timer);
      }
   }

   timer = setInterval(run, stepTime);
   run();

   el.classList.add('_done');
}
//====================================================================================================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
   const el = popup_link[index];
   el.addEventListener('click', function (e) {
      if (unlock) {
         let item = el.getAttribute('href').replace('#', '');
         let video = el.getAttribute('data-video');
         popup_open(item, video);
      }
      e.preventDefault();
   })
}
// for (let index = 0; index < popups.length; index++) {
//    const popup = popups[index];
//    popup.addEventListener("click", function (e) {
//       if (!e.target.closest('.popup__body')) {
//          popup_close(e.target.closest('.popup'));
//       }
//    });
// }
function popup_open(item, video = '') {
   let activePopup = document.querySelectorAll('.popup._active');
   if (activePopup.length > 0) {
      popup_close('', false);
   }
   let curent_popup = document.querySelector('.popup_' + item);
   if (curent_popup && unlock) {
      if (video != '' && video != null) {
         let popup_video = document.querySelector('.popup_video');
         popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      }
      if (!document.querySelector('.menu__body._active')) {
         body_lock_add(500);
      }
      curent_popup.classList.add('_active');
      history.pushState('', '', '#' + item);
   }
}
function popup_close(item, bodyUnlock = true) {
   if (unlock) {
      if (!item) {
         for (let index = 0; index < popups.length; index++) {
            const popup = popups[index];
            let video = popup.querySelector('.popup__video');
            if (video) {
               video.innerHTML = '';
            }
            popup.classList.remove('_active');
         }
      } else {
         let video = item.querySelector('.popup__video');
         if (video) {
            video.innerHTML = '';
         }
         item.classList.remove('_active');
      }
      if (!document.querySelector('.menu__body._active') && bodyUnlock) {
         body_lock_remove(500);
      }
      history.pushState('', '', window.location.href.split('#')[0]);
   }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
   for (let index = 0; index < popup_close_icon.length; index++) {
      const el = popup_close_icon[index];
      el.addEventListener('click', function () {
         popup_close(el.closest('.popup'));
      })
   }
}
document.addEventListener('keydown', function (e) {
   if (e.code === 'Escape') {
      popup_close();
   }
});

// const orderLink = document.querySelector('.order-popup__item');
// orderLink.addEventListener('click', function () {
//    let orderPopup = document.querySelector('.order-popup');
//    let stagesPopup = document.querySelector('.stages-popup');
//    orderPopup.classList.remove('_active');
//    stagesPopup.classList.add('_active');
// })
//====================================================================================================
//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
   if (inputs.length > 0) {
      for (let index = 0; index < inputs.length; index++) {
         const input = inputs[index];
         const input_g_value = input.getAttribute('data-value');
         input_placeholder_add(input);
         if (input.value != '' && input.value != input_g_value) {
            input_focus_add(input);
         }
         input.addEventListener('focus', function (e) {
            if (input.value == input_g_value) {
               input_focus_add(input);
               input.value = '';
            }
            if (input.getAttribute('data-type') === "pass") {
               input.setAttribute('type', 'password');
            }
            if (input.classList.contains('_date')) {
               /*
               input.classList.add('_mask');
               Inputmask("99.99.9999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
               */
            }
            if (input.classList.contains('_phone')) {
               //'+7(999) 999 9999'
               //'+38(999) 999 9999'
               //'+375(99)999-99-99'
               input.classList.add('_mask');
               Inputmask("+375 (99) 9999999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            if (input.classList.contains('_digital')) {
               input.classList.add('_mask');
               Inputmask("9{1,}", {
                  "placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            form_remove_error(input);
         });
         input.addEventListener('blur', function (e) {
            if (input.value == '') {
               input.value = input_g_value;
               input_focus_remove(input);
               if (input.classList.contains('_mask')) {
                  input_clear_mask(input, input_g_value);
               }
               if (input.getAttribute('data-type') === "pass") {
                  input.setAttribute('type', 'text');
               }
            }
         });
         if (input.classList.contains('_date')) {
            datepicker(input, {
               customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
               customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
               formatter: (input, date, instance) => {
                  const value = date.toLocaleDateString()
                  input.value = value
               },
               onSelect: function (input, instance, date) {
                  input_focus_add(input.el);
               }
            });
         }
      }
   }
}
function input_placeholder_add(input) {
   const input_g_value = input.getAttribute('data-value');
   if (input.value == '' && input_g_value != '') {
      input.value = input_g_value;
   }
}
function input_focus_add(input) {
   input.classList.add('_focus');
   input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
   input.classList.remove('_focus');
   input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
   input.inputmask.remove();
   input.value = input_g_value;
   input_focus_remove(input);
}

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
lightGallery(document.querySelector('._gallery'));

//====================================================================================================
