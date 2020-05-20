let arr_type = ['♠', '♥', '♦', '♣'],
arr_num = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

class Card{
    constructor(__cardType, __cardNumber){
        this.cardType = __cardType;
        this.cardNubmer = __cardNumber;
    }

    makeCard(){
        let text = document.getElementById('container').innerHTML;
        let temp = `<div class="flip-container" ontouchstart="this.classList.toggle('hover');"><div class="flipper"><div class="front"></div><div class="back"><span class="card_name">${this.cardNubmer}</span><span class="card_type">${this.cardType}</span><span class="card_name-mod">${this.cardNubmer}</span></div></div></div></div>`;

        temp = text + temp;
        document.getElementById('container').innerHTML = temp;
    }
}


for(let i of arr_type){
    console.log(i);
    for(let j of arr_num){
        console.log(i, j);
        let card = new Card(i, j);
        card.makeCard();
    }
}
