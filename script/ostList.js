function ostList(){
    let htmlAnswer = "<p class='text-danger titleMidtest'>Lưu ý: <i class=\"fas fa-exclamation-triangle\"></i></p><i class=\"fas fa-caret-right\"></i> Đây là danh sách nhạc bản quyền của hãng sản xuất Asobimo khi sử dụng vào game Izanagi Online. <br> <i class=\"fas fa-caret-right\"></i> Đây là điều bí mật liên quan đến bản quyền nên tốt nhất bạn không nên share ra bên ngoài." +
        "<table class='table table-hover table-secondary table-striped table-bordered text-center align-middle'><thead ><tr><th>Tên bài hát <i class=\"fas fa-music\"></i></th><th>Sử dụng tại:</th><th><i class=\"fas fa-headphones-alt\"></i></th></tr></thead>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Main Theme</span> </td><td>Nhạc nền từ phiên bản trước</td><td><audio controls><source src='ost/mainTheme.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Death and Sorrow</span> </td><td>Map Blacksmith Village</td><td><audio controls><source src='ost/sorrow.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>The Outcome of War</span> </td><td>Các map Sanctum</td><td><audio controls><source src='ost/sanctum.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Launch of Armageddon</span> </td><td>Warmisson</td><td><audio controls><source src='ost/warrmisson.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>5th Continent's Archenemy</span> </td><td>Warmisson- Final boss</td><td><audio controls><source src='ost/warmissonboss.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Great 4 Max's Theme</span> </td><td>Khi Max xuất hiện (Quest đầu game)</td><td><audio controls><source src='ost/max.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Great 4 Maya's Theme</span> </td><td>Nhạc nền của một trong bộ tứ Great Fours- Maya, hiện đang được dùng làm nhạc nền Menu chính ở bản hiện tại.</td><td><audio controls><source src='ost/maya.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Great 4 MB's Theme</span> </td><td>Chưa có</td><td><audio controls><source src='ost/mb.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Great 4 Shade's Theme</span> </td><td>Chưa có</td><td><audio controls><source src='ost/shade.mp3'></audio></td></tr>" +
        "<tr class='table-dark'><td><span class='font-monospace fs-5'>Brick Wall Town</span> </td><td>Các map thuộc BWT</td><td><audio controls><source src='ost/bwt.mp3'></audio></td></tr>" +


        "</table><br>" +
        "<p class='text-success titleMidtest'>Đôi điều tác giả: <i class=\"fas fa-exclamation-triangle\"></i></p><i class=\"fas fa-caret-right\"></i> Ost là gì?- Là tên viết tắt của Original Soundtrack- là nhạc nền dùng trong các sản phẩm do nhà phát triển tạo ra" +
        " và được sử dụng trong phim ảnh, game, kịch, chương trình,... hay bất cứ một sản phẩm giải trí nào đó. Đã có rất nhiều giải thưởng đề cử ost của các tựa game từ những năm 2003 cho đến bây giờ (The Game Award), điều đó cho thấy sự quan tâm," +
        " yêu thích của các game thủ, cũng như khẳng định một tựa game thành công không thể thiếu một ost đầy chất lượng. Izanagi Online cũng vậy, sở hữu cho mình một bộ ost đơn giản nhưng không kém phần hấp dẫn. " +
        " Tuy nhiên, nhà phát triển Asobimo khá... kín đáo trong việc công khai cũng như public source để cho player có thể tải về miễn phí (Phải trả phí). Chính vì vậy, để bù đắp, trang web này đã đăng tải các ost được" +
        " sử dụng trong game nhằm thỏa mãn nhu cầu tìm tòi, giải trí sâu về Izanagi Online.";
    $('#guideMsgIndex').html("...");
    $('#information').html(htmlAnswer);
}