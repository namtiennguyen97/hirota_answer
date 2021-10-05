function classesAnswer(){
    let htmlAnswer = "<p class='titleMidtest'>Danh sách các class cơ bản của Izanagi</p><br><div class='row row-cols-1 row-cols-md-2 g-4'>" +
        "  <div class='col'>" +
        "    <div class='classesCard'>" +
        "      <img src='img/classes/assasin.jpg'  class='card-img-top img img-thumbnail' alt='...'>" +
        "      <div class='card-body text-primary'>" +
        "        <h5 class='card-title'>Assasin</h5>" +
        "        <p class='card-text'><i class=\"fas fa-feather-alt\"></i> Đây là class phổ biến nhất, với độ cơ động cao. " + "<br>"+
        "<i class=\"fas fa-feather-alt\"></i> Thích hợp trong những trận chiến dài hơi. " + "<br>"+
        "<i class=\"fas fa-feather-alt\"></i> Assasin có sức damage vừa đủ, dễ dàng tùy biến đa dạng. " + "<br>"+
        "<i class=\"fas fa-feather-alt\"></i> Asssasin có 2 nhánh đó là Shadow và Gunsingle</p>" +
        "<button class='btn btn-primary'>Xem thêm về nhánh chuyển nghề Assasin <i class=\"fas fa-user-ninja\"></i></button>"+
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "  <div class='col'>" +
        "    <div class='classesCard'>" +
        "      <img src='img/classes/mage.jpg' class='card-img-top' alt='...'>" +
        "      <div class='card-body text-danger'>" +
        "        <h5 class='card-title'>Mage</h5>" +
        "        <p class='card-text'>" +
        "<i class=\"fas fa-broom\"></i> Là một class có sức damage có thể nói cao nhất game."+ "<br>"+
        "<i class=\"fas fa-broom\"></i> Là một class có sức damage có thể nói cao nhất game." + "<br>"+
        "<i class=\"fas fa-broom\"></i> Tuy kém cơ động nhưng lại đóng vai trò rất quan trọng trong các trận chiến tập thể." + "<br>"+
        "<i class=\"fas fa-broom\"></i> Mage có 2 nhánh chính là Wizzard và Sage.  </p>" + "<br"+
        "<button class='btn btn-danger'>Xem thêm về nhánh chuyển nghề Mage <i class=\"fas fa-hat-wizard\"></i></button>"+
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "  <div class='col'>" +
        "    <div class='classesCard'>" +
        "      <img src='img/classes/cleric.jpg' class='card-img-top' alt='...'>" +
        "      <div class='card-body text-success'>" +
        "        <h5 class='card-title'>Cleric</h5>" +
        "        <p class='card-text'>" +
        "<i class=\"fas fa-hand-holding-medical\"></i> Là class support toàn phần" + "<br>"+
        "<i class=\"fas fa-hand-holding-medical\"></i> là class đóng vai trò không thể thiếu trong tất cả các hoạt động chiến đấu. " + "<br>"+
        "<i class=\"fas fa-hand-holding-medical\"></i> Skill buff rất mạnh cho đồng đội và hồi sinh. " + "<br>"+
        "<i class=\"fas fa-hand-holding-medical\"></i> Cleric có 2 nhánh đó là Priest và Crusader.</p>" +
        "<button class='btn btn-success'>Xem thêm về nhánh chuyển nghề Cleric <i class=\"fas fa-gavel\"></i></button>"+
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "  <div class='col'>" +
        "    <div class='classesCard'>" +
        "      <img src='img/classes/warrior.jpg' class='card-img-top' alt='...'>" +
        "      <div class='card-body text-info'>" +
        "        <h5 class='card-title'>Warrior</h5>" +
        "        <p class='card-text'>" +
        "<i class=\"fas fa-fist-raised\"></i> Là một class đóng vai trò tanker trong game. " + "<br>"+
        "<i class=\"fas fa-fist-raised\"></i> Warrior có thể hứng damage cover cho đồng đội. " + "<br>"+
        "<i class=\"fas fa-fist-raised\"></i> Thiếu cơ động. " + "<br>"+
        "<i class=\"fas fa-fist-raised\"></i> Có thể gây ra một lượng sát thương cực lớn. " + "<br>"+
        "<i class=\"fas fa-fist-raised\"></i> Warrior có 2 nhánh đó là Guardian và Gladiator.</p>" +
        "<button class='btn btn-info'>Xem thêm về nhánh chuyển nghề Warior <i class=\"fas fa-shield-alt\"></i></button>"+
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>";
    $('#guideMsgIndex').text('...');
    $('#information').html(htmlAnswer);
}