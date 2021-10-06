function scrollToListMainQuest(scrollCase){
    switch (scrollCase){
        case 1:
            document.getElementById('mainquestlv1to50').scrollIntoView();
            break;
        case 2:
            document.getElementById('mainquest11').scrollIntoView();
            break;
        case 3:
            document.getElementById('mainquest12').scrollIntoView();
            break;
        case 4:
            document.getElementById('mainquest13').scrollIntoView();
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
    }

}

function mainQuestAnswer(){

    let htmlAnswer = "<p class='titleMidtest'>Main quest là chuỗi nhiệm vụ chính xuyên suốt để mở các chức năng của game như Wall Walk, Water Walk, " +
        "các map, boss,... hay nói tóm lại: chúng ta cần phải hoàn thành main quest. Lưu ý: các tên quest, hay nội dung quest vãn sẽ giữ nguyên tiếng Anh để cho dễ nhận biết (Game không có Việt hóa)</p><br>" +
        "<p class='titleMidtest'>Mục lục main quest</p><br>" +
        "<div class='list-group'>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(1)' class='listAvatarItem listAvatarItem-action list-group-item-secondary'> Phần 1: Level 1-50: <i class=\"fas fa-sort-amount-down\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(2)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.1.Ordo - Cave of Bewilderness.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(3)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.2.Big Limestone Cave - West Plains - Cave of Howling Peak.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(4)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.3.Brick Wall Town - Flash Cave.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.4.Northern Plains - Cave of Gob Golin.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.5.North Defense Line - Mystic Ruined City.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.6.Privileged Area - Perished Smithy - Tunnel 1.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.7.Large Wetland - Cave of Heavy Python.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.8.Oil Field Site - Cave of Gross Oil.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.9.Sewerage 3 - Kasuba Water Plant 3.</a><br>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-secondary'> Phần 2: Level 50-70: <i class=\"fas fa-sort-amount-down\"></i></a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.1.North Fortress - War Quest.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.2.Old Rural Area - Yamato Village - Rural Cave.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.3.Canyon of Stone - Mt. O Entrance - Halfway - Near Top.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.4.Ancient Ruins - Catacombe B1F–B2F.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.5.Mt O Near Top - Side Road - Animal Trail.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.6.Warship ISL Resident - Depot - Main.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.7.Highway Site - Old Industrial DIST - Chaos of the Dead - Grotto.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.8.Thick Fog Forest - Grave of Oblivion - Pitch Black Cave.</a><br>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-secondary'> Phần 3: Level 70-90: <i class=\"fas fa-sort-amount-down\"></i></a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 3.1.Thick Fog Cave - Spellbind Grave - Garden of Joy.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 3.2.Necrosis Village - Ouma-an Cave - Gray Town.</a>" +
        "    <a href='javascript:void(0)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 3.3.Dark Mt. Borderline - South Layer Cave.</a>" +
        "<p class='titleMidtest'>Danh sách chi tiết tất cả Main Quest</p><br>" +
        "<p class='titleMidtest' id='mainquestlv1to50'>Level 1- 50</p><br>" +
        "<p  id='mainquest11'><b>1.1.Ordo - Cave of Bewilderness.</b></p><br>" +
        "<table class='table table-dark table-bordered  table-hover align-middle text-center'>" +
       "<tr>"+
        "<th scope='col'>STT <i class=\"fas fa-sort-amount-down\"></i></th>" +
        "<th scope='col'>Tên Quest <i class=\"fas fa-scroll\"></i></th>" +
        "<th scope='col'>NPC <i class=\"fas fa-user\"></i></th>" +
        "<th scope='col'>Địa điểm nhận quest <i class=\"fas fa-map-marker-alt\"></i></th>" +
        "<th scope='col'>Nội dung làm quest <i class=\"fas fa-torah\"></i></th>" +
        "<th scope='col'>Vị trí trả Quest <i class=\"fas fa-map-marker\"></i></th></tr>" +
        "<tr class='table-secondary'>" +
        "<td scope='row'>01</td>"+
        "<td >Better say thanks</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td>Talk to Shade.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >How about some exercise?</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td>Defeat 3 Weakened Crawler.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>I introduced you</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td>Talk to Jiro.</td>"+"<td  rowspan='2'>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Jiro</td>"+"<td>Ordo Village.</td>"+"<td>Defeat 5 Dirty Mothbee.</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Better Let them know you</td>"+
        "<td>Jiro</td>"+"<td>Ordo Village</td>"+"<td>Talk to Arvi.<br>Talk to Pamela.<br>Talk to Grid.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Oh Forgot about him</td>"+
        "<td>Jiro</td>"+"<td>Ordo Village</td>"+"<td>Talk to Lynette.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Please help Camilla</td>"+
        "<td>Jiro</td>"+"<td>Ordo Village</td>"+"<td>Talk to Camilla..</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>I need materials</td>"+
        "<td>Camilla</td>"+"<td>Ordo Village</td>"+"<td>Get 3 Nut of Starved Killer Plant.<br>Give to Camilla.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>He's curious about you</td>"+
        "<td>Camilla</td>"+"<td>Ordo Village</td>"+"<td>Talk to Willy.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Willy</td>"+  "<td>Ordo Village</td>"+  "<td>Defeat 3 Weakened Goblin Troll.</td>"+  "<td>Cave of Bewilderness</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>You're counted too!</td>"+
        "<td>Willy</td>"+"<td>Ordo Village</td>"+"<td>Talk to Morris.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Aim for the top</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td>Become Lv 7 or higher.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>Show them how much you gained</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td>Talk to Shade.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Deliver this invitation to the forest</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td>Talk to Travis.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>Want to hear something good?</td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td>Defeat 1 Oppressive Goblin Troll.</td>"+"<td>Cave of Bewilderness</td>"+
        "</tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td>Now try wall run</td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td>Defeat 1 Wounded Wolf.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td>Get back to the village now! <br><i>(Khi nhận nhiệm vụ này, bạn sẽ kích hoạt chế độ Cốt truyện tại làng Ordo, làng Ordo bị hủy diệt và tất cả những side quest của bạn tại đây sẽ không còn khả dụng.)</i></td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td>Talk to Morris.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "</table>"+




        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest12'><b>1.2.Big Limestone Cave - West Plains - Cave of Howling Peak.</b></p><br>" +
        "<table class='table table-dark table-bordered  table-hover align-middle text-center'>" +
        "<tr>"+
        "<th scope='col'>STT <i class=\"fas fa-sort-amount-down\"></i></th>" +
        "<th scope='col'>Tên Quest <i class=\"fas fa-scroll\"></i></th>" +
        "<th scope='col'>NPC <i class=\"fas fa-user\"></i></th>" +
        "<th scope='col'>Địa điểm nhận quest <i class=\"fas fa-map-marker-alt\"></i></th>" +
        "<th scope='col'>Nội dung làm quest <i class=\"fas fa-torah\"></i></th>" +
        "<th scope='col'>Vị trí trả Quest <i class=\"fas fa-map-marker\"></i></th></tr>" +
        "<tr class='table-secondary'>" +
        "<td scope='row' rowspan='2'>01</td>"+
        "<td rowspan='2'>Deliver this letter please...</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td>Hurry to Maya.</td>"+"<td>Waterfall Lane</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Maya</td><td>Waterfall Lane</td><td>Find Dario.</td><td>Big Limestone Cave.</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >You a real...?</td>"+
        "<td>Dario</td>"+"<td>Big Limestone Cave</td>"+"<td>Defeat 5 Newly Born Araneus.<br>Defeat 5 Wimpy Shocker Lizard.</td>"+"<td>Big Limestone Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >03</td>"+
        "<td >Head to Brick Wall Town</td>"+
        "<td>Dario</td>"+"<td>Big Limestone Cave</td>"+"<td>Talk to Gate Keeper.</td>"+"<td>West Plains</td>"+
        "</tr>"+
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>I need Recommendation</td>"+
        "<td>Gate Keeper</td>"+"<td rowspan='2'>West Plains</td>"+"<td>Get 1 Recommendation.</td>"+"<td rowspan='2'>West Plains</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Vermont</td><td>Get 1 Recommendation<br>Defeat 3 Coward Manis and 2 Vigorous Vampire Chick<br>Then speak to the Gate Keeper.</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Need to have the Official take this</td>"+
        "<td>Gate Keeper</td>"+"<td>West Plains</td>"+"<td>Speak to Olcott.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td >07</td>"+
        "<td >Show some sincerity</td>"+
        "<td>Olcott</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Olcott.<br><i>Hắn ta sẽ hỏi bạn 20.000 gold làm phí đăng kí.</i></td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >08</td>"+
        "<td>We can always have more sincerity</td>"+
        "<td>Olcott</td>"+"<td>BWT - Commercial Area</td>"+"<td>Defeat 3 of Vigorous Vampire Chick.<br>Defeat 5 of The Weakest Hummingbird.<br>Give to Olcott.</td>"+"<td>West Plains</td>"+
        "</tr>"+
        "<tr>" +
        "<td>09</td>"+
        "<td>Do something about that girl!</td>"+
        "<td>Olcott</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Irma.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >10</td>"+
        "<td>I only trust what I see myself</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td>Defeat 5 Great Hider Scorpion.<br>Report to Irma.</td>"+"<td>Cave of Howling Peak</td>"+
        "</tr>"+
        "<tr>" +
        "<td >11</td>"+
        "<td>She went to the west?</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Billy.</td>"+"<td>Big Limestone Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >12</td>"+
        "<td>The roads too dangerous</td>"+
        "<td>Billy</td>"+"<td>Big Limestone Cave</td>"+"<td>Defeat 4 Nice Soldier Skeleton.<br>Get 1 Calcium Deficient Bone.<br>Give to Billy.</td>"+"<td>Cave of Howling Peak</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>13</td>"+
        "<td rowspan='2'>I'm worried it might come out</td>"+
        "<td>Billy</td>"+"<td rowspan='2'>Big Limestone Cave</td>"+"<td>Defeat 1 Cross-border Heteropoda.<br>Talk to Billy.</td>"+"<td>Cave of Howling Peak</td>"+
        "</tr>"+
        "<tr><td>Billy</td><td>Report to Irma.</td><td>BWT - Commercial Area</td></tr>"+
        "</table>"+




        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest13'><b>1.3.Brick Wall Town - Flash Cave.</b></p><br>" +
        "<table class='table table-dark table-bordered  table-hover align-middle text-center'>" +
        "<tr>"+
        "<th scope='col'>STT <i class=\"fas fa-sort-amount-down\"></i></th>" +
        "<th scope='col'>Tên Quest <i class=\"fas fa-scroll\"></i></th>" +
        "<th scope='col'>NPC <i class=\"fas fa-user\"></i></th>" +
        "<th scope='col'>Địa điểm nhận quest <i class=\"fas fa-map-marker-alt\"></i></th>" +
        "<th scope='col'>Nội dung làm quest <i class=\"fas fa-torah\"></i></th>" +
        "<th scope='col'>Vị trí trả Quest <i class=\"fas fa-map-marker\"></i></th></tr>" +
        "<tr class='table-secondary'>" +
        "<td scope='row' rowspan='3'>01</td>"+
        "<td rowspan='3'>Might still be in the slums</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Mr. Sweet.</td>"+"<td rowspan='3'>Outer Wall District</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Mr. Sweet</td><td rowspan='2'>Outer Wall District</td><td>Talk to Mr. Lonely</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Mr. Lonely</td><td>Talk to Gemma.</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >Materials are needed to tell fortunes</td>"+
        "<td>Gemma</td>"+"<td>Outer Wall District</td>"+"<td>Get Tough Spider Legs (Strong Araneus).<br>Give to Gemma.</td>"+"<td>Spider Thread Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Ask that man like woman</td>"+
        "<td>Gemma</td>"+"<td>Outer Wall District</td>"+"<td>Talk to Alda.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Gemma</td><td>BWT - Military Area</td><td>Defeat 6 Anxious Skeleton</td><td>Spider Thread Cave</td>"+
        "</tr>"+
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Someone you know is here</td>"+
        "<td>Alda</td>"+"<td rowspan='2'>West Plains</td>"+"<td>Talk to ??? (Max).</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Max</td><td>Talk to ??? (Max).<br>Report to Irma.</td><td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Be careful of the poor guy!</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Alan.</td>"+"<td>Outer Wall District</td>"+
        "</tr>"+
        "<tr>" +
        "<td >07</td>"+
        "<td >I'm saving up to go back to BWT!</td>"+
        "<td>Alan</td>"+"<td>Outer Wall District</td>"+"<td>Get 2 Cotton Candy Flavored Spore (Abusive Fungus)<br>Give to Alan.</td>"+"<td>Flash Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>Ask the boy</td>"+
        "<td>Alan</td>"+"<td rowspan='2'>Outer Wall District</td>"+"<td>Talk to Pino.</td>"+"<td>Outer Wall District</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Pino</td><td>Complete one level at the tower of purgatory<br>Defeat Raging Minotaur</td><td>Flash Cave</td>"+
        "</tr>"+
        "<tr>" +
        "<td>09</td>"+
        "<td>That's all I know</td>"+
        "<td>Pino</td>"+"<td>Outer Wall District</td>"+"<td>Talk to Irma.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "</table>"+

        "</div>";
    $('#information').html(htmlAnswer);
}