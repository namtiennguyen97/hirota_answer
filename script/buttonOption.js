
let deleteSound = $('#deleteSound')[0];

//sound
$('#dataMenuSound').hide();
$('#dataMenuHome').hide();
$('#dataMenuGuide').hide();

$('#ss').on('click','#dataMenu',function () {
    $('#dataMenuHome').show();
    $('#dataMenuSound').show();
    $('#dataMenuSoundUp').show();
    $('#dataMenuGuide').show();
    $('#dataMenu').replaceWith("<a href='javascript:' id='dataMenuUp' class='menuDataSS'><i class='fas fa-angle-double-down '></i></a>");
});


$('#ss').on('click','#dataMenuUp', function () {
    $('#dataMenuUp').replaceWith("<a href='javascript:' id='dataMenu' class='menuDataSS'><i class='fas fa-angle-double-up '></i></a>");
    $('#dataMenuHome').hide();
    $('#dataMenuSound').hide();
    $('#dataMenuSoundUp').hide();
    $('#dataMenuGuide').hide();
});






//sound
//menu bar


$('#ss').on('click','#dataMenuUp', function () {
    $('#dataMenuUp').replaceWith("<a href='javascript:' id='dataMenu' class='menuDataSS'><i class='fas fa-angle-double-up '></i></a>");
    $('#dataMenuHome').hide();
    $('#dataMenuSound').hide();
    $('#dataMenuSoundUp').hide();
});

$('#sss').on('click','.dataMenuSound', function () {
    $('#dataMenuSound').replaceWith("<a href='javascript:' id='dataMenuSoundUp' class='dataMenuSound'><i class='fas fa-volume-mute'></i></a>");
    soundMenuStop();
});
$('#sss').on('click','#dataMenuSoundUp', function () {
    $('#dataMenuSoundUp').replaceWith("<a href='javascript:' id='dataMenuSound' class='dataMenuSound'><i class='fas fa-volume-up'></i></a>");
    soundMenu();
});

$('#dataMenuGuide').click(function (){
    $('.fa-user-cog').toggleClass('fa-user-alt-slash');
    $('#showGuide').toggle();
});

// $(document).on('click','#dataMenuGuide','.fa-user-alt-slash', function (){
//     $('#showGuide').hide();
// });
// $(document).on('click','#showGuide','.fa-user-cog', function (){
//     $('#showGuide').show();
// });

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}