$(document).ready(function() {
    $('#mycarousel').carousel({ interval : 1000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginButton').click(function() {
        $('#loginModel').modal();
    });
    $('#loginDismissBtn').click(function(){
        $('#loginModel').modal("hide");
    });
    $('#cancelModel').click(function(){
        $('#loginModel').modal("hide");
    });
    $('#reserveTableId').click(function() {
        $('#reservetable').modal();
    });
    $('#closeReserveTable').click(function(){
        $('#reservetable').modal("hide");
    });
    $('#cancelReserveBtn').click(function(){
        $('#reservetable').modal("hide");
    });
});