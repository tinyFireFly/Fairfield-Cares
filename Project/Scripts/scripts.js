//<!--Google Translate Scripts-->
function googleTranslateElementInit() { 
        new google.translate.TranslateElement(
            {pageLanguage: 'en'}, 
            'google_translate_element'
        ); 
} 


jQuery(function($) {
$('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});

$('.navbar .dropdown-submenu .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideRight();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideLeft();
});


$('.navbar .dropdown > a').click(function(){
    location.href = this.href;
});

});

