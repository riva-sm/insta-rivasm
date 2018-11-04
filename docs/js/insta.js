$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '2147614553',
        accessToken: '2147614553.1677ed0.d281372869654246b18d6de3b6f97d13',
        resolution: 'standard_resolution',
        limit: 60
    });
    userFeed.run();

    setTimeout(function(){
        $('.instafeed').addClass('shadowed');
    }, 100);


});