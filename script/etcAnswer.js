function etcAnswer(){
    let htmlAnswer = "<div class='list-group'>" +
        "    <a href='javascript:void(0)' onclick='whatistraining()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Training là gì?</a>" +
        "    <a href='javascript:void(0)' onclick='whatissp()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Supper power là gì?</a>" +
        "    <a href='javascript:void(0)' onclick='howtoEarnGold()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Cách để kiếm Gold nhanh nhất?</a>" +
        "    <a href='javascript:void(0)' onclick='howtolvup()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Cách để up level nhanh nhất?</a>" +
        "    <a href='javascript:void(0)' onclick='secondClass()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Chuyển nghề trong Izanagi (Mid test, second class)</a>" +
        "    <a href='javascript:void(0)' onclick='whatispet()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Pet trong Izanagi là gì?</a>" +
        "    <a href='javascript:void(0)' onclick='whattodomaxlv()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Làm gì sau khi đạt max Level?</a>" +
        "    <a href='javascript:void(0)' onclick='howtochangeIos()' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Cách chuyển char trong IOS</a>" +
        // "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-success'><i class=\"fas fa-question-circle\"></i> Gem dùng gì để hiệu quả nhất.</a>" +
        "</div>";
    $('#guideMsgIndex').text('...');
    $('#information').html(htmlAnswer);
}

