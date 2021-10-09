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
            document.getElementById('mainquest14').scrollIntoView();
            break;
        case 6:
            document.getElementById('mainquest15').scrollIntoView();
            break;
        case 7:
            document.getElementById('mainquest16').scrollIntoView()
            break;
        case 8:
            document.getElementById('mainquest17').scrollIntoView()
            break;
        case 9:
            document.getElementById('mainquest18').scrollIntoView()
            break;
        case 10:
            document.getElementById('mainquest19').scrollIntoView()
            break;
        case 11:
            document.getElementById('mainquestlv50to70').scrollIntoView()
            break;
        case 12:
            document.getElementById('mainquest21').scrollIntoView()
            break;
        case 13:
            document.getElementById('mainquest22').scrollIntoView()
            break;
        case 14:
            document.getElementById('mainquest23').scrollIntoView()
            break;
        case 15:
            document.getElementById('mainquest24').scrollIntoView()
            break;
        case 16:
            document.getElementById('mainquest25').scrollIntoView()
            break;
        case 17:
            document.getElementById('mainquest26').scrollIntoView()
            break;
        case 18:
            document.getElementById('mainquest27').scrollIntoView()
            break;
        case 19:
            document.getElementById('mainquest28').scrollIntoView()
            break;
        case 20:
            document.getElementById('mainquestlv70to90').scrollIntoView()
            break;
        case 21:
            document.getElementById('mainquest31').scrollIntoView()
            break;
        case 22:
            document.getElementById('mainquest32').scrollIntoView()
            break;
        case 23:
            document.getElementById('mainquest33').scrollIntoView()
            break;


    }

}

