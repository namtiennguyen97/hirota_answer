let input = '';
let answer = 'Hello';
const date = new Date();
let introductionAnswer = ['Chào mừng'];

// setTimeout(function (){
//     // document.write(date.getDate() + "/" + (date.getMonth() + 1) +  "/" + date.getFullYear() );
//     run();
// },1000);

let startingChatTime = 1;
function run(){
   setInterval(function(){
         startingChatTime++;
         $('#countingTime').text(startingChatTime);
    },1000);
}
run();

function makeAnswer(){
    let answer = document.getElementById('answerInput').value;

    const subAnswer =
        //question about chick
        answer.includes('chick') || answer.includes('red chick') || answer.includes('chick do') || answer.includes('bay mau')
        answer.includes('gà') || answer.includes('gà vàng') || answer.includes('thời gian') || answer.includes('thoi gian') ||
        answer.includes('ga') || answer.includes('ga vang') || answer.includes('khi nao') || answer.includes('khi nào') ||
        answer.includes('hunt chick') || answer.includes('chick time') || answer.includes('location') || answer.includes('có ở chỗ nào') ||
        answer.includes('spawm') || answer.includes('chick drop') || answer.includes('chick color') || answer.includes('color') ||
        answer.includes('chick') || answer.includes('time') || answer.includes('color chick') || answer.includes('color') ||
        answer.includes('gold coin bag') || answer.includes('gold') || answer.includes('keys') || answer.includes('key') ||
        answer.includes('kiem gold') || answer.includes('color') || answer.includes('scandium') || answer.includes('cuong hoa');

    // end of question about chick
        if (subAnswer){
            $('#guideMsgIndex').html("Ý của bạn là những vấn đề liên quan đến hunt chick hoặc nguyên liệu của chick?<div><button class='btn btn-success'>Đúng vậy?</button><button class='btn btn-danger'>Không phải vậy.</button></div>");
        }
        else {
            $('#guideMsgIndex').text('Không hiểu....');
        }

}





