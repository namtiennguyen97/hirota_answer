function midTestAnswer(){
    $('#guideMsgIndex').text('...');
    let htmlMidtest = "<p class='titleMidtest'>Part 1: Hide and Seek (Trốn tìm)</p><br><table class='table table-bordered table-striped table-hover'>" +
        "<tr><th scope='col' class='text-center'>Ghi chú <i class=\"fas fa-clipboard\"></i></th><th scope='col' class='text-center'>Địa điểm <i class=\"fas fa-search-location\"></i></th><th scope='col' class='text-center'>Image <i class=\"fas fa-images\"></i></th>" +
        "</tr>" +
        "<tr><td scope='row'>Ở ngay map khởi đầu lv1, nơi mà bạn vừa học thành công thuật wall walk. (Vách đá mà chỉ có 2 chú sói)</td><td>Old Wood Forest</td><td><img src='img/600px-Hide_and_Seek_NDL.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "<tr><td scope='row'>Đằng sau 1 toa tàu (Nơi có boss map là một chú thằn lằn xanh)</td><td>Big Limestone Cave</td><td><img src='img/600px-Hide_and_Seek_BLC.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "<tr><td scope='row'>Ở ngay trên đỉnh một chỏm đá, hãy ngước lên nhìn (NPC đứng ở một vị trí rất cao, hãy tmf cách nhảy lên các mỏm đá)</td><td>North Defense Line</td><td><img src='img/600px-Hide_and_Seek_NDL.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "<tr><td scope='row'>Trong một vùng sân nhỏ (Bên trái tàu điện ngầm nơi vào boss Rat)</td><td>Mystic Ruined City</td><td><img src='img/600px-Hide_and_Seek_MRC.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "<tr><td scope='row'>Trên một vách núi nhỏ (Chỉ cần mở map và nhìn chấm trắng và tới)</td><td>Large Wetland</td><td><img src='img/600px-Hide_and_Seek_LW.jpeg' class='img img-thumbnail midTestImg'></td>"+
        "<tr><td scope='row'>Hãy nhảy từ trên cầu xuống và hạ cánh ở một cây cầu nhỏ, nó sẽ dẫn bạn đến một cái hang nhỏ bò hoang.</td><td>North Fortress Path</td><td><img src='img/600px-Hide_and_Seek_NFP.jpeg' class='img img-thumbnail midTestImg'></td>"+
        "</tr>" +
        "</table>" + "<br>"
        +"<p class='titleMidtest'>"+  'Part 2: Monster Killing (Giết quái farm nguyên liệu yêu cầu)' + "</p>" + "<br>"
        + "<span>Đầu tiên hãy nói chuyện với Hotaru để có thể bắt đầu thực hiện mid test thứ 2 này (Tuy vào class của bạn, monster có thể sẽ khác). Sau đó bạn sẽ dành hầu hết thời gian ở Outer Wall District để bắt đầu đi Boss Rush. Bạn sẽ được yêu cầu 8 Ebisu Deity Gems từ Boss rush Lv30 (BR30) và 3 Jurojin Deity Gems từ Boss Rush Lv50 (BR50).\n" +
        "\n" + "<br>" +
        "**Lưu ý: Bạn cũng có thể mua chúng ngay tại stall vì giá thành rất rẻ, hoặc những player có thừa những nguyên liệu này có thể cho bạn.\n" +
        "\n" +
        "Sau đó bạn sẽ được gửi đến npc ở Spider Thread Cave nơi bạn có thể tiến hành đi vào Sanctum (Đây cũng là khởi đầu về giới thiệu về tính năng sanctum), bạn có thể vào khi có Dynamite (Tuy nhiên với thời điểm hiện tại, bạn khó lòng có thể hoàn thành màn chơi sanctum này, hãy lưu ý, chỉ cần đi vào sanctum là bạn đã có thể hoàn thành quest, không cần phải hoàn thành full màn chơi).</span>" +
        "<br>"+
        "<p class='titleMidtest'>"+  'Part 3 - Extracting and Crafting (Thu thập và craft đồ theo yêu cầu)' + "</p>" + "<br>"
        +"<span>Bạn sẽ được yêu cầu gặp MB tại Blacksmith's Village và anh ta sẽ yêu cầu một số nguyên liệu từ bạn</span>"
        +"<table class='table table-bordered table-striped table-hover'><tr><th scope='col' class='text-center'>Item yêu cầu <i class=\"fas fa-images\"></i></th><th scope='col' class='text-center'>Số lượng cần <i class=\"fas fa-sort-amount-up\"></i></th><th class='text-center' scope='col'>Địa điểm <i class=\"fas fa-search-location\"></i></th><th scope='col' class='text-center' >Ghi chú <i class=\"fas fa-clipboard\"></i></th></tr>" +
        "<tr><td scope='row'><img src='img/Deity_Gem_Mineral.jpeg'></td><td>10</td><td>Perished Smithy</td><td>Tất cả những chỗ extract có chữ ETC</td></tr>"+
        "<tr><td scope='row'><img src='img/Raw_Deity_Gem.jpeg'></td><td>8</td><td>Large Wetland</td><td>Tất cả những chỗ extract có chữ ETC</td></tr>"+
        "<tr><td scope='row'><img src='img/Stone_Chisel.jpeg'></td><td>8</td><td>Blacksmith's Village</td><td>Tất cả những chỗ extract có chữ ETC</td></tr>"+
        "</table>"
        +"<p class='titleMidtest'>"+  'Part 4: Final test (Kết hợp giữa Trốn tìm, Killing monster, craft và thu lượm)' + "</p>" + "<br>"
        +"<span><b>1.HIDE AND SEEK</b></span>"+"<br>"
        +"<table class='table table-bordered table-striped table-hover'>" +
        "<tr><th scope='col' class='text-center'>Ghi chú <i class=\"fas fa-clipboard\"></i></th><th scope='col' class='text-center'>Địa điểm <i class=\"fas fa-search-location\"></i></th><th scope='col' class='text-center'>Image <i class=\"fas fa-images\"></i></th>" +
        "</tr>" +
        "<tr><td scope='row'>Ở góc map. Hãy mở map lên và để ý chấm trắng npc</td><td>Kasuba Water Plant 3</td><td><img src='img/600px-Hide_and_Seek_KWP3.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "<tr><td scope='row'>Nơi gần boss map King Golem</td><td>Valley of the Wind</td><td><img src='img/600px-Hide_and_Seek_VotW.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "<tr><td scope='row'>Ở dưới cầu, NPC đứng cạnh MAX</td><td>Ancient Ruins</td><td><img src='img/600px-Hide_and_Seek_AR.jpeg' class='img img-thumbnail midTestImg'></td>" +
        "</tr>" +
        "</table>" + "<br>"
        +"<span><b>2.Killing monster</b></span>"+ "<br>"+
        "<span>1.Giết 20 Ex T90 Land Scouts either in Ancient Ruins or inside Ruins Escape Route\n" +
        "<br>" +
        "2.Giết 20 Ex T30 Stealth Attackers in Ancient Ruins (Qủa cầu)" +
        "<br>" +
        "3.Giết 30 Ex T80 Reptile Attackers trong Ruins Escape Route (thằn lằn)</span>"+"<br>"
        +"<span><b>3.Gathering and Crafting</b></span>"+ "<br>"
        +"<span>Tùy vào class của bạn thì nguyên liệu yêu cầu sẽ khác, dưới đây là danh sách nguyên liệu của từng class. Tổng số lượng yêu cầu đều như nhau, đó là 20.</span>"
        +"<table class='table table-bordered table-striped table-hover'><tr><th scope='col' class='text-center'>Class <i class=\"fas fa-book-open\"></i></th><th scope='col' class='text-center'>Monster <i class=\"fab fa-optin-monster\"></i></th><th scope='col' class='text-center'>Map <i class=\"fas fa-search-location\"</th><th scope='col' class='text-center'>Image <i class=\"fas fa-images\"></th></tr>" +
        "<tr>" +
        "<td scope='row' rowspan='3'>Warrior</td>"+
        "<td>Arrogant Soldier Skeleton</td><td>Cave Hinarigaoka</td>"+
        "<td scope='row' rowspan='3' align='center'><img class='img img-thumbnail' src='img/Chip_Slash_Mineral.jpeg'></td>"+
        "</tr>"+

        "<tr>" +
        "<td>Stalwart Samurai Skeleton</td><td>North Defense Line</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Quiet Demon Human Troop</td><td>Perished Smithy</td>"+
        "</tr>"+

        "<tr>" +
        "<td scope='row' rowspan='3'>Assassin</td>"+
        "<td>Quiet Demon Human Troop</td><td>North Defense Line</td>"+
        "<td scope='row' rowspan='3' align='center'><img class='img img-thumbnail' src='img/Chip_Slash_Mineral.jpeg'></td>"+
        "</tr>"+

        "<tr>" +
        "<td>Assault Demon Human Troop</td><td>Perished Smithy</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Hungry Lizard</td><td>Large Wetland</td>"+
        "</tr>"+

        "<tr>" +
        "<td scope='row' rowspan='3'>Mage</td>"+
        "<td>Bandwagon Goblin</td><td>Perished Smithy</td>"+
        "<td scope='row' rowspan='3' align='center'><img class='img img-thumbnail' src='img/Chip_Slash_Mineral.jpeg'></td>"+
        "</tr>"+

        "<tr>" +
        "<td>Unfit Turtle</td><td>Large Wetland</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Berserk Fake Cat</td><td>North Fortress Path</td>"+
        "</tr>"+

        "<tr>" +
        "<td scope='row' rowspan='3'>Cleric</td>"+
        "<td>Jitter Manis</td><td>Cave Hinarigaoka</td>"+
        "<td scope='row' rowspan='3' align='center'><img class='img img-thumbnail' src='img/Chip_Slash_Mineral.jpeg'></td>"+
        "</tr>"+

        "<tr>" +
        "<td>Modest Ninja Skeleton</td><td>North Defense Line</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Germophobic Slime</td><td>North Fortress Path</td>"+
        "</tr>"+
        "</table>"+"<br>"
        +"<span>Sau đó bạn sẽ tiếp tục nấu nguyên liệu cuối cùng ở NPC Estel. Sau khi hoàn thành, bạn sẽ đối mặt với thử thách cuối cùng của chuỗi Mid-test- The Last Ordeal.</span>"+"<br>"
        +"<span>NOTE: Tuy nhiên đó chưa phải là kết thúc, để thực sự hoàn thành, bạn cần phải thu thập 4 huy chương bạc từ 4 con boss bất kì bằng cách hunt trực tiếp trong hang ổ của nó. " +
        "Cách để có được huy chương bạc từ mỗi con boss đó là bạn phải giết đủ 100 lần với mỗi con, sau đó mở giao diện sách Achivement Boss nhận huy chương (400 lần đánh boss tất cả, lưu ý đánh 4 con boss yếu nhất game để có thể hoàn thành nhanh). " +
        "Chúc các bạn thành công và trở thành những Ninja hùng mạnh của VN.</span>";
    $('#information').html(htmlMidtest);
}