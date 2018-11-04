$(document).ready(function(){

    var audio = $('#audioTrack')[0];
    console.log(audio);

    $playBtn = $('#audio-play');
    $pauseBtn = $('#audio-pause');
    $audioControl = $('[data-type="audio-control"]');

    // initAudioPlayer();

    setTimeout(initAudioPlayer, 800);

    

    function initAudioPlayer(){
        $playBtn.parent().show(); // показываем кнопку воспроизведения
        audio.loop = true; // повторяем песню по её окончанию
        audio.play();
        
        $audioControl.click(function(){
            // если аудио на паузе, включить и показать кнопку паузы
            console.log('audio control click');

                if( audio.paused ) {
                    audio.play();
                    $playBtn.parent().hide();
                    $pauseBtn.parent().show();
                } else {
                    audio.pause();
                    $pauseBtn.parent().hide();
                    $playBtn.parent().show();
                }
        });

    }
});