function mainQuestAnswer(){
    $('#guideMsgIndex').text('...');
    let htmlAnswer = "<p class='titleMidtest'>Main quest là chuỗi nhiệm vụ chính xuyên suốt để mở các chức năng của game như Wall Walk, Water Walk, " +
        "các map, boss,... hay nói tóm lại: chúng ta cần phải hoàn thành main quest. Lưu ý: các tên quest, hay nội dung quest vãn sẽ giữ nguyên tiếng Anh để cho dễ nhận biết (Game không có Việt hóa)</p><br>" +
        "<p class='titleMidtest'>Mục lục main quest</p><br>" +
        "<div class='list-group'>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(1)' class='listAvatarItem listAvatarItem-action list-group-item-secondary'> Phần 1: Level 1-50: <i class=\"fas fa-sort-amount-down\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(2)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.1.Ordo - Cave of Bewilderness.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(3)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.2.Big Limestone Cave - West Plains - Cave of Howling Peak.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(4)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.3.Brick Wall Town - Flash Cave.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(5)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.4.Northern Plains - Cave of Gob Golin.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(6)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.5.North Defense Line - Mystic Ruined City.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(7)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.6.Privileged Area - Perished Smithy - Tunnel 1.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(8)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.7.Large Wetland - Cave of Heavy Python.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(9)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.8.Oil Field Site - Cave of Gross Oil.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(10)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.9.Sewerage 3 - Kasuba Water Plant 3.</a><br>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(11)' class='listAvatarItem listAvatarItem-action list-group-item-secondary'> Phần 2: Level 50-70: <i class=\"fas fa-sort-amount-down\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(12)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.1.North Fortress - War Quest.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(13)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.2.Old Rural Area - Yamato Village - Rural Cave.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(14)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.3.Canyon of Stone - Mt. O Entrance - Halfway - Near Top.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(15)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.4.Ancient Ruins - Catacombe B1F–B2F.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(16)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.5.Mt O Near Top - Side Road - Animal Trail.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(17)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.6.Warship ISL Resident - Depot - Main.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(18)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.7.Highway Site - Old Industrial DIST - Chaos of the Dead - Grotto.</a>" +
        "    <a href='javascript:void(0)'  onclick='scrollToListMainQuest(19)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 2.8.Thick Fog Forest - Grave of Oblivion - Pitch Black Cave.</a><br>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(20)' class='listAvatarItem listAvatarItem-action list-group-item-secondary'> Phần 3: Level 70-90: <i class=\"fas fa-sort-amount-down\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(21)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 3.1.Thick Fog Cave - Spellbind Grave - Garden of Joy.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(22)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 3.2.Necrosis Village - Ouma-an Cave - Gray Town.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(23)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 3.3.Dark Mt. Borderline - South Layer Cave.</a>" +
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
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Shade.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >How about some exercise?</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 3 Weakened Crawler.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>I introduced you</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Jiro.</td>"+"<td  rowspan='2'>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Jiro</td>"+"<td>Ordo Village.</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 5 Dirty Mothbee.</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Better Let them know you</td>"+
        "<td>Jiro</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Arvi.<br><i class=\"fas fa-arrow-right\"></i> Talk to Pamela.<br><i class=\"fas fa-arrow-right\"></i> Talk to Grid.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Oh Forgot about him</td>"+
        "<td>Jiro</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Lynette.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Please help Camilla</td>"+
        "<td>Jiro</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Camilla.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>I need materials</td>"+
        "<td>Camilla</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 3 Nut of Starved Killer Plant.<br><i class=\"fas fa-arrow-right\"></i> Give to Camilla.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>He's curious about you</td>"+
        "<td>Camilla</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Willy.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Willy</td>"+  "<td>Ordo Village</td>"+  "<td><i class=\"fas fa-arrow-right\"></i> Defeat 3 Weakened Goblin Troll.</td>"+  "<td>Cave of Bewilderness</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>You're counted too!</td>"+
        "<td>Willy</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Morris.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Aim for the top</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Become Lv 7 or higher.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>Show them how much you gained</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Shade.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Deliver this invitation to the forest</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Travis.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>Want to hear something good?<br><i class=\"fas fa-star\"></i><i>Bạn sẽ học được passive skill Wall Walk</i></td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 Oppressive Goblin Troll.</td>"+"<td>Cave of Bewilderness</td>"+
        "</tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td>Now try wall run</td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 Wounded Wolf.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td>Get back to the village now! <br><i>(Khi nhận nhiệm vụ này, bạn sẽ kích hoạt chế độ Cốt truyện tại làng Ordo, làng Ordo bị hủy diệt và tất cả những side quest của bạn tại đây sẽ không còn khả dụng.)</i></td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Morris.</td>"+"<td>Ordo Village</td>"+
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
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Hurry to Maya.</td>"+"<td>Waterfall Lane</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Maya</td><td>Waterfall Lane</td><td><i class=\"fas fa-arrow-right\"></i> Find Dario.</td><td>Big Limestone Cave.</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >You a real...?</td>"+
        "<td>Dario</td>"+"<td>Big Limestone Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 5 Newly Born Araneus.<br><i class=\"fas fa-arrow-right\"></i> Defeat 5 Wimpy Shocker Lizard.</td>"+"<td>Big Limestone Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >03</td>"+
        "<td >Head to Brick Wall Town</td>"+
        "<td>Dario</td>"+"<td>Big Limestone Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Gate Keeper.</td>"+"<td>West Plains</td>"+
        "</tr>"+
        "<tr>"+
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>I need Recommendation</td>"+
        "<td>Gate Keeper</td>"+"<td rowspan='2'>West Plains</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 1 Recommendation.</td>"+"<td rowspan='2'>West Plains</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Vermont</td><td><i class=\"fas fa-arrow-right\"></i> Get 1 Recommendation<br><i class=\"fas fa-arrow-right\"></i> Defeat 3 Coward Manis and 2 Vigorous Vampire Chick<br><i class=\"fas fa-arrow-right\"></i> Then speak to the Gate Keeper.</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Need to have the Official take this</td>"+
        "<td>Gate Keeper</td>"+"<td>West Plains</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Speak to Olcott.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Show some sincerity</td>"+
        "<td>Olcott</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Olcott.<br><i>Hắn ta sẽ hỏi bạn 20.000 gold làm phí đăng kí.</i></td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>We can always have more sincerity</td>"+
        "<td>Olcott</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 3 of Vigorous Vampire Chick.<br><i class=\"fas fa-arrow-right\"></i> Defeat 5 of The Weakest Hummingbird.<br>Give to Olcott.</td>"+"<td>West Plains</td>"+
        "</tr>"+
        "<tr>" +
        "<td>08</td>"+
        "<td>Do something about that girl!</td>"+
        "<td>Olcott</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Irma.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>I only trust what I see myself</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 5 Great Hider Scorpion.<br><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td>"+"<td>Cave of Howling Peak</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>She went to the west?</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Billy.</td>"+"<td>Big Limestone Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>The roads too dangerous</td>"+
        "<td>Billy</td>"+"<td>Big Limestone Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 4 Nice Soldier Skeleton.<br><i class=\"fas fa-arrow-right\"></i> Get 1 Calcium Deficient Bone.<br><i class=\"fas fa-arrow-right\"></i> Give to Billy.</td>"+"<td>Cave of Howling Peak</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>13</td>"+
        "<td rowspan='2'>I'm worried it might come out</td>"+
        "<td>Billy</td>"+"<td rowspan='2'>Big Limestone Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 Cross-border Heteropoda.<br><i class=\"fas fa-arrow-right\"></i> Talk to Billy.</td>"+"<td>Cave of Howling Peak</td>"+
        "</tr>"+
        "<tr><td>Billy</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>BWT - Commercial Area</td></tr>"+
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
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Mr. Sweet.</td>"+"<td rowspan='3'>Outer Wall District</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Mr. Sweet</td><td rowspan='2'>Outer Wall District</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Mr. Lonely</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Mr. Lonely</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Gemma.</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >Materials are needed to tell fortunes</td>"+
        "<td>Gemma</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get Tough Spider Legs (Strong Araneus).<br><i class=\"fas fa-arrow-right\"></i> Give to Gemma.</td>"+"<td>Spider Thread Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Ask that man like woman</td>"+
        "<td>Gemma</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Alda.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Gemma</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 6 Anxious Skeleton</td><td>Spider Thread Cave</td>"+
        "</tr>"+
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Someone you know is here</td>"+
        "<td>Alda</td>"+"<td rowspan='2'>West Plains</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to ??? (Max).</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Max</td><td>Talk to ??? (Max).<br><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Be careful of the poor guy!</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Alan.</td>"+"<td>Outer Wall District</td>"+
        "</tr>"+
        "<tr>" +
        "<td >07</td>"+
        "<td >I'm saving up to go back to BWT!</td>"+
        "<td>Alan</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 2 Cotton Candy Flavored Spore (Abusive Fungus)<br><i class=\"fas fa-arrow-right\"></i> Give to Alan.</td>"+"<td>Flash Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>Ask the boy</td>"+
        "<td>Alan</td>"+"<td rowspan='2'>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Pino.</td>"+"<td>Outer Wall District</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Pino</td><td>Complete one level at the tower of purgatory<br><i class=\"fas fa-arrow-right\"></i> Defeat Raging Minotaur</td><td>Flash Cave</td>"+
        "</tr>"+
        "<tr>" +
        "<td>09</td>"+
        "<td>That's all I know</td>"+
        "<td>Pino</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Irma.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest14'><b>Northern Plains - Cave of Gob Golin.</b></p><br>" +
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
        "<td rowspan='2'>It's hard to chase where he went (Lựa chọn 1)</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Butch.</td>"+"<td>Northern Plains</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Butch</td><td>Northern Plains</td><td><i class=\"fas fa-arrow-right\"></i> Get 2 Fine Meat (Untiring Wolf)<br><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>Northern Plains</td>"+
        "</tr>"+

        "<tr>" +
        "<td scope='row' rowspan='2'>01</td>"+
        "<td rowspan='2'>It's hard to chase where he went (Lựa chọn 2)</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Travis.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr>" +
        "<td>Travis</td><td>Old Wood Forest</td><td><i class=\"fas fa-arrow-right\"></i> Find Dario.<br><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>Big Limestone Cave</td>"+
        "</tr>"+

        "<tr class='table-secondary'>" +
        "<td>02</td>"+
        "<td>Can you sneak into the troops?</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kirkland.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr>"+
        "<td>03</td>"+
        "<td>You need this to enter the troops</td>"+
        "<td>Kirkland</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Gate Keeper.<br><i class=\"fas fa-arrow-right\"></i> Report to Kirkland.</td>"+"<td>Northern Plains</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >04</td>"+
        "<td >Next!</td>"+
        "<td>Kirkland</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 3 Useless Wood (Too Smooth Ent)<br><i class=\"fas fa-arrow-right\"></i> Give to Kirkland.</td>"+"<td>Northern Plains</td>"+
        "</tr>"+
        "<tr>" +
        "<td >05</td>"+
        "<td >This is the last</td>"+
        "<td>Alan</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 6 of Dreamy Rod Goblin<br><i class=\"fas fa-arrow-right\"></i> Defeat 2 of Intimidating Axe Goblin</td>"+"<td>Cave of Gob Golin</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >06</td>"+
        "<td >Meet the troops head</td>"+
        "<td>Kirkland</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Capitan Benton<br><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Eternal Cerberus<br><i class=\"fas fa-arrow-right\"></i> Report to Capitan Benton</td>"+"<td>Cave of Gob Golin</td>"+
        "</tr>"+
        "</table>"+




        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest15'><b>1.5.North Defense Line - Mystic Ruined City</b></p><br>" +
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
        "<td rowspan='2'>Aristocrats are calling you</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Council Kendall.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Council Kendall</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Report to Lawton.</td><td>North Defense Line</td>"+
        "</tr>"+

        "<td>02</td>"+
        "<td >Come back when you're prepared</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Become Lv 28 or higher.</td>"+"<td>North Defense Line</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>We lost supply support!</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 5 of Stalwart Samurai Skeleton.<br><i class=\"fas fa-arrow-right\"></i> Report to Lawton.</td>"+"<td>North Defense Line</td>"+
        "</tr>"+

        "<td>04</td>"+
        "<td >I need a new type Certification</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line.</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Madelyn.<br> <i class=\"fas fa-arrow-right\"></i>Report to Lawton.</td>"+"<td>Northern Plains</td>"+
        "</tr>"+

        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Don't let your emotions ruin your life</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 2 Soft Teeth (Forgetful Wraith).<br><i class=\"fas fa-arrow-right\"></i> Give to Madelyn.</td>"+"<td>Mystic Ruined City</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Entering the unknown areas</td>"+
        "<td>Madelyn</td>"+"<td>Northern Plains</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Tireless Heart (Unhealthy Turtle)<br><i class=\"fas fa-arrow-right\"></i> Give to Madelyn.</td>"+"<td>Mystic Ruined City</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>07</td>"+
        "<td rowspan='3'>Here's what I promised</td>"+
        "<td>Madelyn</td>"+"<td>Northern Plains</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Lawton.</td>"+"<td>North Defense Line</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Lawton</td><td>North Defense Line</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Capitan Benton.</td><td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Capitan Benton</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>Chase that Baronage!</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Pursuit Baron Godrich.</td>"+"<td>Mystic Ruined City</td>"+
        "</tr>"+
        "<tr><td>Baron Godrich</td><td>Mystic Ruined City</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Maya.</td><td>Mystic Ruined City</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>09</td>"+
        "<td rowspan='3'>Place this to Morris gramp's grave</td>"+
        "<td>Maya</td>"+"<td>Mystic Ruined City</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Visit Morris' grave.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Morris's Grave</td><td>Ordo Village</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Travis.</td><td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Travis</td><td>Ordo Village</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<td rowspan='2'>10</td>"+
        "<td rowspan='2'>The men in the front line need you</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Capitan Benton.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr><td>Capitan Benton</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Lawton.</td><td>North Defense Line</td></tr>"+
        "<tr class='table-secondary'>"+
        "<td rowspan='2'>11</td>"+
        "<td rowspan='2'>Big for the troops if we get this</td>"+
        "<td>Lawton</td>"+"<td rowspan='2'>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 Daunting Master Rat<br><i class=\"fas fa-arrow-right\"></i> Talk to Lawton.</td>"+"<td>Mystic Ruined City</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Lawton</td><td><i class=\"fas fa-arrow-right\"></i> Report to Capitan Benton.</td><td>BWT - Military Area</td></tr>"+
        "</table>"+



        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest16'><b>1.6.Privileged Area - Perished Smithy - Tunnel 1</b></p><br>" +
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
        "<td >Looks like the Privileged district too</td>"+
        "<td>Capitan Benton</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Council Abington.<br><i class=\"fas fa-arrow-right\"></i> Talk to Gate Keeper.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >Ahead is the Privileged district</td>"+
        "<td>Gate Keeper</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Council Bergamino.</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>You'll be happy serving me</td>"+
        "<td>Council Bergamino</td>"+"<td rowspan='2'>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Vermilion Crystal (Forgetful Wraith)<br><i class=\"fas fa-arrow-right\"></i> Give to Council Bergamino.</td>"+"<td>Mystic Ruined City</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Council Bergamino</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td><td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Looks like the troops have a new problem</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Capitan Benton.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr><td>Capitan Benton</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Find Viggo.</td><td>Perished Smithy</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Insufficient power might kill you</td>"+
        "<td>Viggo</td>"+"<td>Perished Smithy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Become Lv 40 or higher.</td>"+"<td>Perished Smithy</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Why aren't they gone yet?</td>"+
        "<td>Viggo</td>"+"<td>Perished Smithy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Assault Demon Human Troop<br><i class=\"fas fa-arrow-right\"></i> Report to Viggo</td>"+"<td>Perished Smithy</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>Is anyone young left alive?</td>"+
        "<td>Viggo</td>"+"<td>Perished Smithy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find the survivors</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr>" +
        "<td>08</td>"+
        "<td>I fail as a pro losing my stuff</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 7 of Daring Shocker Lizard<br><i class=\"fas fa-arrow-right\"></i> Report to Armand</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>09</td>"+
        "<td rowspan='2'>There must be people still alive!</td>"+
        "<td>Armand</td>"+"<td rowspan='2'>Tunnel 1</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find the survivors</td>"+"<td rowspan='2'>Tunnel 1</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Rebecca</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 6 of Muscular Axe Goblin<br><i class=\"fas fa-arrow-right\"></i> Report to Armand</td></tr>"+
        "<tr>" +
        "<tr>" +
        "<td rowspan='2'>10</td>"+
        "<td rowspan='2'>I heard a voice!</td>"+
        "<td>Armand</td>"+"<td rowspan='2'>Tunnel 1</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find the survivors</td>"+"<td rowspan='2'>Tunnel 1</td>"+
        "</tr>"+
        "<tr><td>Carter</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Muscular Axe Goblin<br><i class=\"fas fa-arrow-right\"></i> Report to Armand</td></tr>"+
        "<tr>" +
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>The two need their nutrition</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Obnoxious Meat (Daring Shocker Lizard)<br><i class=\"fas fa-arrow-right\"></i> Give to Rebecca<br><i class=\"fas fa-arrow-right\"></i> Give to Carter</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Only one weapon left...</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Capitan Benton</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>13</td>"+
        "<td rowspan='2'>Ninjas are our allies</td>"+
        "<td>Capitan Benton</td>"+"<td rowspan='2'>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kirkland</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Kirkland</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Lawton</td><td>North Defense Line</td></tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td>That guy is getting loose!</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Bandwagon Goblin Cub<br><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Assault Demon Human Troop<br><i class=\"fas fa-arrow-right\"></i> Report to Lawton</td>"+"<td>Perished Smithy</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td>Ask what the young ones want</td>"+
        "<td>Lawton</td>"+"<td>	North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Armand</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<td rowspan='2'>16</td>"+
        "<td rowspan='2'>Strong ones are around here</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Impure Goblin Troll-Bro<br><i class=\"fas fa-arrow-right\"></i> Report to Armand</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr><td>Armand</td><td>Tunnel 1</td><td><i class=\"fas fa-arrow-right\"></i> Report to Lawton</td><td>North Defense Line</td></tr>"+
        "</table>"+



        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest17'><b>1.7.Large Wetland - Cave of Heavy Python</b></p><br>" +
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
        "<td >That's another issue!</td>"+
        "<td>Lawton</td>"+"<td>	North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 6 of Persistent Axolotl<br><i class=\"fas fa-arrow-right\"></i> Report to Maximilian</td>"+"<td>Large Wetland</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >Beat those creepy ones!</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 4 Clear Body Fluid (Persistent Axolotl)<br><i class=\"fas fa-arrow-right\"></i> Give to Maximilian</td>"+"<td>Large Wetland</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>I don't want to stay here!</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Irritable Manis<br><i class=\"fas fa-arrow-right\"></i> Report to Maximilian</td>"+"<td>Cave of Heavy Python</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Aristocrats orders are a must</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 3 Juicy Body Fluid (Sticky Axolotl)<br><i class=\"fas fa-arrow-right\"></i> Give to Lawton</td>"+"<td>Cave of Heavy Python</td>"+
        "</tr>"+
        "<tr><td>Lawton</td><td>North Defense Line</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td><td>BWT - Commercial Area</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>05</td>"+
        "<td rowspan='3'>How's the Privileged district lately?</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Council Bamber</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Bamber</td><td>BWT - Privileged Area</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td><td>BWT - Commercial Area</td></tr>"+
        "<tr  class='table-secondary'><td>Irma</td><td>BWT - Commercial Area</td><td><i class=\"fas fa-arrow-right\"></i> Find Mr. Galant' De</td><td>Large Wetland</td></tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >There's one giant one ahead!</td>"+
        "<td>Mr. Galant' De</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Giant Serpentray<br><i class=\"fas fa-arrow-right\"></i> Report to Mr. Galant' De</td>"+"<td>Cave of Heavy Python</td>"+
        "</tr>"+
       
        "</table>"+




        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest18'><b>1.8.Oil Field Site - Cave of Gross Oil</b></p><br>" +
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
        "<td rowspan='2'>Tell them you found this</td>"+
        "<td>Mr. Galant' De</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Council Bamber</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Bamber</td>"+"<td>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Irma</td>"+"<td>BWT - Commercial Area</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >You might lose your life fooling around</td>"+
        "<td>Guard</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Kirkland<br><i class=\"fas fa-arrow-right\"></i> Become Lv 43 or above</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Weird things going on underground</td>"+
        "<td>Kirkland</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Lawton</td>"+"<td>North Defense Line</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Lawton</td>"+"<td>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Gounod.</td><td>Oil Field Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>We need to let the gas out!</td>"+
        "<td>Gounod</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Solo Fake Cat<br><i class=\"fas fa-arrow-right\"></i> Report to Gounod</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Give it and leave!</td>"+
        "<td>Gounod</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Amelia</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >We should co-operate</td>"+
        "<td>Amelia</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 8 of Fearless Wolf<br><i class=\"fas fa-arrow-right\"></i> Report to Amelia</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>What is left here to eat?</td>"+
        "<td>Amelia</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 8 Sticky Body Fluid BETA (Mean Crawler)<br><i class=\"fas fa-arrow-right\"></i> Give to Amelia</td>"+"<td>Cave of Gross Oil</td>"+
        "</tr>"+
        "<tr>" +
        "<td>08</td>"+
        "<td>Can you look for an evil man?</td>"+
        "<td>Amelia</td>"+"<td>	Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Elbow</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Help me. My right arm hurts</td>"+
        "<td>Elbow</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Bold Fungus<br><i class=\"fas fa-arrow-right\"></i> Report to Elbow</td>"+"<td>Cave of Gross Oil</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Gramps you don't want to mess with...</td>"+
        "<td>Elbow</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 8 of Shy Araneus<br>Report to Elbow</td>"+"<td>Cave of Gross Oil</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>The type you don't want to go near	</td>"+
        "<td>Elbow</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Pure Yellow Body Fluid (Growing Pains Oil Chick)<br><i class=\"fas fa-arrow-right\"></i> Give to Amelia</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>12</td>"+
        "<td rowspan='2'>Important documents coming soon</td>"+
        "<td>Amelia</td>"+"<td rowspan='2'>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Fearless Wolf<br><i class=\"fas fa-arrow-right\"></i> Report to Amelia</td>"+"<td rowspan='2'>Oil Field Site</td>"+
        "</tr>"+
        "<tr><td>Amelia</td><td>Give to Gounod</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>First get that giant one!!</td>"+
        "<td>Gounod</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Gross Eater Heteropoda<br><i class=\"fas fa-arrow-right\"></i> Report to Gounod</td>"+"<td>Cave of Gross Oil</td>"+
        "</tr>"+
        "</table>"+





        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest19'><b>1.9.Sewerage 3 - Kasuba Water Plant 3</b></p><br>" +
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
        "<td rowspan='3'>Deliver this sick order</td>"+
        "<td>Gounod</td>"+"<td>Oil Field Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Lawton</td>"+"<td>North Defense Line</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Lawton</td><td>North Defense Line</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Capitan Benton</td><td>BWT - Military Area</td></tr>"+
        "<tr class='table-secondary'><td>Capitan Benton</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Irma</td><td>BWT - Commercial Area</td></tr>"+
        "<tr>" +
        "<td rowspan='3'>02</td>"+
        "<td rowspan='3'>She might be hiding close</td>"+
        "<td>Guard</td>"+"<td>BWT - Commercial Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Gemma</td>"+"<td rowspan='3'>Outer Wall District</td>"+
        "</tr>"+
        "<tr><td>Gemma</td><td rowspan='2'>Outer Wall District</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Jessica</td></tr>"+
        "<tr><td>Jessica</td><td><i class=\"fas fa-arrow-right\"></i> Find Irma</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td scope='row' rowspan='3'>03</td>"+
        "<td rowspan='3'>Troops seem to be getting busy</td>"+
        "<td>Irma</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kirkland</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Kirkland</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Maximilian</td><td>Large Wetland</td></tr>"+
        "<tr class='table-secondary'><td>Maximilian</td><td>Large Wetland</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Poitier</td><td>Sewerage 3</td></tr>"+
        "<tr>" +
        "<tr>" +
        "<td >04</td>"+
        "<td>You got the wrong target!</td>"+
        "<td>Poiter</td>"+"<td>Sewerage 3</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 18 of Untainted Undead Wolf<br><i class=\"fas fa-arrow-right\"></i> Report to Poitier.</td>"+"<td>Sewerage 3</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>05</td>"+
        "<td rowspan='2'>My men are getting in my way</td>"+
        "<td >Poitier</td>"+"<td rowspan='2'>Sewerage 3</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Egorova</td>"+"<td rowspan='2'>Sewerage 3</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Egorova</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Unpopular Samurai Skeleton<br><i class=\"fas fa-arrow-right\"></i> Report to Egorova</td></tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td rowspan='2'>He should be thirsty and starving</td>"+
        "<td rowspan='2'>Egorova</td>"+"<td rowspan='2'>Sewerage 3</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Delinquent Spirit<br><i class=\"fas fa-arrow-right\"></i> Report to Villemain</td>"+"<td rowspan='2'>Sewerage 3</td>"+
        "</tr>"+
        "<tr><td>Villemain</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Delinquent Spirit<br>Report to Villemain</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>Keep this a secret</td>"+
        "<td>Villemain</td>"+"<td>Sewerage 3</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 8 Festered Leather (Untainted Undead Wolf)<br><i class=\"fas fa-arrow-right\"></i> Get 5 Sticky Ectoplasm (Delinquent Spirit)<br><i class=\"fas fa-arrow-right\"></i> Give to Maximilian</td>"+"<td>Sewerage 3</td>"+
        "</tr>"+
        "<tr>" +
        "<td>08</td>"+
        "<td>It's really his job you know</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td>Defeat 25 of Lonely Fake Cat<br><i class=\"fas fa-arrow-right\"></i> Report to Maximilian</td>"+"<td>Kasuba Water Plant 3</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>09</td>"+
        "<td rowspan='2'>Personal favor</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find a Corpse</td>"+"<td>Kasuba Water Plant 3</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>**Grave** (Ngôi mộ)</td><td>Kasuba Water Plant 3</td><td><i class=\"fas fa-arrow-right\"></i> Get 1 Andre Romero's Diary 1/1<br><i class=\"fas fa-arrow-right\"></i> Give to Maximilian</td><td>Large Wetland</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>10</td>"+
        "<td rowspan='2'>I finally found it!</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Poitier</td>"+"<td>Sewerage 3</td>"+
        "</tr>"+
        "<tr><td>Poitier</td><td>Sewerage 3</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Loyal Shogun Skeleton<br><i class=\"fas fa-arrow-right\"></i> Report to Poitier</td><td>Sewerage 3</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>11</td>"+
        "<td rowspan='2'>You just finished your mission</td>"+
        "<td>Poitier</td>"+"<td>Sewerage 3</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Maximilian</td>"+"<td>Large Wetland</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Maximilian</td><td>Large Wetland</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 25 of Show Off Demon Troop<br><i class=\"fas fa-arrow-right\"></i> Report to Maximilian</td><td>Kasuba Water Plant 3</td></tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>More help has come</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kirkland</td>"+"<td>Kasuba Water Plant 3</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>Gotta make up your mind!</td>"+
        "<td>Kirkland</td>"+"<td>Kasuba Water Plant 3</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Kasbah<br>Report to Kirkland</td>"+"<td>Kasuba Water Plant 3</td>"+
        "</tr>"+
        "</table>"+



        "<br>"+
        "<br>"+
        "<br>"+
        "<p class='titleMidtest' id='mainquestlv50to70'>Level 50- 70</p><br>" +
        "<p  id='mainquest21'><b>2.1.North Fortress - War Quest</b></p><br>" +
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
        "<td rowspan='2'>The protest note inside the report</td>"+
        "<td>Kirkland</td>"+"<td>Ordo Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Shade.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Maximilian</td><td>Large Wetland</td><td><i class=\"fas fa-arrow-right\"></i> Give to Capitan Benton</td><td>BWT - Military Area</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >That was a long mission...</td>"+
        "<td>Capitan Benton</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma.</td>"+"<td>Outer Wall District</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Seems like the demons are increasing!</td>"+
        "<td>Irma</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kirkland</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Kirkland</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Lawton</td><td>North Defense Line</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Dirty mouth but arms you can trust!</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Commander Gaston</td>"+"<td>North Fortress Path</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >First shipment FIRE!</td>"+
        "<td>Commander Gaston</td>"+"<td>North Fortress Path</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Arrogant Demon Bird Troop<br><i class=\"fas fa-arrow-right\"></i> Report to Commander Gaston</td>"+"<td>North Fortress Path</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >It stinks</td>"+
        "<td>Commander Gaston</td>"+"<td>North Fortress Path</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Germophobic Slime<br><i class=\"fas fa-arrow-right\"></i> Report to Commander Gaston</td>"+"<td>North Fortress Path</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>Join with purveyance unit!</td>"+
        "<td>Commander Gaston</td>"+"<td rowspan='2'>North Fortress Path</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Egorova</td>"+"<td rowspan='2'>North Fortress Path</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td><i class=\"fas fa-arrow-right\"></i> Egorova</td><td>Get 8 Tasteless Meat<br><i class=\"fas fa-arrow-right\"></i>Give to Egorova</td></tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td>I'm done after this!</td>"+
        "<td>Commander Gaston</td>"+"<td>North Fortress Path</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Drunk Walking Lich<br><i class=\"fas fa-arrow-right\"></i> Report to Commander Gaston<br><i class=\"fas fa-arrow-right\"></i> Talk to Potier</td>"+"<td>North Fortress Path</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>I'm gonna go wild!</td>"+
        "<td>Potier</td>"+"<td>North Fortress Path</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Complete War Mission<br><i class=\"fas fa-arrow-right\"></i> Report to Commander Gaston<br><i class=\"fas fa-arrow-right\"></i> Report to Lawton</td>"+"<td>North Fortress Path,<br>North Defense Line</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Report the triumph!</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Capitan Benton</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>11</td>"+
        "<td rowspan='2'>Something is under this call</td>"+
        "<td>Capitan Benton</td>"+"<td>BWT - Military Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td>"+"<td>Outer Wall District</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Irma</td><td>Outer Wall District</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Gate Keeper</td><td>BWT - Privileged Area</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>12</td>"+
        "<td rowspan='2'>There's a weird guy...</td>"+
        "<td>Gate Keeper</td>"+"<td rowspan='2'>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Duke Weiser<br>Talk to Zukkelol</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr><td>Zukkelol</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Capitan Benton</td><td>BWT - Military Area</td></tr>"+
        "</table>"+



        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest22'><b>2.2.Old Rural Area - Yamato Village - Rural Cave</b></p><br>" +
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
        "<td rowspan='2'>Co-op request from the hider</td>"+
        "<td>Irma</td>"+"<td>Outer Wall District</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Pursuit where Joe went</td>"+"<td>Large Wetland</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Bruno</td><td>Large Wetland</td><td><i class=\"fas fa-arrow-right\"></i> Get 5 Unidentified Crystal (Show Off Demon Troop)<br><i class=\"fas fa-arrow-right\"></i> Give to Bruno</td><td>Kasuba Water Plant 3</td></tr>"+
        "<tr>" +
        "<td rowspan='3'>02</td>"+
        "<td rowspan='3'>Start ahead going on the boat?</td>"+
        "<td>Bruno</td>"+"<td>Large Wetland</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Pursuit where Joe went</td>"+"<td>Old Rural Area</td>"+
        "</tr>"+
        "<tr><td>Corpse of Mysterious Old Man</td><td rowspan='2'>Old Rural Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Gino</td><td>Old Rural Area</td></tr>"+
        "<tr><td>Gino</td><td><i class=\"fas fa-arrow-right\"></i> Head to Yamato Village</td><td>Highway</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Welcome to Yamato Village!</td>"+
        "<td>Gate Keeper</td>"+"<td>Highway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Edgar<br><i class=\"fas fa-arrow-right\"></i> Talk to Irma</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>How about you introduce yourself?</td>"+
        "<td>Irma</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>05</td>"+
        "<td rowspan='2'>Worried about a girl...</td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Konatsu</td>"+"<td rowspan='2'>Old Rural Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Konatsu</td><td><i class=\"fas fa-arrow-right\"></i> Old Rural Area</td><td><i class=\"fas fa-arrow-right\"></i> Get 5 Dry Nut (Drought Killer Plant)<br>Give to Konatsu</td></tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Am i asking a lot?</td>"+
        "<td>Konatsu</td>"+"<td>Old Rural Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Thin Feathers (Carnivorous Dragonfly)<br><i class=\"fas fa-arrow-right\"></i> Give to Konatsu</td>"+"<td>Old Rural Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>07</td>"+
        "<td>Run for my life</td>"+
        "<td>Konatsu</td>"+"<td>Old Rural Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Frantic Scarecrow<br><i class=\"fas fa-arrow-right\"></i> Talk to Konatsu</td>"+"<td>Old Rural Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td>Back to the cage...</td>"+
        "<td>Konatsu</td>"+"<td>Old Rural Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Drought Killer Plant<br><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Lanky Mohawk Fox<br><i class=\"fas fa-arrow-right\"></i> Talk to Konatsu</td>"+"<td>Old Rural Area,Highway</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Tell him I'm fine</td>"+
        "<td>Konatsu</td>"+"<td>Highway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Saburo</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>He can't fight</td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Yahee</td>"+"<td>Highway</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >You're too kind!</td>"+
        "<td>Yahee</td>"+"<td>Highway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 6 Stiff Leaf (Cardiotonic Woodman)<br><i class=\"fas fa-arrow-right\"></i> Give to Yahee</td>"+"<td>Highway</td>"+
        "</tr>"+
        "<tr>" +
        "<td>12</td>"+
        "<td>What's he saying?</td>"+
        "<td>Yahee</td>"+"<td>Highway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Curled Hair (Misanthropic Kappa)<br><i class=\"fas fa-arrow-right\"></i> Give to Yahee</td>"+"<td>Highway</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>Get that Namahage!!!</td>"+
        "<td>Yahee</td>"+"<td>Highway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Dull Knife<br>Get 3 Flip Flap Phone (Irritable Namahage)<br><i class=\"fas fa-arrow-right\"></i> Give to Yahee</td>"+"<td>North Fortress Path,<br>Highway</td>"+
        "</tr>"+
        "<tr>"+
        "<td rowspan='3'>14</td>"+
        "<td rowspan='3'>One after another...</td>"+
        "<td>Yahee</td>"+"<td>Highway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr><td>Saburo</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Nobunosuke</td><td rowspan='2'>Highway Cave</td></tr>"+
        "<tr><td>Nobunosuke</td><td>Highway Cave</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Playful Neodorippe</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>15</td>"+
        "<td rowspan='2'>Do they exist?</td>"+
        "<td>Nobunosuke</td>"+"<td>Highway Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kikunosuke</td>"+"<td rowspan='2'>Rural Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Kikunosuke</td><td>Rural Cave</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Clownish Spirit<br><i class=\"fas fa-arrow-right\"></i> Report to Kikunosuke</td></tr>"+
        "<tr>"+
        "<td >16</td>"+
        "<td>I shouldn't be sleeping...</td>"+
        "<td>Kikunosuke</td>"+"<td>Rural Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Half-boiled Slime<br><i class=\"fas fa-arrow-right\"></i> Report to Kikunosuke</td>"+"<td>Rural Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >17</td>"+
        "<td>I see big nest...</td>"+
        "<td>Kikunosuke</td>"+"<td>	Rural Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Boss Bat<br><i class=\"fas fa-arrow-right\"></i> Report to Kikunosuke</td>"+"<td>Rural Cave</td>"+
        "</tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest23'><b>2.3.Canyon of Stone - Mt. O Entrance - Halfway - Near Top</b></p><br>" +
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
        "<td rowspan='2'>I'll come home alive!</td>"+
        "<td>Kikunosuke</td>"+"<td>Rural Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td rowspan='2'>Yamato Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Saburo</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>02</td>"+
        "<td rowspan='2'>Corpse belongs to</td>"+
        "<td>Irma</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Gino</td>"+"<td>Highway</td>"+
        "</tr>"+
        "<tr><td>Gino</td><td>Highway</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Luckmann</td><td>Canyon of Stone</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Cooperating the investigation</td>"+
        "<td>Luckmann</td>"+"<td>Canyon of Stone</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Hay fevered Ent<br><i class=\"fas fa-arrow-right\"></i> Report to Luckmann</td>"+"<td>Canyon of Stone</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>This is strange...</td>"+
        "<td>Luckmann</td>"+"<td>Canyon of Stone</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Myalgic Gargoyle<br><i class=\"fas fa-arrow-right\"></i> Report to Luckmann</td>"+"<td>Canyon of Stone</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Only one evidence...</td>"+
        "<td>Luckmann</td>"+"<td>Canyon of Stone</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Ruddy Dragonfly<br><i class=\"fas fa-arrow-right\"></i> Report to Luckmann</td>"+"<td>Canyon of Stone</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Runaway ninja</td>"+
        "<td>Luckmann</td>"+"<td>Canyon of Stone</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Saburo</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>07</td>"+
        "<td>Lost scouts</td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Zevon</td>"+"<td>Canyon of Stone</td>"+
        "</tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td>Let's go deep</td>"+
        "<td>Zevon</td>"+"<td>Canyon of Stone</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Muddy Molestar<br><i class=\"fas fa-arrow-right\"></i> Report to Zevon</td>"+"<td>Mt O Entrance</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Who's watching us?</td>"+
        "<td>Zevon</td>"+"<td>Mt O Entrance</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Chic Fake Cat<br><i class=\"fas fa-arrow-right\"></i> Report to Zevon</td>"+"<td>Mt O Entrance</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>It was no imagination</td>"+
        "<td>Zevon</td>"+"<td>Mt O Entrance</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Tengu Vanguard Rank 5<br><i class=\"fas fa-arrow-right\"></i> Report to Zevon</td>"+"<td>Mt O Entrance</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >Still long way to go</td>"+
        "<td>Zevon</td>"+"<td>Mt O Entrance</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Plump Araneus<br><i class=\"fas fa-arrow-right\"></i> Report to Zevon</td>"+"<td>Mt O Halfway</td>"+
        "</tr>"+
        "<tr>" +
        "<td>12</td>"+
        "<td>Lots of runaways...</td>"+
        "<td>Zevon</td>"+"<td>Mt O Halfway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Tengu Vanguard Rank 4<br><i class=\"fas fa-arrow-right\"></i> Report to Zevon</td>"+"<td>Mt O Halfway</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>I'm hurt but we must go on</td>"+
        "<td>Zevon</td>"+"<td>Mt O Halfway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Tengu Gunner Rank 4<br><i class=\"fas fa-arrow-right\"></i> Report to Zevon</td>"+"<td>Mt O Halfway</td>"+
        "</tr>"+
        "<tr>"+
        "<td>14</td>"+
        "<td>The camp finally!</td>"+
        "<td>Zevon</td>"+"<td>Mt O Halfway</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kayman</td>"+"<td>Camp</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>15</td>"+
        "<td>Kill them all!</td>"+
        "<td>Kayman</td>"+"<td>Camp</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Vanguard Rank 3<br><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Gunner Rank 3<br><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Tengu Caster Rank 3</td>"+"<td >Mt O Near Top</td>"+
        "</tr>"+
        "<tr>"+
        "<td >16</td>"+
        "<td>Run for your life or...</td>"+
        "<td>Moribund Tengu clan</td>"+"<td>Mt O Near Top</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Tengu Squad Leader<br><i class=\"fas fa-arrow-right\"></i>Report about the Tengu Clan</td>"+"<td>Mt O Near Top</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >17</td>"+
        "<td>Remaining mystery</td>"+
        "<td>Maya</td>"+"<td>Camp</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kayman</td>"+"<td>Camp</td>"+
        "</tr>"+
        "<tr>" +
        "<td >18</td>"+
        "<td>New Ability<br><i class=\"fas fa-star\"></i><i>Bạn sẽ học được passive skill Water Walk</i></td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Edgar</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest24'><b>2.4.Ancient Ruins - Catacombe B1F–B2F</b></p><br>" +
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
        "<td rowspan='2'>Important Mission</td>"+
        "<td>Edgar</td>"+"<td rowspan='2'>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Irma</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Irma</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Kanakuri Puppet</td><td>Ancient Ruins</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>02</td>"+
        "<td rowspan='2'>Broken doll</td>"+
        "<td>Kanakuri Puppet</td>"+"<td>Ancient Ruins</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Travis</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr><td>Travis</td><td>Old Wood Forest</td><td><i class=\"fas fa-arrow-right\"></i> Give to Kanakuri Puppet</td><td>Ancient Ruins</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Abandoned parts</td>"+
        "<td>Kanakuri Puppet</td>"+"<td>Ancient Ruins</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 3 Old Wiring Cording (Tense Manis)<br><i class=\"fas fa-arrow-right\"></i> Give to Kanakuri Puppet</td>"+"<td>Ancient Ruins</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Littering thief</td>"+
        "<td>Kanakuri Puppet</td>"+"<td>Ancient Ruins</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 6 Compact Motor (Lost Weight Turtle)<br><i class=\"fas fa-arrow-right\"></i> Give to Kanakuri Puppet</td>"+"<td>Ancient Ruins</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Finally inside...</td>"+
        "<td>Kanakuri Puppet</td>"+"<td>Ancient Ruins</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Enter the Ruins</td>"+"<td>Catacombe B1F</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >A starved thief</td>"+
        "<td>Gonzales</td>"+"<td>Catacombe B1F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Warlike Kusarigama Skeleton<br>Defeat 10 of Fierce Soldier Skeleton<br><i class=\"fas fa-arrow-right\"></i> Report to Gonzales</td>"+"<td>Catacombe B1F</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>Stuck for over 10 days!!</td>"+
        "<td>Gonzales</td>"+"<td>Catacombe B1F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Proceed to the inners of the Ruins</td>"+"<td rowspan='2'>Catacombe B2F</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Rodriguez</td><td>Catacombe B2F</td><td><i class=\"fas fa-arrow-right\"></i> Proceed to the inners of the Ruins<br><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Barbaric Bowyer Skeleton<br>Catacombe B2F</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>I quit being greedy...</td>"+
        "<td>Rodriguez</td>"+"<td rowspan='2'>Catacombe B2F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Proceed to the inners of the Ruins</td>"+"<td rowspan='2'>Catacombe B2F</td>"+
        "</tr>"+
        "<tr><td>Dominguez</td><td><i class=\"fas fa-arrow-right\"></i> Proceed to the inners of the Ruins<br><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Vigorous Mt Monk Skeleton<br><i class=\"fas fa-arrow-right\"></i>Report to Rodriguez</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Path to the treasure</td>"+
        "<td>Dominguez</td>"+"<td>Catacombe B2F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Proceed to the inners of the Ruins</td>"+"<td>Catacombe B2F</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Wake me up!</td>"+
        "<td>Moleran</td>"+"<td>Catacombe B2F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Kyubi Sakon<br><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Kyubi Ukon<br><i class=\"fas fa-arrow-right\"></i> Report to Moleran</td>"+"<td>Catacombe B1F</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >I know that person...</td>"+
        "<td>Moleran</td>"+"<td>Catacombe B1F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Joe</td>"+"<td>Catacombe B1F</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>12</td>"+
        "<td rowspan='2'>We're fine</td>"+
        "<td>Joe</td>"+"<td>Catacombe B1F</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Edgar</td>"+"<td rowspan='2'>Yamato Village</td>"+
        "</tr>"+
        "<tr><td>Edgar</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td></tr>"+
        "</table>"+

        
        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest25'><b>2.5.Mt O Near Top - Side Road - Animal Trail</b></p><br>" +
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
        "<td rowspan='2'>Tengu Clan annihilation order</td>"+
        "<td>Irma</td>"+"<td rowspan='2'>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Saburo</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Kayman</td><td>Camp</td></tr>"+
        "<tr>" +
        "<td >02</td>"+
        "<td>Kayman</td>"+
        "<td>Camp</td>"+"<td>Ancient Ruins</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 7 of Tengu Gunner Rank 3<br><i class=\"fas fa-arrow-right\"></i> Join with Chika<br><i class=\"fas fa-arrow-right\"></i> Sneak inside</td>"+"<td>Mt O Near Top, Mt O Side Road</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Going further</td>"+
        "<td>Chika</td>"+"<td>Mt O Side Road</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Tengu Caster Rank 2<br><i class=\"fas fa-arrow-right\"></i> Report to Chika</td>"+"<td>	Mt O Side Road</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>What are they carrying?</td>"+
        "<td>Chika</td>"+"<td>Mt O Side Road</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Tengu Vanguard Rank 2<br><i class=\"fas fa-arrow-right\"></i> Report to Chika</td>"+"<td>Mt O Side Road, Mt O Animal Trail</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Base's objective</td>"+
        "<td>Chika</td>"+"<td>Mt O Animal Trail</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Tengu Gunner Rank 2<br><i class=\"fas fa-arrow-right\"></i> Report to Chika</td>"+"<td>Mt O Side Road</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Destroy the base!</td>"+
        "<td>Chika</td>"+"<td>Mt O Animal Trail</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Tengu Faux Slime<br><i class=\"fas fa-arrow-right\"></i> Report to Shade</td>"+"<td>Catacombe B1F</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>Potential smuggling</td>"+
        "<td>Shade</td>"+"<td>	Mt O Side Road</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Kayman</td>"+"<td>Camp</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Kayman</td><td>Camp</td><td><i class=\"fas fa-arrow-right\"></i> Report to Saburo<td>Yamato Village</td></tr>"+
        
        "</table>"+


        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest26'><b>2.6.Warship ISL Resident - Depot - Main</b></p><br>" +
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
        "<td rowspan='2'>Smuggler spotted</td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Research the port<br>Nói chuyện với npc Bruno để có thể lên hòn đảo tiếp tục quest, sẽ tốn 50.000 Gold cho chuyến đi.</td>"+"<td rowspan='2'>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Harper</td><td><i class=\"fas fa-arrow-right\"></i> Warship ISL Resident</td><td><i class=\"fas fa-arrow-right\"></i> Get 3 of Burned Motor (Rusted Mech Lizard)<br><i class=\"fas fa-arrow-right\"></i> Give to Harper</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >An extraordinary tramp</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Night Visioned Eyeball (Half Modded Mech Axolotl)<br><i class=\"fas fa-arrow-right\"></i> Give to Harper</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Business taken over!</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Out Of Oil Mech Wolf<br><i class=\"fas fa-arrow-right\"></i> Report to Harper</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Find this person</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Uncoated Mech Humming Bird<br><i class=\"fas fa-arrow-right\"></i> Find an aristocrat</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>05</td>"+
        "<td rowspan='2'>Death of an aristrocrat</td>"+
        "<td>Harper</td>"+"<td>	Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Research the aristocrat</td>"+"<td>	BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Kendall</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Council Bergamino</td><td>BWT - Privileged Area</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>06</td>"+
        "<td rowspan='2'>Not easy to be big</td>"+
        "<td>Council Bergamino</td>"+"<td>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td rowspan='2'>Yamato Village</td>"+
        "</tr>"+
        "<tr><td>Saburo</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Edgar</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>It's go time!</td>"+
        "<td>Edgar</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Komekichi</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Komekichi</td><td>Warship ISL Resident</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Full Metal Mech Wolf<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td><td>Warship ISL Depot</td></tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td '>Contact undercover ninjas</td>"+
        "<td>Tengu Clan: 1st Class Warrior</td>"+"<td >Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Vanguard Rank 1<br><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Caster Rank 1<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Go further</td>"+
        "<td>Tengu Clan: 1st Class Rifleman</td>"+"<td>Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Tengu Gunner Rank 1<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>The boss is near...</td>"+
        "<td>Tengu Clan: 1st Class Sorcerer</td>"+"<td>Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Tengu Woman Chief</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>11</td>"+
        "<td rowspan='3'>Finish it!</td>"+
        "<td>Evra</td>"+"<td>Warship ISL Main</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report about the Tengu Clan</td>"+"<td>Warship ISL Depot</td>"+
        "<tr class='table-secondary'><td>Maya</td><td>Warship ISL Depot</td><td><i class=\"fas fa-arrow-right\"></i> Report to Edgar</td><td rowspan='2'>Yamato Village</td></tr>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Edgar</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td></tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest27'><b>2.7.Highway Site - Old Industrial DIST - Chaos of the Dead - Grotto</b></p><br>" +
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
        "<td >I'll give you work</td>"+
        "<td>Irma</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Research the Highway Site</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td >02</td>"+
        "<td >Spirit. It's important</td>"+
        "<td>Betty</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Defeat 15 of Dignified Shocker Lizard<br><i class=\"fas fa-arrow-right\"></i>Report to Betty</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Relationships are the most important</td>"+
        "<td>Betty</td>"+"<td rowspan='2'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Give to Gillian</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Gillian</td><td><i class=\"fas fa-arrow-right\"></i>Report to Betty</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Shows in your expression</td>"+
        "<td>Betty</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Talk to Claude</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Claude</td><td>Highway Site</td><td><i class=\"fas fa-arrow-right\"></i> Get 8 Watery Nut (Abating Cactus)<br><i class=\"fas fa-arrow-right\"></i> Give to Claude</td><td>Highway Site</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Pride leads to death</td>"+
        "<td>Claude</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Gristle Meat (Dignified Shocker Lizard)<br><i class=\"fas fa-arrow-right\"></i> Give to Benjamin</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>06</td>"+
        "<td rowspan='2'>Missions are so harsh</td>"+
        "<td rowspan='2'>Benjamin</td>"+"<td rowspan='2'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Belonephobic Scorpion<br><i class=\"fas fa-arrow-right\"></i> Talk to Benjamin</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr><td><i class=\"fas fa-arrow-right\"></i> Report to Gillian</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>Mission official is a neat freak</td>"+
        "<td>Gillian</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Claude</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>Let's get to it!</td>"+
        "<td>Claude</td>"+"<td rowspan='2'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Tickle Nut (Abating Cactus)<br><i class=\"fas fa-arrow-right\"></i> Talk to Gillian</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Gillian</td><td><i class=\"fas fa-arrow-right\"></i> Report to Claude</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>2.5hrs until full power</td>"+
        "<td>Claude</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Make the wife at ease (Beloved Anita)<br><i class=\"fas fa-arrow-right\"></i> Report to Claude</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='3'>10</td>"+
        "<td rowspan='3'>Sometimes you need a rest</td>"+
        "<td>Claude</td>"+"<td rowspan='3'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Nancy</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Nancy</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Benjamin</td></tr>"+
        "<tr><td>Benjamin</td><td><i class=\"fas fa-arrow-right\"></i> Find Jimmy</td><td>Old Industrial DIST</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >Tomorrow's the day!</td>"+
        "<td>Tim</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Carrion Eating Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Tim</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Need to leave early...</td>"+
        "<td>Tim</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Lifeblood Sucker Zombie</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td >Wanna be big!</td>"+
        "<td>Albert</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Sorrow Private Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td >Get them out!</td>"+
        "<td>Eloise</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Smoggy Golem<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td >Heartless aristocrats</td>"+
        "<td>Eloise</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 3 Deformed Capsule (Lifeblood Sucker Zombie)<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='3'>16</td>"+
        "<td rowspan='3'>Undead man...</td>"+
        "<td>Eloise</td>"+"<td rowspan='2'>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Tim</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr><td>Tim</td><td><i class=\"fas fa-arrow-right\"></i> Find the medicine recipe</td><td>Chaos of the Dead</td></tr>"+
        "<tr><td>Tim's Boss Zombie</td><td>Chaos of the Dead</td><td><i class=\"fas fa-arrow-right\"></i> Find further of the medicine reciped</td><td>Chaos of the Dead</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >17</td>"+
        "<td >Tons of zombies</td>"+
        "<td>Old Man Virgin</td>"+"<td>Chaos of the Dead</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td>"+"<td>Chaos of the Dead</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>18</td>"+
        "<td rowspan='2'>Zombie land</td>"+
        "<td>Zombie Laborer</td>"+"<td rowspan='2'>Chaos of the Dead</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search further the inners of the cave<br><i class=\"fas fa-arrow-right\"></i> Report to Old Man Virgin</td>"+"<td>Chaos of the Dead</td>"+
        "</tr>"+
        "<tr><td>Old Man Virgin</td><td><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td><td>Old Industrial DIST</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >19</td>"+
        "<td >I'll guide you</td>"+
        "<td>Eloise</td>"+"<td>	Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr>" +
        "<td >20</td>"+
        "<td >They're annoying!</td>"+
        "<td>Eloise</td>"+"<td>	Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 16 of Stealth Vulture Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >21</td>"+
        "<td >Let's go further</td>"+
        "<td>Eloise</td>"+"<td>Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 18 of Looming Manis Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr>" +
        "<td >22</td>"+
        "<td >Let's stop searching</td>"+
        "<td>Eloise</td>"+"<td>	Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >23</td>"+
        "<td >R...U...N</td>"+
        "<td>Zombie Soldier</td>"+"<td>	Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>24</td>"+
        "<td rowspan='2'>Look for him for my sister</td>"+
        "<td>Lucy</td>"+"<td rowspan='2'>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find Jimmy</td>"+"<td >	Old Industrial DIST</td>"+
        "</tr>"+
        "<tr><td>Zombie Jimmy</td><td><i class=\"fas fa-arrow-right\"></i> Report to Nancy</td><td>	Highway Site</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >25</td>"+
        "<td >She didn't return</td>"+
        "<td>Nancy</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >26</td>"+
        "<td >I'll see you there</td>"+
        "<td>	Irma</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Irma</td>"+"<td >Motel Underground</td>"+
        "</tr>"+
        "</table>"+

        
        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest26'><b>2.6.Warship ISL Resident - Depot - Main</b></p><br>" +
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
        "<td rowspan='2'>Smuggler spotted</td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Research the port<br>Nói chuyện với npc Bruno để có thể lên hòn đảo tiếp tục quest, sẽ tốn 50.000 Gold cho chuyến đi.</td>"+"<td rowspan='2'>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Harper</td><td>Warship ISL Resident</td><td><i class=\"fas fa-arrow-right\"></i> Get 3 of Burned Motor (Rusted Mech Lizard)<br><i class=\"fas fa-arrow-right\"></i> Give to Harper</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >An extraordinary tramp</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Night Visioned Eyeball (Half Modded Mech Axolotl)<br><i class=\"fas fa-arrow-right\"></i> Give to Harper</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Business taken over!</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Out Of Oil Mech Wolf<br><i class=\"fas fa-arrow-right\"></i> Report to Harper</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Find this person</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Uncoated Mech Humming Bird<br><i class=\"fas fa-arrow-right\"></i> Find an aristocrat</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>05</td>"+
        "<td rowspan='2'>Death of an aristrocrat</td>"+
        "<td>Harper</td>"+"<td>	Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Research the aristocrat</td>"+"<td>	BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Kendall</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Council Bergamino</td><td>BWT - Privileged Area</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>06</td>"+
        "<td rowspan='2'>Not easy to be big</td>"+
        "<td>Council Bergamino</td>"+"<td>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td rowspan='2'>Yamato Village</td>"+
        "</tr>"+
        "<tr><td>Saburo</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Edgar</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>It's go time!</td>"+
        "<td>Edgar</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Komekichi</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Komekichi</td><td>Warship ISL Resident</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Full Metal Mech Wolf<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td><td>Warship ISL Depot</td></tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td '>Contact undercover ninjas</td>"+
        "<td>Tengu Clan: 1st Class Warrior</td>"+"<td >Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Vanguard Rank 1<br><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Caster Rank 1<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Go further</td>"+
        "<td>Tengu Clan: 1st Class Rifleman</td>"+"<td>Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Tengu Gunner Rank 1<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>The boss is near...</td>"+
        "<td>Tengu Clan: 1st Class Sorcerer</td>"+"<td>Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Tengu Woman Chief</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>11</td>"+
        "<td rowspan='3'>Finish it!</td>"+
        "<td>Evra</td>"+"<td>Warship ISL Main</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report about the Tengu Clan</td>"+"<td>Warship ISL Depot</td>"+
        "<tr class='table-secondary'><td>Maya</td><td>Warship ISL Depot</td><td><i class=\"fas fa-arrow-right\"></i> Report to Edgar</td><td rowspan='2'>Yamato Village</td></tr>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Edgar</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td></tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest28'><b>2.8.Thick Fog Forest - Grave of Oblivion - Pitch Black Cave</b></p><br>" +
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
        "<td rowspan='3'>Be careful in the forest</td>"+
        "<td>Irma</td>"+"<td>Motel Underground</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the town</td>"+"<td rowspan='3'>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Martina</td><td rowspan='2'>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Cayce</td></tr>"+
        "<tr class='table-secondary'><td>Cayce</td><td><i class=\"fas fa-arrow-right\"></i> Report to H-John</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>02</td>"+
        "<td rowspan='2'>We owe him a debt</td>"+
        "<td>H-John</td>"+"<td rowspan='2'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Roberto</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr><td>Roberto</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Dismal Axolotl<br><i class=\"fas fa-arrow-right\"></i> Report to Roberto</td><td>Thick Fog Forest</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Smoked Meat</td>"+
        "<td>Roberto</td>"+"<td rowspan='2'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Rydia</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Rydia</td><td><i class=\"fas fa-arrow-right\"></i> Get 8 Meat with Small Bones (Run and Hide Bat)<br><i class=\"fas fa-arrow-right\"></i> Give to Rydia</td><td>Thick Fog Forest</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>I was in the dark</td>"+
        "<td>Rydia</td>"+"<td rowspan='2'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Libor</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr><td>Libor</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Ulcerated Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Libor</td><td>Thick Fog Forest</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>05</td>"+
        "<td rowspan='3'>A Strange Man</td>"+
        "<td>Libor</td>"+"<td rowspan='3'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td>"+"<td rowspan='2'>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>H-John</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Roberto</td></tr>"+
        "<tr class='table-secondary'><td>Roberto</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Grave Guard</td><td>Grave of Oblivion</td></tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >I'm thirsty</td>"+
        "<td >Grave Guard</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 10 Blended Blood (Hypoxia King Leech)<br><i class=\"fas fa-arrow-right\"></i> Give to Grave Guard</td>"+"<td>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>He has two-faces</td>"+
        "<td>Grave Guard</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Roberto</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td >No unpleasant story</td>"+
        "<td>Roberto</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Lumpy Meat (Ego driven Axe Goblin)<br><i class=\"fas fa-arrow-right\"></i> Give to Rydia</td>"+"<td >Pitch Black Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>09</td>"+
        "<td rowspan='2'>He's a great man</td>"+
        "<td>Rydia</td>"+"<td rowspan='2'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Libor</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Libor</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 18 of Frenzy Lich<br><i class=\"fas fa-arrow-right\"></i> Report to Libor</td><td>Pitch Black Cave</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>10</td>"+
        "<td rowspan='2'>Heart Warming Food</td>"+
        "<td>Libor</td>"+"<td rowspan='2'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr><td>H-John</td><td><i class=\"fas fa-arrow-right\"></i> Give to Grave Guard</td><td>Grave of Oblivion</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>11</td>"+
        "<td rowspan='2'>No sleep by monsters</td>"+
        "<td>Grave Guard</td>"+"<td rowspan='2'>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Talk to Barbra</td>"+"<td rowspan='2'>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Barbra</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 25 of Loitering Spirit<br>Report to Barbra</td></tr>"+
        "<tr>" +
        "<tr >" +
        "<td rowspan='3'>12</td>"+
        "<td rowspan='3'>An amnesic extraordinary man</td>"+
        "<td>Barbra</td>"+"<td rowspan='3'>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Mysterious Old Ghost</td>"+"<td rowspan='3'>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr ><td>Mysterious Old Ghost</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Max</td></tr>"+
        "<tr><td>Max</td><td><i class=\"fas fa-arrow-right\"></i>Report to Grave Guard</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>13</td>"+
        "<td rowspan='3'>A fuss in the town</td>"+
        "<td>Grave Guard</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Charlotte</td>"+"<td rowspan='2'>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Charlotte</td><td rowspan='2'>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td></tr>"+
        "<tr class='table-secondary'><td>H-John</td><td><i class=\"fas fa-arrow-right\"></i> Report to Roberto</td><td>Pitch Black Cave</td></tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td >Dark Monster</td>"+
        "<td>Roberto</td>"+"<td>Pitch Black Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Gloomy Mojaggy<br><i class=\"fas fa-arrow-right\"></i> Report to Henrik</td>"+"<td>Pitch Black Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>15</td>"+
        "<td rowspan='2'>Gratitude and Devotion</td>"+
        "<td>Henrik</td>"+"<td>Thick Fog Forest</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Roberto</td>"+"<td rowspan='2'>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Roberto</td><td>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td></tr>"+
        "<tr>" +
        "<td >16</td>"+
        "<td>Please Consider</td>"+
        "<td>H-John</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td>"+"<td>Motel Underground</td>"+
        "</tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest26'><b>2.6.Warship ISL Resident - Depot - Main</b></p><br>" +
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
        "<td rowspan='2'>Smuggler spotted</td>"+
        "<td>Saburo</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Research the port<br>Nói chuyện với npc Bruno để có thể lên hòn đảo tiếp tục quest, sẽ tốn 50.000 Gold cho chuyến đi.</td>"+"<td rowspan='2'>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Harper</td><td>Warship ISL Resident</td><td><i class=\"fas fa-arrow-right\"></i> Get 3 of Burned Motor (Rusted Mech Lizard)<br><i class=\"fas fa-arrow-right\"></i> Give to Harper</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >An extraordinary tramp</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 7 Night Visioned Eyeball (Half Modded Mech Axolotl)<br><i class=\"fas fa-arrow-right\"></i> Give to Harper</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>Business taken over!</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Out Of Oil Mech Wolf<br><i class=\"fas fa-arrow-right\"></i> Report to Harper</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>Find this person</td>"+
        "<td>Harper</td>"+"<td>Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Uncoated Mech Humming Bird<br><i class=\"fas fa-arrow-right\"></i> Find an aristocrat</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>05</td>"+
        "<td rowspan='2'>Death of an aristrocrat</td>"+
        "<td>Harper</td>"+"<td>	Warship ISL Resident</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Research the aristocrat</td>"+"<td>	BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Kendall</td><td>BWT - Military Area</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Council Bergamino</td><td>BWT - Privileged Area</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>06</td>"+
        "<td rowspan='2'>Not easy to be big</td>"+
        "<td>Council Bergamino</td>"+"<td>BWT - Privileged Area</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Saburo</td>"+"<td rowspan='2'>Yamato Village</td>"+
        "</tr>"+
        "<tr><td>Saburo</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Edgar</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>It's go time!</td>"+
        "<td>Edgar</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Komekichi</td>"+"<td>Warship ISL Resident</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Komekichi</td><td>Warship ISL Resident</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Full Metal Mech Wolf<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td><td>Warship ISL Depot</td></tr>"+
        "<tr>" +
        "<td >08</td>"+
        "<td '>Contact undercover ninjas</td>"+
        "<td>Tengu Clan: 1st Class Warrior</td>"+"<td >Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Vanguard Rank 1<br><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Tengu Caster Rank 1<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Go further</td>"+
        "<td>Tengu Clan: 1st Class Rifleman</td>"+"<td>Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Defeat 15 of Tengu Gunner Rank 1<br><i class=\"fas fa-arrow-right\"></i> Have contact with the sneaking ninja</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>The boss is near...</td>"+
        "<td>Tengu Clan: 1st Class Sorcerer</td>"+"<td>Warship ISL Depot</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Tengu Woman Chief</td>"+"<td>Warship ISL Depot</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>11</td>"+
        "<td rowspan='3'>Finish it!</td>"+
        "<td>Evra</td>"+"<td>Warship ISL Main</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report about the Tengu Clan</td>"+"<td>Warship ISL Depot</td>"+
        "<tr class='table-secondary'><td>Maya</td><td>Warship ISL Depot</td><td><i class=\"fas fa-arrow-right\"></i> Report to Edgar</td><td rowspan='2'>Yamato Village</td></tr>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Edgar</td><td>Yamato Village</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td></tr>"+
        "</table>"+

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest27'><b>2.7.Highway Site - Old Industrial DIST - Chaos of the Dead - Grotto</b></p><br>" +
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
        "<td >I'll give you work</td>"+
        "<td>Irma</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Research the Highway Site</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td >02</td>"+
        "<td >Spirit. It's important</td>"+
        "<td>Betty</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Defeat 15 of Dignified Shocker Lizard<br><i class=\"fas fa-arrow-right\"></i>Report to Betty</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Relationships are the most important</td>"+
        "<td>Betty</td>"+"<td rowspan='2'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Give to Gillian</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Gillian</td><td><i class=\"fas fa-arrow-right\"></i> Report to Betty</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Shows in your expression</td>"+
        "<td>Betty</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Claude</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Claude</td><td>Highway Site</td><td><i class=\"fas fa-arrow-right\"></i> Get 8 Watery Nut (Abating Cactus)<br><i class=\"fas fa-arrow-right\"></i> Give to Claude</td><td>Highway Site</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Pride leads to death</td>"+
        "<td>Claude</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Gristle Meat (Dignified Shocker Lizard)<br><i class=\"fas fa-arrow-right\"></i> Give to Benjamin</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>06</td>"+
        "<td rowspan='2'>Missions are so harsh</td>"+
        "<td rowspan='2'>Benjamin</td>"+"<td rowspan='2'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Belonephobic Scorpion<br><i class=\"fas fa-arrow-right\"></i> Talk to Benjamin</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Report to Gillian</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>Mission official is a neat freak</td>"+
        "<td>Gillian</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Claude</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>Let's get to it!</td>"+
        "<td>Claude</td>"+"<td rowspan='2'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 5 Tickle Nut (Abating Cactus)<br><i class=\"fas fa-arrow-right\"></i> Talk to Gillian</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Gillian</td><td><i class=\"fas fa-arrow-right\"></i> Report to Claude</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>2.5hrs until full power</td>"+
        "<td>Claude</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Make the wife at ease (Beloved Anita)<br><i class=\"fas fa-arrow-right\"></i> Report to Claude</td>"+"<td>Highway Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='3'>10</td>"+
        "<td rowspan='3'>Sometimes you need a rest</td>"+
        "<td>Claude</td>"+"<td rowspan='3'>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Nancy</td>"+"<td rowspan='2'>Highway Site</td>"+
        "</tr>"+
        "<tr><td>Nancy</td><td>Talk to Benjamin</td></tr>"+
        "<tr><td>Benjamin</td><td><i class=\"fas fa-arrow-right\"></i> Find Jimmy</td><td>Old Industrial DIST</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >Tomorrow's the day!</td>"+
        "<td>Tim</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 12 of Carrion Eating Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Tim</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Need to leave early...</td>"+
        "<td>Tim</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Lifeblood Sucker Zombie</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td >Wanna be big!</td>"+
        "<td>Albert</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Sorrow Private Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td >Get them out!</td>"+
        "<td>Eloise</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Smoggy Golem<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td >Heartless aristocrats</td>"+
        "<td>Eloise</td>"+"<td>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 3 Deformed Capsule (Lifeblood Sucker Zombie)<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='3'>16</td>"+
        "<td rowspan='3'>Undead man...</td>"+
        "<td>Eloise</td>"+"<td rowspan='2'>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Tim</td>"+"<td>Old Industrial DIST</td>"+
        "</tr>"+
        "<tr><td>Tim</td><td><i class=\"fas fa-arrow-right\"></i> Find the medicine recipe</td><td>Chaos of the Dead</td></tr>"+
        "<tr><td>Tim's Boss Zombie</td><td>Chaos of the Dead</td><td><i class=\"fas fa-arrow-right\"></i> Find further of the medicine reciped</td><td>Chaos of the Dead</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >17</td>"+
        "<td >Tons of zombies</td>"+
        "<td>Old Man Virgin</td>"+"<td>Chaos of the Dead</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td>"+"<td>Chaos of the Dead</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>18</td>"+
        "<td rowspan='2'>Zombie land</td>"+
        "<td>Zombie Laborer</td>"+"<td rowspan='2'>Chaos of the Dead</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search further the inners of the cave<br><i class=\"fas fa-arrow-right\"></i> Report to Old Man Virgin</td>"+"<td>Chaos of the Dead</td>"+
        "</tr>"+
        "<tr><td>Old Man Virgin</td><td><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td><td>Old Industrial DIST</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >19</td>"+
        "<td >I'll guide you</td>"+
        "<td>Eloise</td>"+"<td>	Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr>" +
        "<td >20</td>"+
        "<td >They're annoying!</td>"+
        "<td>Eloise</td>"+"<td>	Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 16 of Stealth Vulture Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >21</td>"+
        "<td >Let's go further</td>"+
        "<td>Eloise</td>"+"<td>Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 18 of Looming Manis Zombie<br><i class=\"fas fa-arrow-right\"></i> Report to Eloise</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr>" +
        "<td >22</td>"+
        "<td >Let's stop searching</td>"+
        "<td>Eloise</td>"+"<td>	Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >23</td>"+
        "<td >R...U...N</td>"+
        "<td>Zombie Soldier</td>"+"<td>	Grotto</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td>"+"<td>Grotto</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>24</td>"+
        "<td rowspan='2'>Look for him for my sister</td>"+
        "<td>Lucy</td>"+"<td rowspan='2'>Old Industrial DIST</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find Jimmy</td>"+"<td >	Old Industrial DIST</td>"+
        "</tr>"+
        "<tr><td>Zombie Jimmy</td><td><i class=\"fas fa-arrow-right\"></i> Report to Nancy</td><td>	Highway Site</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >25</td>"+
        "<td >She didn't return</td>"+
        "<td>Nancy</td>"+"<td>Highway Site</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >26</td>"+
        "<td >I'll see you there</td>"+
        "<td>	Irma</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Irma</td>"+"<td >Motel Underground</td>"+
        "</tr>"+
        "</table>"+

        
        "<br>"+
        "<br>"+
        "<br>"+
        "<p class='titleMidtest' id='mainquestlv70to90'>Level 70- 90</p><br>" +
        "<p  id='mainquest31'><b>3.1.Thick Fog Cave - Spellbind Grave - Garden of Joy</b></p><br>" +
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
        "<td rowspan='2'>Suspicious Town</td>"+
        "<td>Irma</td>"+"<td>Motel Underground</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Grave Guard</td>"+"<td rowspan='2'>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Grave Guard</td><td>Grave of Oblivion</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Hans</td></tr>"+
        "<tr>" +
        "<td rowspan='3'>02</td>"+
        "<td rowspan='3'>My daughter is missing</td>"+
        "<td>Hans</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Martina</td>"+"<td rowspan='3'>Gray Town</td>"+
        "</tr>"+
        "<tr><td>Martina</td><td rowspan='2'>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Rydia</td></tr>"+
        "<tr><td>Rydia</td><td>Talk to Roberto</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>We are searching too</td>"+
        "<td rowspan='2'>Roberto</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Nosey Fungus<br><i class=\"fas fa-arrow-right\"></i> Report to Roberto</td>"+"<td rowspan='2'>Thick Fog Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Thick Fog Cave</td><td><i class=\"fas fa-arrow-right\"></i> Gather clues in cave 1/1</td></tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td >Difficulties in the search process</td>"+
        "<td>Roberto</td>"+"<td>Thick Fog Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Hot Smoked Slime<br><i class=\"fas fa-arrow-right\"></i> Report to Roberto</td>"+"<td>Thick Fog Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Something big in the depths</td>"+
        "<td>Roberto</td>"+"<td>Thick Fog Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Nihilistic Gnome<br><i class=\"fas fa-arrow-right\"></i> Report to Roberto</td>"+"<td>Thick Fog Cave</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Something fishy about the Graveyard</td>"+
        "<td >Roberto</td>"+"<td>Thick Fog Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Libor<br><i class=\"fas fa-arrow-right\"></i> Talk to Libor</td>"+"<td>	Spellbinded Grave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>07</td>"+
        "<td rowspan='3'>Father needs to check</td>"+
        "<td>Libor</td>"+"<td>Spellbinded Grave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Hans</td>"+"<td rowspan='3'>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Hans</td><td rowspan='2'>Grave of Oblivion</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Grave Guard</td></tr>"+
        "<tr class='table-secondary'><td>Grave Guard</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Mysterious Old Ghost</td></tr>"+

        "<tr>" +
        "<td >08</td>"+
        "<td >Sad not being hungry</td>"+
        "<td>Mysterious Old Ghost</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Produce 2 Sandwich<br><i class=\"fas fa-arrow-right\"></i> Give to Mysterious Old Ghost</td>"+"<td>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>09</td>"+
        "<td rowspan='2'>Something is in the cave</td>"+
        "<td>Mysterious Old Ghost</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Head to cave</td>"+"<td>Spellbinded Grave</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Maya</td><td>Spellbinded Grave</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Grave Guard</td><td>Grave of Oblivion</td></tr>"+
        "<tr>" +
        "<td rowspan='3'>10</td>"+
        "<td rowspan='3'>Probably belongs to someone in town</td>"+
        "<td>Grave Guard</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Rydia</td>"+"<td rowspan='3'>Gray Town</td>"+
        "</tr>"+
        "<tr><td>Rydia</td><td rowspan='2'>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Libor</td></tr>"+
        "<tr><td>Libor</td><td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >We are heartbroken too</td>"+
        "<td>H-John</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 5 of Neuralgic Gargoyle<br><i class=\"fas fa-arrow-right\"></i> Report to H-John</td>"+"<td>Spellbinded Grave</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Our existence is sinful</td>"+
        "<td>H-John</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Martina</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>13</td>"+
        "<td rowspan='2'>Why are you hostile to the town?</td>"+
        "<td>Martina</td>"+"<td rowspan='2'>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to resident (Eve)<br><i class=\"fas fa-arrow-right\"></i> Talk to resident (Turner)</td>"+"<td rowspan='2'>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Resident</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Roberto</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>14</td>"+
        "<td rowspan='2'>Stop deframing us</td>"+
        "<td>Roberto</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Hans</td>"+"<td>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr><td>Hans</td><td>Grave of Oblivion</td><td><i class=\"fas fa-arrow-right\"></i> Search the inners of the cave</td><td>Spellbinded Grave</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td >We will crawl up</td>"+
        "<td>Dying man</td>"+"<td>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td>	Garden of Joy</td>"+
        "</tr>"+
        "<tr>" +
        "<td >16</td>"+
        "<td>Going up by any means</td>"+
        "<td>	0</td>"+"<td>	Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td>Garden of Joy</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>17</td>"+
        "<td rowspan='2'>Secret Path B</td>"+
        "<td rowspan='2'>Inmate No.E194-B</td>"+"<td rowspan='2'>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td rowspan='2'>Garden of Joy</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td><i class=\"fas fa-arrow-right\"></i> Defeat 1 of Abiding Devotee<br><i class=\"fas fa-arrow-right\"></i> Talk to Inmate No.E194-B</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>18</td>"+
        "<td rowspan='2'>I must get out</td>"+
        "<td>Inmate No.E194-B</td>"+"<td>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td>Garden of Joy</td>"+
        "</tr>"+
        "<tr><td>Inmate No.T296-A</td><td>Garden of Joy</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 3 of Shrifting Devotee<br><i class=\"fas fa-arrow-right\"></i> Report to Inmate Inmate No.T296-A</td><td>Garden of Joy</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>19</td>"+
        "<td rowspan='2'>Path to advance</td>"+
        "<td>Inmate No.T296-A</td>"+"<td rowspan='2'>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td rowspan='2'>Garden of Joy</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Inmate No.T696-B</td><td><i class=\"fas fa-arrow-right\"></i> Extract 6 Ominous Mushroom</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>20</td>"+
        "<td rowspan='2'>I could tell you the path......</td>"+
        "<td>Inmate No.T696-B</td>"+"<td rowspan='2'>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td rowspan='2'>Garden of Joy</td>"+
        "</tr>"+
        "<tr><td>Inmate No.T486-C</td><td><i class=\"fas fa-arrow-right\"></i> Get 3 Brand-new Pillers</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>21</td>"+
        "<td rowspan='2'>Do you really wanna go further?</td>"+
        "<td>Inmate No.T486-C</td>"+"<td rowspan='2'>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Exit</td>"+"<td rowspan='2'>Garden of Joy</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Inmate No.O157-A</td><td><i class=\"fas fa-arrow-right\"></i> Extract 8 Dark Candle</td></tr>"+
        "<tr>" +
        "<td >22</td>"+
        "<td >Can you execute them?</td>"+
        "<td>Inmate No.O157-A</td>"+"<td>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 4 of Governing Model Devotee<br><i class=\"fas fa-arrow-right\"></i> Defeat 4 of Noble Model Devotee<br><i class=\"fas fa-arrow-right\"></i> Report to Inmate No.O157-A</td>"+"<td>Garden of Joy</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>23</td>"+
        "<td rowspan='2'>They all die up there</td>"+
        "<td rowspan='2'>Inmate No.O157-A</td>"+"<td rowspan='2'>Garden of Joy</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 4 Fanatic Scripture 2<br><i class=\"fas fa-arrow-right\"></i> Give to Inmate No.O157-A</td>"+"<td rowspan='2'>Garden of Joy</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td><i class=\"fas fa-arrow-right\"></i> Exit</td></tr>"+
        "<tr>" +
        "<td >24</td>"+
        "<td >Get some air</td>"+
        "<td>Emily</td>"+"<td>Top Layer</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Go outside</td>"+"<td >Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>25</td>"+
        "<td rowspan='2'>We need to get out from the town</td>"+
        "<td>Hans</td>"+"<td rowspan='2'>Gray Town</td>"+"<td rowspan='2'><i class=\"fas fa-arrow-right\"></i> Talk to H-John<br><i class=\"fas fa-arrow-right\"></i> Report to Grave Guard</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>H-John</td><td>Grave of Oblivion</td></tr>"+
        "<tr>" +
        "<td >26</td>"+
        "<td >Keeping an eye on that town</td>"+
        "<td>Grave Guard</td>"+"<td>Grave of Oblivion</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td>"+"<td >Motel Underground</td>"+
        "</tr>"+
        "</table>"+



        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest32'><b>3.2.Necrosis Village - Ouma-an Cave - Gray Town</b></p><br>" +
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
        "<td rowspan='2'>Something suspicious in town</td>"+
        "<td>Irma</td>"+"<td>Motel Underground</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td>"+"<td rowspan='2'>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>H-John</td><td>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to Roberto</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td>Lost contact with lookout</td>"+
        "<td>Roberto</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find Petros</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >03</td>"+
        "<td >My life lighter than feather</td>"+
        "<td >Petro</td>"+"<td>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 10 of Crawling Lizard<br><i class=\"fas fa-arrow-right\"></i> Report to Petros</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td >I want to store food</td>"+
        "<td>Petro</td>"+"<td>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Extract 10 Out-of-date Canned Food<br><i class=\"fas fa-arrow-right\"></i> Report to Petros</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>05</td>"+
        "<td rowspan='2'>One more perisoner guy</td>"+
        "<td>Petro</td>"+"<td rowspan='2'>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find Carel</td>"+"<td rowspan='2'>Necrosis Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Carel</td><td><i class=\"fas fa-arrow-right\"></i> Find Carel<br><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Repressive Humming Bird</td></tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >I saw another Ninja</td>"+
        "<td >Carel</td>"+"<td>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find Tsurunosuke</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td >Monsters multiplying</td>"+
        "<td>Tsurunosuke</td>"+"<td>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of Rebel Goblin<br><i class=\"fas fa-arrow-right\"></i> Report to Tsurunosuke</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>08</td>"+
        "<td rowspan='2'>They are in the cave</td>"+
        "<td>Tsurunosuke</td>"+"<td rowspan='2'>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Kuwazou</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr><td>Kuwazou</td><td><i class=\"fas fa-arrow-right\"></i> Join Kuwazou in Cave</td><td>Ouma-an Cave</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td >Start from cleaning here</td>"+
        "<td>Kuwazou</td>"+"<td>Ouma-an Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i>Defeat 18 of Night Assault Demon<br><i class=\"fas fa-arrow-right\"></i> Report to Kuwazou</td>"+"<td>Ouma-an Cave</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>10</td>"+
        "<td rowspan='2'>Should be many Demons</td>"+
        "<td>Kuwazou</td>"+"<td rowspan='2'>Ouma-an Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Unizou</td>"+"<td rowspan='2'>Ouma-an Cave</td>"+
        "</tr>"+
        "<tr><td>Unizou</td><td><i class=\"fas fa-arrow-right\"></i> Defeat 20 of High Demon Human Troop<br><i class=\"fas fa-arrow-right\"></i> Report to Unizou</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >Found the Demons</td>"+
        "<td>Unizou</td>"+"<td>Ouma-an Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Attack Demons' hangout<br><i class=\"fas fa-arrow-right\"></i> Report to Unizou</td>"+"<td>Ouma-an Cave</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Need to find the root</td>"+
        "<td>Unizou</td>"+"<td>Ouma-an Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Join with Tsurunosuke</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td >Stop the big one here</td>"+
        "<td>Tsurunosuke</td>"+"<td >Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Stop giant Demon's Invasion<br><i class=\"fas fa-arrow-right\"></i> Report to Tsurunosuke</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td >Guard the town</td>"+
        "<td>H-John</td>"+"<td>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>15</td>"+
        "<td rowspan='2'>Tougher for women</td>"+
        "<td>Roberto</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Rydia</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Rydia</td><td>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Get 10 Stiff Wood (Cruel Woodman)<br><i class=\"fas fa-arrow-right\"></i> Give to Rydia</td><td>Necrosis Village</td></tr>"+
        "<tr>" +
        "<td rowspan='2'>16</td>"+
        "<td rowspan='2'>I decided</td>"+
        "<td>Rydia</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk to Roberto</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr><td>Roberto</td><td>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Talk to H-John</td><td>Gray Town</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >17</td>"+
        "<td >Food for a few people</td>"+
        "<td >H-John</td>"+"<td >Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Give to Petros</td>"+"<td>Necrosis Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='3'>18</td>"+
        "<td rowspan='3'>The town is attacked!</td>"+
        "<td>Petros</td>"+"<td>Necrosis Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Hurry to Gray Town</td>"+"<td>Grave of Oblivion</td>"+
        "</tr>"+
        "<tr><td rowspan='2'>Roberto</td><td>Grave of Oblivion</td><td><i class=\"fas fa-arrow-right\"></i> Defeat the intruding Demon (3)</td><td>Gray Town</td></tr>"+
        "<tr><td>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Report to Roberto<br><i class=\"fas fa-arrow-right\"></i> Report to H-John</td><td>Gray Town</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>19</td>"+
        "<td rowspan='3'>Someone gone missing</td>"+
        "<td>H-John</td>"+"<td>Gray Town</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Find Rydia</td>"+"<td>Thick Fog Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Roberto</td><td>Thick Fog Forest</td><td><i class=\"fas fa-arrow-right\"></i> Report to H-John</td><td>Gray Town</td></tr>"+
        "<tr class='table-secondary'><td>H-John</td><td>Gray Town</td><td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td><td>Motel Underground</td></tr>"+
        "</table>"+

        

        "<br>"+
        "<br>"+
        "<br>"+
        "<p  id='mainquest33'><b>3.3.Dark Mt. Borderline - South Layer Cave</b></p><br>" +
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
        "<td rowspan='2'>Join elite Ninjas</td>"+
        "<td>Irma</td>"+"<td>Motel Underground</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Enter Dark Mountains</td>"+"<td rowspan='2'>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Somekichi</td><td>Dark Mt. Borderline</td><td><i class=\"fas fa-arrow-right\"></i> Join with Tsurunosuke</td></tr>"+
        "<tr>" +
        "<td >02</td>"+
        "<td >Critical issue on the barrier</td>"+
        "<td>Tsurunosuke</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 15 of Rude Molestar<br><i class=\"fas fa-arrow-right\"></i> Report to Tsurunosuke</td>"+"<td>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >03</td>"+
        "<td >Enviroment sucking vitality</td>"+
        "<td >Tsurunosuke</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 4 Tired Petal<br><i class=\"fas fa-arrow-right\"></i> Report to Tsurunosuke</td>"+"<td>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td >Got the academics</td>"+
        "<td>Tsurunosuke</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Extract 5 [ETC]<br><i class=\"fas fa-arrow-right\"></i> Give Madeleine</td>"+"<td>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td>Different from other places</td>"+
        "<td>Madeleine</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 8 Unreliable Claw (Rude Molestar)<br><i class=\"fas fa-arrow-right\"></i> Give Madeleine</td>"+"<td>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Super-human Ninjas are scary</td>"+
        "<td >Madeleine</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 5 of Shy Shocker Lizard<br><i class=\"fas fa-arrow-right\"></i> Report to Madeleine</td>"+"<td>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>07</td>"+
        "<td rowspan='2'>Place we haven't investigated</td>"+
        "<td>Madeleine</td>"+"<td rowspan='2'>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Tsrunosuke</td>"+"<td rowspan='2'>Dark Mt. Borderline</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Tsurunosuke</td><td>Join with Tonezou</td></tr>"+


        "<tr>" +
        "<td >08</td>"+
        "<td >Just gotta keep going</td>"+
        "<td>Tonezou</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 30 of Unsophisticated Molestar<br><i class=\"fas fa-arrow-right\"></i> Join with Zennosuke</td>"+"<td>South Cave</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td >No idea how deep the cave is</td>"+
        "<td>Zennosuke</td>"+"<td>South Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Get 15 Glaucoma Eyeball (Progenesis Slime)<br><i class=\"fas fa-arrow-right\"></i> Give to Zennosuke</td>"+"<td>South Cave</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Superiors screwed up</td>"+
        "<td>Zennosuke</td>"+"<td>	South Cave</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 30 of Liberty Wraith<br><i class=\"fas fa-arrow-right\"></i> Report to Zennosuke</td>"+"<td>Gray Town</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td >Reckless going alone!</td>"+
        "<td>Zennosuke</td>"+"<td>South Cave Layer 2</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 30 of Scary Face Bat<br><i class=\"fas fa-arrow-right\"></i> Report to Zennosuke</td>"+"<td>South Cave Layer 2</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Bunch of weirdos!</td>"+
        "<td>Zennosuke</td>"+"<td>South Cave Layer 2</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 40 of Gazing Evil Eye<br><i class=\"fas fa-arrow-right\"></i> Report to Zennosuke</td>"+"<td>South Cave Layer 2</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>13</td>"+
        "<td rowspan='2'>Smells in the back</td>"+
        "<td>Zennosuke</td>"+"<td>South Cave Layer 2</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Defeat 1 Poisonous Mushfrog</td>"+"<td>Mushfrog's Room</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td><td></td></td><td><i class=\"fas fa-arrow-right\"></i> Find Karizou</td><td>Dark Mt. Borderline</td></tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td >Never seen this color</td>"+
        "<td>Tsurunosuke</td>"+"<td>Dark Mt. Borderline</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Talk Edgar</td>"+"<td>Yamato Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td >Gotta look for him</td>"+
        "<td>Edgar</td>"+"<td>Yamato Village</td>"+"<td><i class=\"fas fa-arrow-right\"></i> Report to Irma</td>"+"<td>Motel Underground</td>"+
        "</tr>"+
        "</table>"+

        "</div>";
    $('#information').html(htmlAnswer);
}