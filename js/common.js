$(function(){


$('.js-form').each(function(i, el) {
console.log($(this))
 $(el).on('submit', function(event){
        event.preventDefault();
$('.loader').addClass('active');
        var $form = $(this);
        var $formId = $(this).attr('id');

        switch($formId) {
            case'popupResult':
                $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize()
                })
                    .always(function (response) {
                        setTimeout(function () {
                            $('.loader').removeClass('active');
$('.modal').removeClass('active');
                        }, 500);
                        setTimeout(function () {
                            $('.thank').addClass('active');
                       
                            }, 800);
                    });
                break;
        }
        });
});

   



    $('.mobile-but i').on('click', function(){
        $('.top-line nav').toggleClass('active');
        $(this).toggleClass('fa-bars fa-times');
    });

    function countup(className){
        var countBlockTop = $("."+className).offset().top;
        var windowHeight = window.innerHeight;
        var show = true;

        $(window).scroll( function (){
            if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
                show = false;

                $('.'+className).spincrement({
                    from: 1,
                    duration: 4000,
                });
            }
        })
    }


    $(function() {
        countup("dig_up", $(".dig_up").text());
        // countup("count2", $(".count2").text());
    });



    $('.close_ic').on('click', function(){
       $('.window-popup-container').removeClass('active');
    });

    $("nav ul").on("click","a", function (event) {
        $('.top-line nav').removeClass('active');
        $('.mobile-but i').removeClass('fa-times');
        $('.mobile-but i').addClass('fa-bars');
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.tel-input').mask('+380 (99) 999-99-99');
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });

    $('.wrap_review').slick({
        // centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('#popular .container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.call-popup').on('click', function (event) {
        // event.preventDefault();
        $('.window-popup-container.modal').addClass('active');
    });
});