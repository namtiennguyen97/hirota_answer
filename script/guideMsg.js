
let guideTip = ['UWU~','Có chuyện gì vậy?','Thưa ngài, ngài có vấn đề gì ngoài việc click vào tôi không ạ?',
'Hôm nay là ngày...' + date.getDate() + "/" + (date.getMonth() + 1) +  "/" + date.getFullYear(), 'Nếu có vấn đề gì, hãy điền vào ô câu hỏi.'];


$('.glitch__img').click(function () {
    let randGuide = Math.floor(Math.random() * 5);
    $('#guideMsgIndex').text(guideTip[randGuide]);
});

