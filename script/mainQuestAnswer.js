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
            document.getElementById('mainquest20').scrollIntoView()
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
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(5)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.4.Northern Plains - Cave of Gob Golin.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(6)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.5.North Defense Line - Mystic Ruined City.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(7)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.6.Privileged Area - Perished Smithy - Tunnel 1.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(8)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.7.Large Wetland - Cave of Heavy Python.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(9)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.8.Oil Field Site - Cave of Gross Oil.</a>" +
        "    <a href='javascript:void(0)' onclick='scrollToListMainQuest(10)' class='listAvatarItem listAvatarItem-action list-group-item-info'><i class=\"fas fa-scroll\"></i> 1.9.Sewerage 3 - Kasuba Water Plant 3.</a><br>" +
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
        "<td>Capitan Benton</td>"+"<td>BWT - Military Area</td>"+"<td>Talk to Council Abington.<br>Talk to Gate Keeper.</td>"+"<td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >Ahead is the Privileged district</td>"+
        "<td>Gate Keeper</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Council Bergamino.</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>You'll be happy serving me</td>"+
        "<td>Council Bergamino</td>"+"<td rowspan='2'>BWT - Privileged Area</td>"+"<td>Get 5 Vermilion Crystal (Forgetful Wraith)<br>Give to Council Bergamino.</td>"+"<td>Mystic Ruined City</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Council Bergamino</td>"+"<td>Report to Irma.</td><td>BWT - Commercial Area</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Looks like the troops have a new problem</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Capitan Benton.</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr><td>Capitan Benton</td><td>BWT - Military Area</td><td>Find Viggo.</td><td>Perished Smithy</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Insufficient power might kill you</td>"+
        "<td>Viggo</td>"+"<td>Perished Smithy</td>"+"<td>Become Lv 40 or higher.</td>"+"<td>Perished Smithy</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >Why aren't they gone yet?</td>"+
        "<td>Viggo</td>"+"<td>Perished Smithy</td>"+"<td>Defeat 10 of Assault Demon Human Troop<br>Report to Viggo</td>"+"<td>Perished Smithy</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>Is anyone young left alive?</td>"+
        "<td>Viggo</td>"+"<td>Perished Smithy</td>"+"<td>Find the survivors</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr>" +
        "<td>08</td>"+
        "<td>I fail as a pro losing my stuff</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td>Defeat 7 of Daring Shocker Lizard<br>Report to Armand</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>09</td>"+
        "<td rowspan='2'>There must be people still alive!</td>"+
        "<td>Armand</td>"+"<td rowspan='2'>Tunnel 1</td>"+"<td>Find the survivors</td>"+"<td rowspan='2'>Tunnel 1</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Rebecca</td><td>Defeat 6 of Muscular Axe Goblin<br>Report to Armand</td></tr>"+
        "<tr>" +
        "<tr>" +
        "<td rowspan='2'>10</td>"+
        "<td rowspan='2'>I heard a voice!</td>"+
        "<td>Armand</td>"+"<td rowspan='2'>Tunnel 1</td>"+"<td>Find the survivors</td>"+"<td rowspan='2'>Tunnel 1</td>"+
        "</tr>"+
        "<tr><td>Carter</td><td>Defeat 10 of Muscular Axe Goblin<br>Report to Armand</td></tr>"+
        "<tr>" +
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>The two need their nutrition</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td>Get 5 Obnoxious Meat (Daring Shocker Lizard)<br>Give to Rebecca<br>Give to Carter</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Only one weapon left...</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td>Report to Capitan Benton</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>13</td>"+
        "<td rowspan='2'>Ninjas are our allies</td>"+
        "<td>Capitan Benton</td>"+"<td rowspan='2'>BWT - Military Area</td>"+"<td>Talk to Kirkland</td>"+"<td>Talk to Kirkland</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Kirkland</td><td>Talk to Lawton</td><td>North Defense Line</td></tr>"+
        "<tr>" +
        "<td >14</td>"+
        "<td>That guy is getting loose!</td>"+
        "<td>Lawton</td>"+"<td>North Defense Line</td>"+"<td>Defeat 10 of Bandwagon Goblin Cub<br>Defeat 15 of Assault Demon Human Troop<br>Report to Lawton</td>"+"<td>Perished Smithy</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >15</td>"+
        "<td>Ask what the young ones want</td>"+
        "<td>Lawton</td>"+"<td>	North Defense Line</td>"+"<td>Talk to Armand</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<td rowspan='2'>16</td>"+
        "<td rowspan='2'>Strong ones are around here</td>"+
        "<td>Armand</td>"+"<td>Tunnel 1</td>"+"<td>Defeat 1 of Impure Goblin Troll-Bro<br>Report to Armand</td>"+"<td>Tunnel 1</td>"+
        "</tr>"+
        "<tr><td>Armand</td><td>Tunnel 1</td><td>Report to Lawton</td><td>North Defense Line</td></tr>"+
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
        "<td>Lawton</td>"+"<td>	North Defense Line</td>"+"<td>Defeat 6 of Persistent Axolotl<br>Report to Maximilian</td>"+"<td>Large Wetland</td>"+
        "</tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >Beat those creepy ones!</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td>Get 4 Clear Body Fluid (Persistent Axolotl)<br>Give to Maximilian</td>"+"<td>Large Wetland</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>03</td>"+
        "<td>I don't want to stay here!</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td>Defeat 10 of Irritable Manis<br>Report to Maximilian</td>"+"<td>Cave of Heavy Python</td>"+
        "</tr>"+
        "<tr>" +
        "<td rowspan='2'>04</td>"+
        "<td rowspan='2'>Aristocrats orders are a must</td>"+
        "<td>Maximilian</td>"+"<td>Large Wetland</td>"+"<td>Get 3 Juicy Body Fluid (Sticky Axolotl)<br>Give to Lawton</td>"+"<td>Cave of Heavy Python</td>"+
        "</tr>"+
        "<tr><td>Lawton</td><td>North Defense Line</td><td>Report to Irma</td><td>BWT - Commercial Area</td></tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='3'>05</td>"+
        "<td rowspan='3'>How's the Privileged district lately?</td>"+
        "<td>Irma</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Council Bamber</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Bamber</td><td>BWT - Privileged Area</td><td>Report to Irma</td><td>BWT - Commercial Area</td></tr>"+
        "<tr  class='table-secondary'><td>Irma</td><td>BWT - Commercial Area</td><td>Find Mr. Galant' De</td><td>Large Wetland</td></tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >There's one giant one ahead!</td>"+
        "<td>Mr. Galant' De</td>"+"<td>Large Wetland</td>"+"<td>Defeat 1 of Giant Serpentray<br>Report to Mr. Galant' De</td>"+"<td>Cave of Heavy Python</td>"+
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
        "<td>Mr. Galant' De</td>"+"<td>Large Wetland</td>"+"<td>Talk to Council Bamber</td>"+"<td>BWT - Privileged Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'><td>Council Bamber</td>"+"<td>BWT - Privileged Area</td>"+"<td>Talk to Irma</td>"+"<td>BWT - Commercial Area</td></tr>"+
        "<tr>" +
        "<td>02</td>"+
        "<td >You might lose your life fooling around</td>"+
        "<td>Guard</td>"+"<td>BWT - Commercial Area</td>"+"<td>Talk to Kirkland<br>Become Lv 43 or above</td>"+"<td>BWT - Military Area</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td rowspan='2'>03</td>"+
        "<td rowspan='2'>Weird things going on underground</td>"+
        "<td>Kirkland</td>"+"<td>BWT - Military Area</td>"+"<td>Talk to Lawton</td>"+"<td>North Defense Line</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td>Lawton</td>"+"<td>BWT - Privileged Area</td>"+"<td>Talk to Gounod.</td><td>Oil Field Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td >04</td>"+
        "<td>We need to let the gas out!</td>"+
        "<td>Gounod</td>"+"<td>Oil Field Site</td>"+"<td>Defeat 10 of Solo Fake Cat<br>Report to Gounod</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >05</td>"+
        "<td >Give it and leave!</td>"+
        "<td>Gounod</td>"+"<td>Oil Field Site</td>"+"<td>Talk to Amelia</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr>" +
        "<td >06</td>"+
        "<td >We should co-operate</td>"+
        "<td>Amelia</td>"+"<td>Oil Field Site</td>"+"<td>Defeat 8 of Fearless Wolf<br>Report to Amelia</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >07</td>"+
        "<td>What is left here to eat?</td>"+
        "<td>Amelia</td>"+"<td>Oil Field Site</td>"+"<td>Get 8 Sticky Body Fluid BETA (Mean Crawler)<br>Give to Amelia</td>"+"<td>Cave of Gross Oil</td>"+
        "</tr>"+
        "<tr>" +
        "<td>08</td>"+
        "<td>Can you look for an evil man?</td>"+
        "<td>Amelia</td>"+"<td>	Oil Field Site</td>"+"<td>Talk to Elbow</td>"+"<td>Oil Field Site</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >09</td>"+
        "<td>Help me. My right arm hurts</td>"+
        "<td>Elbow</td>"+"<td>Oil Field Site</td>"+"<td>Ta lk to Morris.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >10</td>"+
        "<td>Gramps you don't want to mess with...</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td>Become Lv 7 or higher.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >11</td>"+
        "<td>The type you don't want to go near	</td>"+
        "<td>Morris</td>"+"<td>Ordo Village</td>"+"<td>Talk to Shade.</td>"+"<td>Ordo Village</td>"+
        "</tr>"+
        "<tr>" +
        "<td >12</td>"+
        "<td>Important documents coming soon</td>"+
        "<td>Shade</td>"+"<td>Ordo Village</td>"+"<td>Talk to Travis.</td>"+"<td>Old Wood Forest</td>"+
        "</tr>"+
        "<tr class='table-secondary'>" +
        "<td >13</td>"+
        "<td>First get that giant one!!</td>"+
        "<td>Travis</td>"+"<td>Old Wood Forest</td>"+"<td>Defeat 1 Oppressive Goblin Troll.</td>"+"<td>Cave of Bewilderness</td>"+
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
        "</div>";
    $('#information').html(htmlAnswer);
}