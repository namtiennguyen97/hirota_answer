
let guideTip = ['UWU~','Có chuyện gì vậy?','Có vấn đề gì ngoài việc click vào tôi không ạ?', 'o~0',
'Hôm nay là ngày...' + date.getDate() + "/" + (date.getMonth() + 1) +  "/" + date.getFullYear(), 'Nếu có vấn đề gì, hãy điền vào ô câu hỏi.'];


$('.glitch__img').click(function () {
    let randGuide = Math.floor(Math.random() * 6);
    $('#guideMsgIndex').text(guideTip[randGuide]);
});

