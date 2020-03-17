document.addEventListener('DOMContentLoaded', ()=>{
    const templateCard = document.querySelector('#templateCard'),
          wrappCards = document.querySelector('.card');
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(res=>renderCards(res));

    function renderCards(res) {
        for( let item of res.cards){
            let clone = document.importNode(templateCard.content ,true)
            clone.querySelector('.card__price')
                .getElementsByTagName('span')[1].textContent = item.price + ' Rub';
            clone.querySelector('.card__name').textContent = item.title;
            clone.querySelector('.card__image').firstElementChild.srcset = item.pic;
            clone.querySelector('.card__image').getElementsByTagName('img').src = item.imageDefault;
            clone.querySelector('.card__name').getElementsByClassName('time').textContent = item.time;
                if(item.oldPrice){
                    clone.querySelector('.card__price-old').lastChild.textContent = item.oldPrice
                }else{
                    clone.querySelector('.card__price-old').innerHTML='';
                }
                if(item.mark && item.mark === 'hits'){
                    clone.querySelector('.card__mark').textContent = item.mark;
                }else if(item.mark && item.mark === 'sale'){
                    clone.querySelector('.card__mark').classList.remove('card__mark-blue')
                    clone.querySelector('.card__mark').classList.add('card__mark-red')
                    clone.querySelector('.card__mark').textContent = item.mark;
                }else{
                    clone.querySelector('.card__mark').remove();
                }
            wrappCards.appendChild(clone)
        }
    }
});

