function queryUsername() {
    let username = document.getElementById('username').value;
    if (username === 'cudai2tac' || username === 'cudài2tấc') {
        $('#guideMsgIndex').text('Oh ra là đại gia cu à, hầu hết các kiến thức trong đây đều đã biết rồi nhỉ, tuy nhiên đôi lúc sẽ cần bởi một số thứ chúng ta cần phải tra lại như avatar drop, hay mid test?');
    } else if (username === 'admin' || username === 'asobimo') {
        $('#guideMsgIndex').text('Bạn không thể là admin được, xạo là quạ bắt diều hâu tha nhá!');
    } else if (username === 'Nicodimoto' || username === 'BadB0y' || username === 'tidus') {
        $('#guideMsgIndex').text('Là đại gia cu à! Con Mage op quá nhỉ? Và Gla hay Guard thì đúng là một bao cát di động!');
    }
    // gg
    else if (username === 'gg' || username === 'googlevn' || username === 'GoogleVN' || username === 'emchua18' || username === 'bantayvang') {
        $('#guideMsgIndex').text('Hoho chào GG, chưa bao giờ nghĩ gg bận rộn lại ghé thăm page đâu, phải chăng fake?!');
    }
    //neko
    else if (username === 'neko' || username === 'néo' || username === 'neO' || username === 'neko^^') {
        $('#guideMsgIndex').text('Ohoho Chào Neko, một old player chính hiệu nhỉ. Tiếc rằng trang web này không đẩy đủ như wiki JP, nhưng cũng cô đọng lại những thứ cần thiết là đủ rồi!');
    } else if (username === 'kira' || username === 'tasran' || username === 'tas') {
        $('#guideMsgIndex').text('Ohoho Chào tas một shadow kiêm gla, cám on vì đã bán bộ swim nhé!');
    } else if (username === 'mibu' || username === 'mibutoshiro') {
        $('#guideMsgIndex').text('Ohoho Chào wibu lord, thương nhân nổi tiếng của ae vn! Chúc ô này sớm lấy vợ nhé!');
    } else if (username === 'sweet' || username === 'sweetkatana' || username === 'SweetKatana' || username === 'sw') {
        $('#guideMsgIndex').text('Chào Sweet Katana! Man, tôi vẫn thích bộ swim cổ điểm của ông quá!');
    } else if (username === 'vincent') {
        $('#guideMsgIndex').text('Chào Vincent, chúc ô chăm chỉ cố gắng full train và max đồ nhé hehe, đồng râm final fantasy!');
    } else {
        notDetectiveUser();
    }
}

function notDetectiveUser() {
    let randGuide2 = Math.floor(Math.random() * 3);
    let refuseAnswer = ['Đây là ai thế? Hmmm... Có lẽ tôi chưa gặp bao giờ chăng? Nghiêm túc nhập lại nào!', 'Ai vậy trời! Nghiêm túc nói lại nào!'];
    $('#guideMsgIndex').html(refuseAnswer[randGuide2] + '<br> <input class="form-control border-success" id="username" type="text" placeholder="Tên Nhân Vật Ingame của bạn?"><br>\n' +
        '<button class="btn btn-warning form-control" id="confirmUsername" onclick="queryUsername()">Là tôi nè!</button>');
}
