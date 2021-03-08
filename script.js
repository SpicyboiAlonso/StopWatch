$(function(){

    let timer;
    let start;
    let timeCount = 0;
    let isOn = false;
    let isUpdate = false; 

    function startTimer(){
        timer = setInterval(function(){
            timeCount++;
            
            // console.log(timeCount)
        }, 10)
    }
    function stopTimer(){
        clearInterval(timer)
    }

    function startUpdate(){
        start = setInterval(function(){
            let seconds = timeCount / 100;
            let min = Math.floor(seconds / 60);

            if(seconds - min * 60 > 10){
            $('#clock').text(`${min}:${(seconds - min * 60).toFixed(2)}`)
                
            }else{
            $('#clock').text(`${min}:0${(seconds - min * 60).toFixed(2)}`)
            }
            
            // console.log(min)
            // console.log(seconds)

        }, 10)
        isOn = true;
        isUpdate = true;
    }

    function stopUpdate(){
        clearInterval(startUpdate)
        isUpdate = false;
    }

    function reset(){
        timeCount = 0;

        $('#clock').text(`0:00.00`)
    }

    function startButton(){
        if(timer == 3){
            startTimer();
            startUpdate();
        }else{
            stopTimer();
            stopUpdate();
        }
    }

    
})