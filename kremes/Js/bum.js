//------------ZOOM--------------------------------------
/**/

var zz=1;
tv_sz = window.innerWidth;
tv_m = window.innerHeight;
if(tv_sz<1920){
    zz=tv_sz/1920;
    $("body").css("zoom", zz);

}else{
    zz=1;
    $("body").css("zoom", zz);
}

$(window).on('resize', function(){
    tv_sz = window.innerWidth;
    tv_m = window.innerHeight;

    if(tv_sz<1920){
        zz=tv_sz/1920;
    }else{
        zz=1;
    }
    $("body").css("zoom", zz);

});
//-------------ZOOM-------------------------------------