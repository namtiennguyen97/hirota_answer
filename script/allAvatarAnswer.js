function allAvatarAnswer(){
    let htmlAnswer = "<p class='titleMidtest'>Danh sách các class cơ bản của Izanagi</p><br>" +
        "<div class='row'>" +
        "    <div class='col-3'>" +
        "        <div class='list-group'>" +
        "    <a href='javascript:void(0)' onclick='showAvaReaper()' class='listAvatarItem listAvatarItem-action list-group-item-info'>1. Reaper</a>" +
        "    <a href='javascript:void(0)' onclick='showKabuki()' class='listAvatarItem listAvatarItem-action list-group-item-info'>2. Kabuki</a>" +
        "    <a href='javascript:void(0)' onclick='showWerewolf()' class='listAvatarItem listAvatarItem-action list-group-item-info'>3. Werewolf</a>" +
        "    <a href='javascript:void(0)' onclick='showZenkiGoki()' class='listAvatarItem listAvatarItem-action list-group-item-info'>4. Zenki Goki</a>" +
        "    <a href='javascript:void(0)' onclick='showFencer()' class='listAvatarItem listAvatarItem-action list-group-item-info'>4. Fencer</a>" +
        "    <a href='javascript:void(0)' onclick='showBlackKnight()' class='listAvatarItem listAvatarItem-action list-group-item-info'>5. Black Knight</a>" +
        "    <a href='javascript:void(0)' onclick='showLightArmor()' class='listAvatarItem listAvatarItem-action list-group-item-info'>6. Light Armor</a>" +
        "    <a href='javascript:void(0)' onclick='showAnubis()' class='listAvatarItem listAvatarItem-action list-group-item-info'>7. Anubis</a>" +
        "    <a href='javascript:void(0)' onclick='showArabian()' class='listAvatarItem listAvatarItem-action list-group-item-info'>8. Arabian</a>" +
        "    <a href='javascript:void(0)' onclick='showDancer()' class='listAvatarItem listAvatarItem-action list-group-item-info'>9. Dancer</a>" +
        "    <a href='javascript:void(0)' onclick='showOrge()' class='listAvatarItem listAvatarItem-action list-group-item-info'>10. Orge</a>" +
        "    <a href='javascript:void(0)' onclick='showWestern()' class='listAvatarItem listAvatarItem-action list-group-item-info'>11. Western Armor</a>" +
        "    <a href='javascript:void(0)' onclick='showScarecrow()' class='listAvatarItem listAvatarItem-action list-group-item-info'>12. Scarecrow</a>" +
        "    <a href='javascript:void(0)' onclick='showTaishoRoman()' class='listAvatarItem listAvatarItem-action list-group-item-info'>13. Taisho Romantic</a>" +
        "    <a href='javascript:void(0)' onclick='showAngel()' class='listAvatarItem listAvatarItem-action list-group-item-info'>14. Angel</a>" +
        "    <a href='javascript:void(0)' onclick='showDogu()' class='listAvatarItem listAvatarItem-action list-group-item-info'>15. Dogu</a>" +
        "    <a href='javascript:void(0)' onclick='showCMDR()' class='listAvatarItem listAvatarItem-action list-group-item-info'>16. CMDR</a>" +
        "    <a href='javascript:void(0)' onclick='showSpecialForce()' class='listAvatarItem listAvatarItem-action list-group-item-info'>17. Special Forces</a>" +
        "    <a href='javascript:void(0)' onclick='showNs()' class='listAvatarItem listAvatarItem-action list-group-item-info'>18. Night stalker</a>" +
        "    <a href='javascript:void(0)' onclick='showChilvary()' class='listAvatarItem listAvatarItem-action list-group-item-info'>19. Chilvary</a>" +
        "    <a href='javascript:void(0)' onclick='showNinja()' class='listAvatarItem listAvatarItem-action list-group-item-info'>20. Ninja</a>" +
        "    <a href='javascript:void(0)' onclick='showPuppet()' class='listAvatarItem listAvatarItem-action list-group-item-info'>21. Puppet Master</a>" +
        "    <a href='javascript:void(0)' onclick='showSanta2016()' class='listAvatarItem listAvatarItem-action list-group-item-info'>22. Santa 2017</a>" +
        "    <a href='javascript:void(0)' onclick='showSanta2019()' class='listAvatarItem listAvatarItem-action list-group-item-info'>23. Santa 2019</a>" +
        "    <a href='javascript:void(0)' onclick='showSanta2017()' class='listAvatarItem listAvatarItem-action list-group-item-info'>24. Santa 2016</a>" +
        "    <a href='javascript:void(0)' onclick='showMasterThief()' class='listAvatarItem listAvatarItem-action list-group-item-info'>25. Master Thief</a>" +
        "    <a href='javascript:void(0)' onclick='showSteamPunk()' class='listAvatarItem listAvatarItem-action list-group-item-info'>26. Steam Punk</a>" +
        "    <a href='javascript:void(0)' onclick='showTsukuyomi()' class='listAvatarItem listAvatarItem-action list-group-item-info'>27. Tsukuyomi</a>" +
        "    <a href='javascript:void(0)' onclick='showNecromancer()' class='listAvatarItem listAvatarItem-action list-group-item-info'>28. Necromancer</a>" +
        "    <a href='javascript:void(0)' onclick='showBerserker()' class='listAvatarItem listAvatarItem-action list-group-item-info'>29. Berserker</a>" +
        "    <a href='javascript:void(0)' onclick='showHound()' class='listAvatarItem listAvatarItem-action list-group-item-info'>29. Hound</a>" +
        "    <a href='javascript:void(0)' onclick='showBakeneko()' class='listAvatarItem listAvatarItem-action list-group-item-info'>30. Bakeneko</a>" +

        "  </div>" +
        "    </div>" +
        "    <div class='col-9'>" +
        "        <div class='tab-content' id='nav-tabContent'>" +
        "            <div class='tab-pane fade show active' id='avaShowDetail' role='tabpanel' aria-labelledby='list-home-list'>...</div>" +
        "        </div>" +
        "    </div>" +
        "</div>";
    $('#guideMsgIndex').text('Hãy lựa chọn danh sách!');
    $('#information').html(htmlAnswer);
}

