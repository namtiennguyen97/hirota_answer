function chickAnswer(){
    let htmlAnswer = "<table id='tableChick' class='table table-bordered table-striped table-hover text-center  align-middle'>" +
        "<tr><th scope='col'>STT <i class=\"fas fa-sort-numeric-down\"></i></th><th scope='col'>Image <i class=\"fas fa-images\"></i></th><th scope='col' class='text-center'>Loại Chick <i class=\"fas fa-drumstick-bite\"></i></th><th scope='col' class='text-center'>Thời gian xuất hiện <i class=\"far fa-clock\"></i></th><th scope='col' class='text-center'>Địa điểm <i class=\"fas fa-search-location\"></i></th><th scope='col' class='text-center'>Drop <i class=\"fas fa-box-open\"></i></th></tr>" +
        "<tr><td scope='row'>01</td><td align='center'><img class='img img-thumbnail' src='img/chick/goldenchick.jpg'></td><td>Vàng</td><td>Thứ 2 -> 5 (10h-12h; 24h->2h) và Thứ 6-> CN (18h->20h) </td><td>Tại Waterfall lane, North Defense Line, West Plains, Ancient Ruins</td><td>Gold coin bag, Silver Coin bag, Bronze Coin bag, Platinum coin bag, Hadweed Coin bag, Chick headress SR-L, Chick egg sheild</td></tr>" +
        "<tr><td>02</td><td align='center'><img class='img img-thumbnail' src='img/chick/redchick.jpg'></td><td>Đỏ</td><td>Thứ 2 -> 5 (10h-12h; 24h->2h) </td><td>Tại Big Limestone Cave, North Defense Line, Perished Smithy</td><td>Keys, scandium, Bad recipe box, Bronze coin bag, Chick eggs sheild (Và những nguyên liệu cường hóa cấp thấp, nếu bạn có được chúng, hãy thẳng tay vứt bỏ.)</td></tr>" +
        "<tr><td>02</td><td align='center'><img class='img img-thumbnail' src='img/chick/colorfulchick.jpg'></td><td>Bảy màu</td><td>Thứ 2 -> 5 (10h-12h; 24h->2h)</td><td>Tại Old Wood Forest, Northern Plains, Waterfall lane</td><td>Gold coin bag, Silver coin bag, Bronze coin bag, Recipe box, Chick headress SR-L, Keys, Chick eggs sheild</td></tr>" +
        "</table>";
    $('#guideMsgIndex').text('...');
    $('#information').html(htmlAnswer);
    $('#information2').html('<div></div>');
}