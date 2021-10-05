

const date = new Date();
let introductionAnswer = ['Chào mừng đến với góc hỏi đáp Hirota AI'];

// setTimeout(function (){
//     // document.write(date.getDate() + "/" + (date.getMonth() + 1) +  "/" + date.getFullYear() );
//     run();
// },1000);

let startingChatTime = 1;

function run() {
    setInterval(function () {
        startingChatTime++;
        $('#countingTime').text(startingChatTime);
    }, 1000);
}
run();
let randGuide2 = Math.floor(Math.random() * 2);
let unknownMsg = ['Không thể hiểu.. vui lòng nói lại.','Có thể vấn đề bạn nói nằm ngoài game Izanagi, hãy nói lại.'];
// start function answer
function makeAnswer() {
    let answer = document.getElementById('answerInput').value;
        //question about chick
    if ( answer.includes('chick') || answer.includes('ga') || answer.includes('gà') || answer.includes('kiem gold')) {
        $('#guideMsgIndex').html("Ý của bạn là những vấn đề liên quan đến hunt chick hoặc nguyên liệu của chick?<div><button id='chickQuestionConfirm' onclick='chickAnswer()' class='btn btn-success'>Đúng vậy?</button><button onclick='refuseAnyAnswer()' class='btn btn-danger'>Không phải vậy.</button></div>");
    }
    // end of question about chick

    //question about monster
    else if (answer.includes('monster') || answer.includes('quái') || answer.includes('quai') || answer.includes('mobs') || answer.includes('mob')){
        $('#guideMsgIndex').html("Ý của bạn là những vấn đề liên quan đến các loại quái và boss?<div><button id='monsterQuestionConfirm' onclick='monsterAnswer()' class='btn btn-success'>Đúng vậy?</button><button onclick='refuseAnyAnswer()' class='btn btn-danger'>Không phải vậy.</button></div>");
    }
    //end of question about monster

    else if (answer.includes('test') || answer.includes('mid') || answer.includes('second class') || answer.includes('tron tim') || answer.includes('hide and seek')){
        $('#guideMsgIndex').html("Ý của bạn là những vấn đề liên quan đến nhiệm vụ chuyển class Mid test?<div><button id='midtestQuestionConfirm' onclick='midTestAnswer()' class='btn btn-success'>Đúng vậy?</button><button onclick='refuseAnyAnswer()' class='btn btn-danger'>Không phải vậy.</button></div>");
    }
    else if (answer.includes('avatar') || answer.includes('ava') || answer.includes('yukata') || answer.includes('vest') || answer.includes('kabuki')){
        $('#guideMsgIndex').html("Ý của bạn là những vấn đề liên quan đến các loại ava, vậy nếu đúng thì ý của bạn là cái nào sau đây?<div><button  onclick='avatarDropAnswer()' class='btn btn-success'>Xem các loại boss drop avatar gì?</button><button  onclick='avatarDropAnswer()' class='btn btn-warning'>Xem các loại Avatar có trong game?</button><button onclick='refuseAnyAnswer()' class='btn btn-danger'>Không phải vậy.</button></div>");
    }
    else {
        $('#guideMsgIndex').text(unknownMsg[randGuide2]);
    }

}

function refuseAnyAnswer(){
        $('#guideMsgIndex').text('Ok, vậy hãy nói lại ý của bạn!');
}
function monsterAnswer(){
    $('#guideMsgIndex').text('Không thể liệt kê được tổng số lượng quái hiện có trong game, vì đó là số lượng quá nhiều, mà AI vô dụng này không biết hết!');
}






