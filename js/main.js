$(document).ready(function(){
	$('[data-submit]').on('click', function(e){
	    e.preventDefault();
		$(this).closest('form').submit();
	})


	// $.validator.addMethod(
	//         "regex",
	//         function(value, element, regexp) {
	//             var re = new RegExp(regexp);
	//             return this.optional(element) || re.test(value);
	//         },
	//         "Please check your input."
	// 		);
	function valEl(el){
		 
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
          	required:true,
            email:true
          }
        },
          messages:{
            tel:{
              	required:'Поле обязательно для заполнения',
              	regex:'Телефон может содержать символы + - ()'
            },
            name:{
              	required:'Поле обязательно для заполнения',
            },
            email:{
            	required:'Поле обязательно для заполнения',	
            	email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
        	$('#loader').fadeIn();
	        var $form = $(form);
	        var $formId = $(form).attr('id');
	        switch($formId){
	          case'goToNewPage':
	            $.ajax({
	                  type: 'POST',
	                  url: $form.attr('action'),
	                  data: $form.serialize()
	                })
	                .always(function (response) {  
	                    //ссылка на страницу "спасибо" - редирект
	                    location.href='http://restad.org.ua/thank.htm';
	                    //отправка целей в Я.Метрику и Google Analytics
	                    ga('send', 'event', 'masterklass7', 'register');
			    yaCounter27714603.reachGoal('lm17lead');
	            });
	        break;
		case'goToNewPage2':
	            $.ajax({
	                  type: 'POST',
	                  url: $form.attr('action'),
	                  data: $form.serialize()
	                })
	                .always(function (response) {  
	                    //ссылка на страницу "спасибо" - редирект
	                    location.href='http://restad.org.ua/thank.htm';
	                    //отправка целей в Я.Метрику и Google Analytics
	                    ga('send', 'event', 'masterklass7', 'register');
			    yaCounter27714603.reachGoal('lm17lead');
	            });
	        break;             
	        case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize()
                })
                .always(function (response) {                    
                setTimeout(function (){
                 $('#loader').fadeOut();
                },500);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                  $('form').fadeOut();
                  $form.trigger('reset');
                  //строки для остлеживания целей в Я.Метрике и Google Analytics
                },800);
                $('#overlay').on('click', function(e) {
  			$('#overlay').fadeOut();
		});
                    
            });
        break;          
        }       
return false; 
    }                           
  })
        }                        
     
              $('.js-form').each(function() {
                valEl($(this));
              });
		$('[data-scroll]').on('click', function(){
			$('html, body').animate({
		        scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
		    }, 2000);
		    event.preventDefault();
		})              
   })