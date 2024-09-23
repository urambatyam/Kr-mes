var kerdes = 1;
var time=1;

$( document ).ready(function() {
    console.log( kerdes );

    $("#start").click(function () {
        $("#kerdes_1").show(600);
        $("#quiz-text").animate({ top: "500px" ,opacity:0}, 600,function () {
            $(this).hide();

           // timer.innerHTML=time;
        });
        $(".circleProgress_wrapper").show();

        const myInterval = setInterval(myTimer, 10000);

        function myTimer() {
            kerdes++;
            time++;
            $(".no").hide(300);
            $("#kerdes_"+kerdes).show(600);
            if(time >0){

                timer.innerHTML=time;
            }
            if(kerdes == 4){
                myStopFunction();
                $(".circleProgress_wrapper").hide();
            }


            //if(time<=3) time =10;
        }






        function myStopFunction() {
            clearInterval(myInterval);
        }
    })
});