function whatistraining(){

    $('#information2').html('<p class="titleMidtest" id="what_is_training">Training là gì?</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Training là một chức năng trong game, nó giúp cho bạn trở nên mạnh mẽ hơn.<br><i class="fas fa-caret-right"></i> Khi kích hoạt chế độ training, bạn sẽ trở về Level 1 và phải cố gắng lên được Level 50 để kết thúc train đó. <br>' +
        '<i class="fas fa-caret-right"></i> Tổng cộng có 5 training, tương đương với 5 lần bạn phải cày từ lv1-50. Train càng cao, bạn càng khó để lên level.'+'<br>'+
        '<i class="fas fa-caret-right"></i> Mỗi sau khi hoàn thành 1 train, tất cả các stats của bạn sẽ được cộng 5. Đặc biệt sau khi hoàn thành train thứ 3, bạn sẽ có hiệu ứng khói đen quanh người và cả đòn đánh, hoàn thành full train (5 train) sẽ có hiệu ứng sấm sét.'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Khi đang trong trạng thái training, hãy không ngần ngại mà thuê những booster để có thể kết thúc train một cách sớm nhất có thể!'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Để bắt đầu training, hãy đến gặp Npc có icon là hình ngôi sao được đánh dấu trên map Outer Wall District'+
        '</span>'+
        '</div>');
    document.getElementById('what_is_training').scrollIntoView();
}
function whatissp(){
    $('#information2').html('<p class="titleMidtest" id="what_is_sp">Supper power là gì?</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Supper power là một chức năng được unlock khi bạn đã hoàn thành mid test và chuyển class thành công.<br><i class="fas fa-caret-right"></i> Bạn sẽ gặp npc tương đương với class của mình để có thể chọn những cuốn sách (Banner) theo ý muốn mà bạn muốn build. <br>' +
        '<i class="fas fa-caret-right"></i> Tương đương với mỗi cuốn sách Banner sẽ yêu cầu 2 loại ấn khác nhau thì mới có thể kích hoạt. Bạn chỉ cần mở mục supper power lên và chọn 2 loại ấn phù hợp để kích hoạt stats của sách'+'<br>'+
        '<i class="fas fa-caret-right"></i> Mặc định class của bạn sẽ có full các ấn phục vụ cho việc chuyển đổi Banner, tuy nhiên bạn vẫn cần phải up level của từng ấn.'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Khi bạn trang bị ấn nào thì tất cả exp thu thập bên ngoài trong quá trình hoạt động của bạn sẽ được cộng vào ấn bạn đang đeo, các ấn khác nếu không trang bị sẽ không nhận được exp.'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Để gia tăng level tối đa cho ấn, bạn cần phải mua level cho từng ấn tại npc Mid test tương đương với class của bạn (Mục Unleash), level tối đa là 40 nên đừng mua thừa.'+
        '</span>'+
        '</div>');
    document.getElementById('what_is_sp').scrollIntoView();
}
function howtoEarnGold(){
    $('#information2').html('<p class="titleMidtest" id="how_to_earn_gold">Làm thế nào để kiếm gold nhanh nhất?</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Đây là câu hỏi rất phổ biến của những người mới chơi, tuy nhiên, câu trả là đó là KHÔNG CÓ CHÍNH XÁC CÁCH KIẾM GOLD NHANH NHẤT!<br><i class="fas fa-caret-right"></i> Mỗi người sẽ có cho mình cách kiếm gold khác nhau, tùy theo hoàn cảnh và điều kiện để có thể đúc kết cho mình cách kiếm tiền hiệu quả.  <br>' +
        '<i class="fas fa-caret-right"></i> Đối với newbie, sẽ không thể làm những thứ để kiếm nhiều gold như oldbie được vì bạn không đủ mạnh và yêu cầu; và đối với oldbie, mỗi một oldbie sẽ có cho mình cách kiếm gold khác nhau.'+'<br>'+
        '<i class="fas fa-caret-right"></i> Sở dĩ game chỉ có duy nhất cơ chế hunt gà vàng là cơ chế khẳng định cho việc kiếm gold trực tiếp. Phần còn lại đó là thông qua trao đổi và mua bán, nên mỗi sản phẩm bạn kiếm được sẽ có những mức giá và thu lợi nhuận khác nhau!'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Không việc gì phải nóng vội khi bạn còn là newbie, yếu làm việc nhỏ- mạnh cáng việc lớn. Khi bạn yếu, bạn có thể tìm nhiều cách đơn giản để kiếm gold như hunt chick, spirit đem bán,... vì sở dĩ nhu cầu của một newbie khá thấp nên dễ dàng có được những thứ vừa tầm.'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Một Oldbie mà không có cho mình cách kiếm gold ổn định thì đó là một oldbie thất bại- như tôi =))).'+
        '</span>'+
        '</div>');
    document.getElementById('how_to_earn_gold').scrollIntoView();
}
function howtolvup(){
    $('#information2').html('<p class="titleMidtest" id="how_to_lv">Cách để lên level nhanh nhất?</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Cách đơn giản nhất: làm main quest.<br><i class="fas fa-caret-right"></i> Sau bản update đợt tháng 4 2019, main quest đã được nâng cấp để cho phù hợp với game hơn, nhiều exp hơn. Bạn có thể dễ dang đạt level 6x chỉ cần làm main quest. <br>' +
        '<i class="fas fa-caret-right"></i> Bế tắc trong khoảng 6x -> 7x? Hãy tìm cho mình bãi quái vừa tầm level và train, còn nếu muốn nhanh hơn, hãy thuê những booster!'+'<br>'+
        '<i class="fas fa-caret-right"></i> Booster là biện pháp đơn giản nhất. Tuy nhiên tránh scamer! Hãy tìm những Booster thuộc Việt Nam.'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Ngoài ra, exp từ sách Achivement cũng có thể cung cấp một lượng exp rất lớn.'+
        '</span>'+
        '</div>');
    document.getElementById('how_to_lv').scrollIntoView();
}
function secondClass(){
    $('#information2').html('<p class="titleMidtest" id="how_to_second_class">Chuyển nghề trong Izanagi (Mid test, second class)</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Chuyển nghề- hay nói cách khác là nâng cấp nghề hiện tại.<br><i class="fas fa-caret-right"></i> Mỗi một class sẽ có 2 nhánh nghề, mỗi một nhánh nghề sẽ thể hiện 2 hướng build khác nhau tùy vào cách chọn của bạn. <br>' +
        '<i class="fas fa-caret-right"></i> Để có thể chuyển nghề, hãy hoàn thành Midtest ninja. Chuyển nghề sẽ unlock hoàn thiện class của bạn bao gồm Supper power, Skill (Only class), Training.'+'<br>'+
        '<i class="fas fa-caret-right"></i> Bạn có thể reset lại nhánh nghề của bạn khi bạn mua và sử dụng item Class Reset Button.'+ '<br>'+
        '</span>'+
        '</div>');
    document.getElementById('how_to_second_class').scrollIntoView();
}
function whatispet(){
    $('#information2').html('<p class="titleMidtest" id="what_is_pet">Pet trong Izanagi là gì?</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Cũng như bao tựa game khác, Izanagi online cũng có cơ chế Pet<br><i class="fas fa-caret-right"></i> Pet trong Izanagi đóng vai trò rất quan trọng và đa dạng, góp phần tạo sự thay đổi lớn cho sức mạnh của mỗi người. <br>' +
        '<i class="fas fa-caret-right"></i> Thay vì game cho cơ chế pet cụ thể, thì pet trong Izanagi có được thông qua quá trình ấp và nuôi rất vất vả.'+'<br>'+
        '<i class="fas fa-caret-right"></i> Tùy vào cách bạn nuôi pet, cho ăn, cho training như thế nào, bạn sẽ nhận được pet khác nhau và với chỉ số khác nhau.'+ '<br>'+
        '</span>'+
        '</div>');
    document.getElementById('what_is_pet').scrollIntoView();
}
function whattodomaxlv(){
    $('#information2').html('<p class="titleMidtest" id="what_todo_maxlv">Làm gì sau khi đạt max Level?</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Rất nhiều newbie đặt câu hỏi và nghĩ xa khi đạt max level, thì game sẽ còn gì? Xin thưa, max level chỉ là bước cơ bản nhất và là sự khởi đầu cơ bản.<br><i class="fas fa-caret-right"></i> Max level trong Izanagi kì thực rất nhanh. Level trong Izanagi chỉ để giải quyết vấn đề unlock skill, rút ngắn khoảng cách giữa player và quái. (Nếu quái cách 5 level so với người chơi, thì sát thương người chơi gây ra sẽ là vô ích) <br>' +
        '<i class="fas fa-caret-right"></i> Điều quan trọng nhất của sức mạnh bao gồm: Level-Training-Pet-Equipment, trong danh sách này, Equipment là thứ mà bạn rất khó đạt được max thậm chí cả hàng năm trời.'+'<br>'+
        '<i class="fas fa-caret-right"></i> Ngoài ra, có những hoạt động như leo tháp (Tower), Sanctum, Br, Guild Raid/Weekly Raid mà bạn sẽ không bao giờ có thể thực hiện khi Solo. Ngoài ra còn chế độ PVP so tài. Núi cao còn có núi cao hơn, những thứ bạn có được chỉ là phù phiếm đối với người khác!'+ '<br>'+
        '<i class="fas fa-caret-right"></i> Mạnh lên cũng là cách gia tăng trải nghiệm game'+ '<br>'+
        '</span>'+
        '</div>');
    document.getElementById('what_todo_maxlv').scrollIntoView();
}
function howtochangeIos(){
    $('#information2').html('<p class="titleMidtest" id="how_to_ios">Cách chuyển char trong IOS</p><br><div>' +
        '<span class="fs-5"><i class="fas fa-caret-right"></i> Khác với Android, IOS không có cơ chế đăng nhập trước khi vào game. Để lưu lại tiến trình chơi, bạn hãy lưu code tài khoản của mình. Và khi chuyển thiết bị, hãy import code sang thiết bị mới nếu không sẽ bị mất tài khoản!' +
        '</span>'+
        '</div>');
    document.getElementById('how_to_ios').scrollIntoView();
}