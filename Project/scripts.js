
//get header script
$.get("header.html", function(data){
  $("#header-placeholder").replaceWith(data);
});

//<!--Google Translate Scripts-->
function googleTranslateElementInit() { 
        new google.translate.TranslateElement(
            {pageLanguage: 'en'}, 
            'google_translate_element'
        ); 
} 
