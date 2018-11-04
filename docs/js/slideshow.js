$(document).ready(function(){

    var slideIndex = 0;

    showPhotos();


    function showPhotos(){

        var i;
        var slides = $('#instafeed a');


        //  запуск цикла для скрытия фотографий

        for(i = 0; i < slides.length; i++){
            
            $(slides[i]).hide();

        }

        // считаем активные фото, которые будет переменная показывать
        slideIndex++;

        if(slideIndex > slides.length){
            slideIndex = 1
        }

        // показывать 1 фото 
        $(slides[slideIndex-1]).show();

        // время показа
        setTimeout(showPhotos, 500);

    }

});