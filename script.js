let input = document.querySelector('.input'); // Use querySelector to get the first matching element
let check = document.querySelector('.check'); // Use querySelector to get the first matching element
let reset = document.querySelector('.pa'); // Use querySelector to get the first matching element
let h = document.querySelector('.hint'); // Use querySelector to get the first matching element
let num = parseInt(1 + Math.round(100 * Math.random()));
// input = parseInt(input);
let score = 10;
let chances = 4; 
check.addEventListener('click', (e) => {
    if(parseInt(input.value)==num){
        h.innerHTML = `<p> Congrats!<br>You win with Score:${score}/10 <p>`;
        document.querySelector('body').style.backgroundColor = 'green';
    }
    if(parseInt(input.value)<num){
        h.innerHTML = `<p>Try Higher number<p>`;
        if(chances!=0){
            chances--;
        }
        else{
            score--;
        }
    }
    if(parseInt(input.value)>num){
        h.innerHTML = `<p>Try Lower number<p>`;
        if(chances!=0){
            chances--;
        }
        else{
            score--;
        }
    }
});
reset.addEventListener('click', (e) => {
    document.querySelector('body').style.backgroundColor = 'white';
    h.innerHTML = "";
    num = parseInt(1 + Math.round(100 * Math.random()));
    score = 10;
    chances = 4;
})
