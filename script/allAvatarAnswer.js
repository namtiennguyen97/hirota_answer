function allAvatarAnswer(){
    let htmlAnswer = "<p class='titleMidtest'>Danh sách các class cơ bản của Izanagi</p><br>" +
        "<p class='titleMidtest'><span style='color: red'>Note</span> Biểu tượng biểu thị chỉ có trong Lotte: <i class=\"fas fa-store\"></i><br>" +
        "<span style='color: red'>Note</span> Biểu tượng biểu thị chỉ có trong hunt boss: <i class=\"fab fa-optin-monster\"></i><br>" +
        "<span style='color: red'>Note</span> Biểu tượng biểu thị có được từ các nguồn khác: <i class=\"fas fa-boxes\"></i><br>" +
        "</p><br>" +

        "<div class='row'>" +
        "    <div class='col-3'>" +
        "        <div class='list-group'>" +
        "    <a href='javascript:void(0)' onclick='showAvaReaper()' class='listAvatarItem listAvatarItem-action list-group-item-info'>1. Reaper <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showKabuki()' class='listAvatarItem listAvatarItem-action list-group-item-info'>2. Kabuki <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showWerewolf()' class='listAvatarItem listAvatarItem-action list-group-item-info'>3. Werewolf <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showGentleman()' class='listAvatarItem listAvatarItem-action list-group-item-info'>4. Gentleman <i class=\"fas fa-boxes\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showFencer()' class='listAvatarItem listAvatarItem-action list-group-item-info'>5. Fencer <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showCasino()' class='listAvatarItem listAvatarItem-action list-group-item-info'>6. Casino <i class=\"fas fa-boxes\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showRoninAva()' class='listAvatarItem listAvatarItem-action list-group-item-info'>7. Ronin <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBlackKnight()' class='listAvatarItem listAvatarItem-action list-group-item-info'>8. Black Knight <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showLightArmor()' class='listAvatarItem listAvatarItem-action list-group-item-info'>9. Light Armor <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showAnubis()' class='listAvatarItem listAvatarItem-action list-group-item-info'>10. Anubis <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSamurai()' class='listAvatarItem listAvatarItem-action list-group-item-info'>11. Samurai <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showArabian()' class='listAvatarItem listAvatarItem-action list-group-item-info'>12. Arabian <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showDancer()' class='listAvatarItem listAvatarItem-action list-group-item-info'>13. Dancer <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showOrge()' class='listAvatarItem listAvatarItem-action list-group-item-info'>14. Orge <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showVampire()' class='listAvatarItem listAvatarItem-action list-group-item-info'>15. Vampire <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showWestern()' class='listAvatarItem listAvatarItem-action list-group-item-info'>16. Western Armor <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showScarecrow()' class='listAvatarItem listAvatarItem-action list-group-item-info'>17. Scarecrow <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showTaishoRoman()' class='listAvatarItem listAvatarItem-action list-group-item-info'>18. Taisho Romantic <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showAngel()' class='listAvatarItem listAvatarItem-action list-group-item-info'>19. Angel <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showDogu()' class='listAvatarItem listAvatarItem-action list-group-item-info'>20. Dogu <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showCMDR()' class='listAvatarItem listAvatarItem-action list-group-item-info'>21. CMDR <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSpecialForce()' class='listAvatarItem listAvatarItem-action list-group-item-info'>22. Special Forces <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showNs()' class='listAvatarItem listAvatarItem-action list-group-item-info'>23. Night stalker <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showChilvary()' class='listAvatarItem listAvatarItem-action list-group-item-info'>24. Chilvary <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showNinja()' class='listAvatarItem listAvatarItem-action list-group-item-info'>25. Ninja <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showPuppet()' class='listAvatarItem listAvatarItem-action list-group-item-info'>26. Puppet Master <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSanta2016()' class='listAvatarItem listAvatarItem-action list-group-item-info'>27. Santa 2017 <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSanta2019()' class='listAvatarItem listAvatarItem-action list-group-item-info'>28. Santa 2019 <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSanta2017()' class='listAvatarItem listAvatarItem-action list-group-item-info'>29. Santa 2016 <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showDiver()' class='listAvatarItem listAvatarItem-action list-group-item-info'>30. Diver <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showMasterThief()' class='listAvatarItem listAvatarItem-action list-group-item-info'>31. Master Thief <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSteamPunk()' class='listAvatarItem listAvatarItem-action list-group-item-info'>32. Steam Punk <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showTsukuyomi()' class='listAvatarItem listAvatarItem-action list-group-item-info'>33. Tsukuyomi <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showNecromancer()' class='listAvatarItem listAvatarItem-action list-group-item-info'>34. Necromancer <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBerserker()' class='listAvatarItem listAvatarItem-action list-group-item-info'>35. Berserker <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showMillionaire()' class='listAvatarItem listAvatarItem-action list-group-item-info'>36. Millionaire <i class=\"fas fa-boxes\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showHound()' class='listAvatarItem listAvatarItem-action list-group-item-info'>37. Hound <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBakeneko()' class='listAvatarItem listAvatarItem-action list-group-item-info'>38. Bakeneko <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBWTTroop()' class='listAvatarItem listAvatarItem-action list-group-item-info'>39. BWT Troop <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBaphomet()' class='listAvatarItem listAvatarItem-action list-group-item-info'>40. Baphomet <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showWestern2()' class='listAvatarItem listAvatarItem-action list-group-item-info'>41. Western <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showWedding()' class='listAvatarItem listAvatarItem-action list-group-item-info'>42. Wedding <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSchool()' class='listAvatarItem listAvatarItem-action list-group-item-info'>43. School Uniform <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showKarajishi()' class='listAvatarItem listAvatarItem-action list-group-item-info'>44. Karajishi <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showKarasuTengu()' class='listAvatarItem listAvatarItem-action list-group-item-info'>45. Karasu Tengu <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showMascot()' class='listAvatarItem listAvatarItem-action list-group-item-info'>46. Mascot <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showClown()' class='listAvatarItem listAvatarItem-action list-group-item-info'>47. Clown <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showGhostWarrior()' class='listAvatarItem listAvatarItem-action list-group-item-info'>48. Ghost Warrior <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showCarnival()' class='listAvatarItem listAvatarItem-action list-group-item-info'>49. Carnival <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showVillan()' class='listAvatarItem listAvatarItem-action list-group-item-info'>50. Villan <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showFireMan()' class='listAvatarItem listAvatarItem-action list-group-item-info'>51. FireMan <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showGojoOhashi()' class='listAvatarItem listAvatarItem-action list-group-item-info'>52. Gojo Ohashi <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showFolklore()' class='listAvatarItem listAvatarItem-action list-group-item-info'>53. Folklore <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showFolklore2()' class='listAvatarItem listAvatarItem-action list-group-item-info'>54. Folklore II <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showMerman()' class='listAvatarItem listAvatarItem-action list-group-item-info'>55. Merman <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showHeroAva()' class='listAvatarItem listAvatarItem-action list-group-item-info'>56. Hero <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBusinessSeeker()' class='listAvatarItem listAvatarItem-action list-group-item-info'>57. Business Seeker <i class=\"fas fa-boxes\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showFujinRaijin()' class='listAvatarItem listAvatarItem-action list-group-item-info'>58. FujinRaijin <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showFumaNinja()' class='listAvatarItem listAvatarItem-action list-group-item-info'>59. Fuma Ninja <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showWrestling()' class='listAvatarItem listAvatarItem-action list-group-item-info'>60. Wrestling <i class=\"fas fa-boxes\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSamuraiGEN()' class='listAvatarItem listAvatarItem-action list-group-item-info'>71. Samurai GEN <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showMagical()' class='listAvatarItem listAvatarItem-action list-group-item-info'>72. Magical <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showMariachi()' class='listAvatarItem listAvatarItem-action list-group-item-info'>73. Mariachi <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSwimsuit()' class='listAvatarItem listAvatarItem-action list-group-item-info'>74. Swimsuit <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showNinjaH()' class='listAvatarItem listAvatarItem-action list-group-item-info'>75. Ninja-H <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showSwimsuit2016()' class='listAvatarItem listAvatarItem-action list-group-item-info'>76. Swimsuit 2016 <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showNightmare()' class='listAvatarItem listAvatarItem-action list-group-item-info'>77. Nightmare <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showYukata2016()' class='listAvatarItem listAvatarItem-action list-group-item-info'>78. Yukata 2016 <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showYukata()' class='listAvatarItem listAvatarItem-action list-group-item-info'>79. Yukata <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showDemon()' class='listAvatarItem listAvatarItem-action list-group-item-info'>80. Demon <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showWF2016()' class='listAvatarItem listAvatarItem-action list-group-item-info'>81. WF2016 <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showThug()' class='listAvatarItem listAvatarItem-action list-group-item-info'>82. Thug <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showBlackFang()' class='listAvatarItem listAvatarItem-action list-group-item-info'>83. BlackFang <i class=\"fas fa-boxes\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showConvictAva()' class='listAvatarItem listAvatarItem-action list-group-item-info'>84. Convict <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showHockey()' class='listAvatarItem listAvatarItem-action list-group-item-info'>85. Hockey <i class=\"fab fa-optin-monster\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showZenkiGoki()' class='listAvatarItem listAvatarItem-action list-group-item-info'>86. Zenki Goki <i class=\"fas fa-store\"></i></a>" +
        "    <a href='javascript:void(0)' onclick='showAttackOnTitan()' class='listAvatarItem listAvatarItem-action list-group-item-info'>87. Attack On Titans <i class=\"fas fa-store\"></i></a>" +
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
    topFunction();
}
function showKabuki(){
    let htmlRender = "<div class='row'>" +"<h4>Kabuki Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/kabukiMale.jpg'>Nam</div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/kabukiFemale.jpg'>Nữ</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Kabuki!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showWerewolf(){
    let htmlRender = "<div class='row'>" +"<h4>Werewolf Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/werewolf.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Werewolf!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showZenkiGoki(){
    let htmlRender = "<div class='row'>" +"<h4>Zenki Goki Avatar</h4>"+"<br>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/zenkia.jpg'>Loại A</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/zenkib.jpg'>Loại B</div>"+
        "<div class='col-4'><img class='img img-thumbnail' src='img/avatar/zenkic.jpg'>Loại C</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Zenki Goki!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showFencer(){
    let htmlRender = "<div class='row'>" +"<h4>Fencer Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/fencerMale.jpg'>Nam</div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/fencerFemale.jpg'>Nữ</div>"+
        "</div>";
    $('#guideMsgIndex').text('Avatar Fencer!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
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
    topFunction();
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
    topFunction();
}
function showWestern(){
    let htmlRender = "<div class='row'>" +"<h4>Western Armor</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/western.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Western Armor!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showScarecrow(){
    let htmlRender = "<div class='row'>" +"<h4>Scarecrow Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/scarecrowMale.jpg'>Nam</div>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/scarecrowFemale.jpg'>Nữ</div>"+
        "</div>";
    $('#guideMsgIndex').text('Scarecrow Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
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
    topFunction();
}
function showCMDR(){
    let htmlRender = "<div class='row'>" +"<h4>CMDR Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/cmdr.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('CMDR Avatar!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
}
function showNs(){
    let htmlRender = "<div class='row'>" +"<h4>Night Stalker Avatar</h4>"+"<br>"+
        "<div class='col'><img class='img img-thumbnail' src='img/avatar/ns.jpg'></div>"+
        "</div>";
    $('#guideMsgIndex').text('Night Stalker!');
    $('#avaShowDetail').html(htmlRender);
    topFunction();
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
