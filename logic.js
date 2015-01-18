function play3am(){
    var audio=document.getElementById('threeamaudio');
    audio.play();
}

function checkIf3am(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var itIs3am = hour===3 & minute===0;
    if (itIs3am){
        $('#Answer').text('Yes.');
        play3am();
    } else {
        $('#Answer').text('No.');
    }
}

$('document').ready(
    function(){
        checkIf3am();

        setInterval(function(){
            checkIf3am();
        }, 60 * 1000);
    }
);