
let guideTip = ['UWU~','Có chuyện gì vậy?','Có vấn đề gì ngoài việc click vào tôi không ạ?', 'o~0',
'Hôm nay là ngày...' + date.getDate() + "/" + (date.getMonth() + 1) +  "/" + date.getFullYear(), 'Nếu có vấn đề gì, hãy điền vào ô câu hỏi.'];


$('.glitch__img').click(function () {
    let randGuide = Math.floor(Math.random() * 6);
    $('#guideMsgIndex').text(guideTip[randGuide]);
});

function showTutorialWebsite(){
    let htmlAnswer = "<div class='list-group'>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-action'><i class=\"fab fa-github-alt\"></i> Cảm ơn bạn đã chọn trang web này để tìm kiếm thông tin về Izanagi Online -Hirota</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-primary'><i class=\"fas fa-blind\"></i> Trang web nhằm cải thiện vấn đề tìm kiếm thông tin về Izanagi Online.</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-secondary'><i class=\"fab fa-vine\"></i> Tài liệu tiếng Việt, dễ hiểu.</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-disease\"></i> Thông tin cô đọng, không dư thừa hay rườm rà.</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-danger'><i class=\"fas fa-baby\"></i> Dễ tiếp cận đối với newbie, những người đang ở giai đoạn cần tìm hiểu mọi thứ.</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-warning'><i class=\"fas fa-music\"></i> Nhạc nền: City Ruin- Nier Automata, thưởng thức những phút giây thư giãn và lãng mạn.</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-gamepad\"></i> Bạn có thể vừa chơi game vừa tra cứu trên hai thiết bị, giúp dễ dàng hoàn thành game.</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-light'><i class=\"fas fa-spinner\"></i> Hết ý tưởng rồi, nghĩ hộ tui với @@</a>" +
        "    <a href='#' class='listAvatarItem listAvatarItem-action list-group-item-dark'><i class=\"fas fa-head-side-cough-slash\"></i> Điều cuối cùng: Hãy cùng nhau tuân thủ các nguyên tắc chống dịch, vì một tương lai không ai phải ở nhà cày game trong cảnh nghèo đói và thấp thỏm nữa ^^.</a>" +
        "</div>";
    $('#information').html(htmlAnswer);
}
