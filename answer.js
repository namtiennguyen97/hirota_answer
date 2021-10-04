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
        answer.includes('chick') || answer.includes('red chick') || answer.includes('chick do') || answer.includes('chick bay mau')
        answer.includes('gà') || answer.includes('gà vàng') || answer.includes('thời gian') || answer.includes('thoi gian') ||
        answer.includes('ga') || answer.includes('ga vang') || answer.includes('khi nao') || answer.includes('khi nào') ||
        answer.includes('color chick') || answer.includes('color') || answer.includes('color chick') || answer.includes('color') ||
        answer.includes('color chick') || answer.includes('color') || answer.includes('color chick') || answer.includes('color') ||
        answer.includes('color chick') || answer.includes('color') || answer.includes('color chick') || answer.includes('color') ||
        answer.includes('color chick') || answer.includes('color') || answer.includes('color chick') || answer.includes('color') ||
        answer.includes('color chick') || answer.includes('color') || answer.includes('color chick') || answer.includes('color');

    // end of question about chick
        if (subAnswer){
            $('#guideMsgIndex').text('ok');
        }
        else {
            $('#guideMsgIndex').text('ok then...');
        }

}





