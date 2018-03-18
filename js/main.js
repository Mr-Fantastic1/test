// Шапка и меню с позицией фмксед для их прокрутки

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $('.fixed-js').addClass('fixed');
        }
        else if ($(this).scrollTop()<150){
            $('.fixed-js').removeClass('fixed');
        }
    });
});

$(document).ready(function () {
    // Поп ап

    $('.pop-up-btn').on('click', function() {
        $('.pop-up-contact').addClass('open');
    });

    $('.pop-up-contact__close').on('click', function() {
        $('.pop-up-contact').removeClass('open');
    });

    $('.schedule__btn').on('click', function() {
        $('.pop-up-schedule').addClass('open');
    });

    $('.pop-up-schedule__close').on('click', function() {
        $('.pop-up-schedule').removeClass('open');
    });

    $(document).mouseup(function (e)
    {
        var container = $('.pop-up-contact__wrapper');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.pop-up-contact').removeClass('open');
        }
    });

    $(document).mouseup(function (e)
    {
        var container = $('.pop-up-schedule__wrapper');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.pop-up-schedule').removeClass('open');
        }
    });


    // Мобильное меню

    $('.toggle').on('click', function() {
        $('.toggle').toggleClass('active');
        $('.menu__hidden').toggleClass('active');
        $('body').toggleClass('fixed');
    });

    $('.menu__link').on('click', function() {
        $('.toggle').removeClass('active');
        $('.menu__hidden').removeClass('active');
        $('body').removeClass('fixed');
    });


    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 1500);
    });

    // Маска для телефона

    jQuery(function($){
        $(".tel").mask("9-999-999-99-99");
    });

    // Слайдер Команды

    $('.command__wrapper').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,

        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },

            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },

            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    // Код для показа блока с полням описанием члена команды

    $(function(){

        $("#wr-tabs").on("click", ".tab", function(){

            var tabs = $("#wr-tabs .tab"),
                cont = $("#wr-tabs .tab-cont");

            // Удаляем классы active
            tabs.removeClass("active");
            cont.removeClass("active");
            // Добавляем классы active
            $(this).addClass("active").fadeIn();
            cont.eq($(this).index()).addClass("active");

            return false;
        });
    });

    // Слайдер условия

    var slider =  $('.conditions__carusel').slick({
        centerMode: true,
        dots: true,
        centerPadding: 'auto',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    variableWidth: false,
                    centerPadding: '80px'
                }
            },

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]

    });

    var dot = $(".conditions__dot");
    slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        dot.removeClass("active").eq(nextSlide).addClass("active")
    });

    dot.on("click", function() {
        var i = dot.index(this);
        slider.slick("slickGoTo", i)
    });


    $('.next-shift__slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    if (  jQuery(window).width() < 1100 ) {
        $('.mobail-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            dotsClass: 'mobail-slider__dots'
        });
    }

    // Код для блоков в секции "Нас спрашивают"

    $('.faq-block__btn--answer').on('click', function() {
        $('.faq-block__inner').removeClass('active');
        $('.faq-block__answer').removeClass('active');
        $('.faq-block__btn--answer').removeClass('hidden');
        $('.faq-block__btn--roll-up').addClass('hidden');

        $(this).siblings('.faq-block__inner').addClass('active');
        $(this).siblings('.faq-block__answer').addClass('active');
        $(this).closest('.faq-block__btn--answer').addClass('hidden');
        $(this).siblings('.faq-block__answer').children('.faq-block__btn--roll-up').removeClass('hidden');
    });

    $('.faq-block__btn--roll-up').on('click', function() {
        $('.faq-block__answer').removeClass('active');
        $('.faq-block__btn--roll-up').addClass('hidden');
        $('.faq-block__btn--answer').removeClass('hidden');
        $(this).closest('.faq-block').removeClass('active');
        $(this).closest('.faq-block__answer').siblings('.faq-block__inner').removeClass('active');
    });

    // Что бы при клике за блоками в секции "Нас спрашивают" Закрывался открытый блок

    $(document).mouseup(function (e)
    {
        var container = $('.faq-block');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.faq-block').removeClass('active');
            $('.faq-block__inner').removeClass('active');
            $('.faq-block__answer').removeClass('active');
            $('.faq-block__btn--answer').removeClass('hidden');
            $('.faq-block__btn--roll-up').addClass('hidden');
        }
    });

    // Яндекс карта

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.729012, 37.629215],
                zoom: 16,
                controls: ['smallMapDefaultSet']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="map__text">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: ''
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.729012, 37.629215], {
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'img/general/map.png',
                // Размеры метки.
                iconImageSize: [50, 65],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [30, 7],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);

        //myMap.behaviors
           // .disable(['scrollZoom', 'rightMouseButtonMagnifier'])
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    function myMap(map) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$preventScroll = _ref.preventScroll,
            preventScroll = _ref$preventScroll === undefined ? true : _ref$preventScroll,
            _ref$preventTouch = _ref.preventTouch,
            preventTouch = _ref$preventTouch === undefined ? true : _ref$preventTouch,
            _ref$textScroll = _ref.textScroll,
            textScroll = _ref$textScroll === undefined ? 'Чтобы изменить масштаб, прокручивайте карту, удерживая клавишу Ctrl' : _ref$textScroll,
            _ref$textTouch = _ref.textTouch,
            textTouch = _ref$textTouch === undefined ? 'Чтобы переместить карту проведите по ней двумя пальцами' : _ref$textTouch;

        if ((typeof map === 'undefined' ? 'undefined' : _typeof(map)) !== 'object' || !preventScroll && !preventTouch || typeof textScroll !== 'string' || typeof textTouch !== 'string') return;

        function createEl(appendBlock) {
            var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

            var el = document.createElement(tag);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var attribute = _step.value;
                    el[attribute] = attributes[attribute];
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            appendBlock.appendChild(el);
            return el;
        }

        var parentEl = map.container.getParentElement();
        var mapEl = map.container.getElement();
        var isMobile = /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent);
        var isBlockShow = false;

        if (getComputedStyle(parentEl).position === 'static') parentEl.style.position = 'relative';

        var css = '.ymaps-touch-scroll{position:absolute;top:0;left:0;transition:opacity .2s;width:100%;height:100%;overflow:hidden;z-index:-2147483648}' + '.ymaps-touch-scroll:before{content:"";display:inline-block;vertical-align:middle;height:100%}' + '.ymaps-touch-scroll-bg{position:absolute;top:0;left:0;background:#000;height:100%;width:100%}' + '.ymaps-touch-scroll-content{position:relative;display:inline-block;vertical-align:middle;width:100%;color:#fff;text-align:center;box-sizing:border-box}';
        var style = createEl(document.head, { type: 'text/css' }, 'style');
        style.appendChild(document.createTextNode(css));

        var block = createEl(parentEl, { className: 'ymaps-touch-scroll' });
        var bg = createEl(block, { className: 'ymaps-touch-scroll-bg' });
        var content = createEl(block, { className: 'ymaps-touch-scroll-content' });

        mapEl.style.transition = 'opacity .2s';
        var margin = map.margin.getMargin();
        for (var i in margin) {
            margin[i] += 20;
        }content.style.padding = margin.join('px ') + 'px';
        content.textContent = isMobile ? textTouch : textScroll;

        function blockToggle() {
            var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (show && isBlockShow || !show && !isBlockShow) return;
            isBlockShow = show;

            block.style.opacity = show ? '1' : '0';
            mapEl.style.opacity = show ? '.3' : '1';
        }

        function dragToggle() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            on ? map.behaviors.enable('drag') : map.behaviors.disable('drag');
        }

        if (preventScroll && !isMobile) {
            var scrollToggle = function scrollToggle() {
                var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (on && isScrollOn || !on && !isScrollOn) return;
                isScrollOn = on;
                on ? map.behaviors.enable('scrollZoom') : map.behaviors.disable('scrollZoom');
            };

            var isCtrlPress = false;
            var isScrollOn = true;

            document.addEventListener('keydown', function (e) {
                isCtrlPress = e.keyCode === 17;
                if (isCtrlPress) blockToggle(false);
            });

            document.addEventListener('keyup', function (e) {
                if (e.keyCode === 17) isCtrlPress = false;
            });

            scrollToggle(false);

            map.events.add('wheel', function () {
                scrollToggle(isCtrlPress);
                dragToggle(isCtrlPress);
                blockToggle(!isCtrlPress);
            });

            map.events.add('mouseleave', function () {
                blockToggle(false);
                dragToggle(true);
            });

            map.events.add('mousedown', function () {
                blockToggle(false);
                dragToggle(true);
            });
        }

        if (preventTouch && isMobile) {
            dragToggle(false);

            ymaps.domEvent.manager.add(mapEl, 'touchmove', function (e) {
                var twoFingers = e.get('touches').length === 2;
                blockToggle(!twoFingers);
                dragToggle(twoFingers);
            });

            ymaps.domEvent.manager.add(mapEl, 'touchend', function () {
                blockToggle(false);
            });
        }
    }
});

