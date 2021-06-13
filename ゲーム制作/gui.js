function play_se(){
    var warning = new Audio('gasumore.mp3');
    var voice = new Audio('voice.mp3');
    warning.play();
    voice.play();
    navigator.vibrate([200, 100, 200, 100, 200, 100,])
}

$(function(){

    history.pushState(null, null, null);
    $(Window).on('popstate', function(e){
        if(!e.orininalEvent.state){
            play_se();
            history.pushState(null, null, null);
            return;
        }
    });

    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
        $('#alert').modal('close');
        play_se()
    });

    var time = 300;
    setInterval(function(){
        time--;
        $('#timer').text(time);
    }, 1000);
    
});