function showAvaReaper(){
    let htmlRender = "<div class='row'>" +"<h4>Reaper Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/reapera.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/reaperb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/reaperc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Reaper!');
    $('#avaShowDetail').html(htmlRender);
}
function showKabuki(){
    let htmlRender = "<div class='row'>" +"<h4>Kabuki Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/kabukiMale.jpg'>Nam</div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/kabukiFemale.jpg'>Nữ</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Kabuki!');
    $('#avaShowDetail').html(htmlRender);
}
function showWerewolf(){
    let htmlRender = "<div class='row'>" +"<h4>Werewolf Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/werewolf.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Werewolf!');
    $('#avaShowDetail').html(htmlRender);
}
function showZenkiGoki(){
    let htmlRender = "<div class='row'>" +"<h4>Zenki Goki Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/zenkia.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/zenkib.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/zenkic.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Zenki Goki!');
    $('#avaShowDetail').html(htmlRender);
}
function showFencer(){
    let htmlRender = "<div class='row'>" +"<h4>Fencer Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/fencerMale.jpg'>Nam</div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/fencerFemale.jpg'>Nữ</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Fencer!');
    $('#avaShowDetail').html(htmlRender);
}
function showBlackKnight(){
    let htmlRender = "<div class='row'>" +"<h4>Black Knight Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/bka.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/bkb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/bkc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Black Knight!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showLightArmor(){
    let htmlRender = "<div class='row'>" +"<h4>Light Armor Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/lightamor.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Light Armor!');
    $('#avaShowDetail').html(htmlRender);
}
function showAnubis(){
    let htmlRender = "<div class='row'>" +"<h4>Arabian Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/anubisa.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/anubisb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/anubisc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Anubis Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showArabian(){
    let htmlRender = "<div class='row'>" +"<h4>Arabian Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/arabiana.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/arabianb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/arabianc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Arabian Avatar!');
    $('#avaShowDetail').html(htmlRender);
}
function showDancer(){
    let htmlRender = "<div class='row'>" +"<h4>Dancer Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/dancera.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/dancerb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/dancerc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Dancer Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showOrge(){
    let htmlRender = "<div class='row'>" +"<h4>Orge Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/orge1.jpg'></div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/orge2.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Orge Avatar!');
    $('#avaShowDetail').html(htmlRender);
}
function showWestern(){
    let htmlRender = "<div class='row'>" +"<h4>Western Armor</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/western.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Western Armor!');
    $('#avaShowDetail').html(htmlRender);
}
function showScarecrow(){
    let htmlRender = "<div class='row'>" +"<h4>Scarecrow Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/scarecrowMale.jpg'>Nam</div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/scarecrowFemale.jpg'>Nữ</div>"+
        "</div>";
    $('#guideMsgIndex').text('Scarecrow Avatar!');
    $('#avaShowDetail').html(htmlRender);
}
function showTaishoRoman(){
    let htmlRender = "<div class='row'>" +"<h4>Taisho Romantic</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/romantica.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/romanticb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/romanticc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Romantic Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showAngel(){
    let htmlRender = "<div class='row'>" +"<h4>Angel</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/angela.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/angelb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/angelc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Angel Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showDogu(){
    let htmlRender = "<div class='row'>" +"<h4>Dogu</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/dogua.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/dogub.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/doguc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Dogu Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showSpecialForce(){
    let htmlRender = "<div class='row'>" +"<h4>Speical Forces Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/speicalForces.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Speical Forces!');
    $('#avaShowDetail').html(htmlRender);
}
function showCMDR(){
    let htmlRender = "<div class='row'>" +"<h4>CMDR Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/cmdr.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('CMDR Avatar!');
    $('#avaShowDetail').html(htmlRender);
}
function showNs(){
    let htmlRender = "<div class='row'>" +"<h4>Night Stalker Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/ns.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Night Stalker!');
    $('#avaShowDetail').html(htmlRender);
}
function showChilvary(){
    let htmlRender = "<div class='row'>" +"<h4>Chilvary Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/chilvarya.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/chilvaryb.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/chilvaryc.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Chilvary Avatar!');
    topFunction();
    $('#avaShowDetail').html(htmlRender);
}
function showNinja(){
    let htmlRender = "<div class='row'>" +"<h4>Ninja Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/ninja.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Ninja Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}