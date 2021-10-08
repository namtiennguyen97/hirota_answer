
function queryUsername() {
    let username = document.getElementById('username').value;
    if (username && !username.includes('hirota') && username.length < 30){
        localStorage.setItem('username',username);
        $('#guideMsgIndex').text('Xin chào '+ username+ ', tôi hi vọng trang web này có thể giúp bạn dù chỉ chút ít. Chúc bạn một ngày tốt lành!');
    }else if (username.includes('hirota')|| username.includes('Hirota')){
        $('#guideMsgIndex').html('No no no no, bạn không thể là tôi được, không nhập lung tung à nha!' + '<br> <input class="form-control border-success" id="username" type="text" placeholder="Tên Nhân Vật Ingame của bạn?"><br>\n' +
            '<button class="btn btn-warning form-control" id="confirmUsername" onclick="queryUsername()">Là tôi nè!</button>');
    }
    else {
        notDetectiveUser()
    }
}

function notDetectiveUser() {
    let randGuide2 = Math.floor(Math.random() * 2);
    let refuseAnswer = ['Đây là ai thế? Hmmm... Có lẽ tôi chưa gặp bao giờ chăng? Nghiêm túc nhập lại nào!', 'Ai vậy trời! Nghiêm túc nói lại nào!'];
    $('#guideMsgIndex').html(refuseAnswer[randGuide2] + '<br> <input class="form-control border-success" id="username" type="text" placeholder="Tên Nhân Vật Ingame của bạn?"><br>\n' +
        '<button class="btn btn-warning form-control" id="confirmUsername" onclick="queryUsername()">Là tôi nè!</button>');
}

