window.document.addEventListener('DOMContentLoaded', () => {

    render();


    async function getData() {
        const response = await fetch('./fakeData.json')
        return response.json();
    }

    async function render() {
        const data = await getData();
        const card = document.querySelector('.card');

        data.cards.forEach(item => card.insertAdjacentHTML('beforeend', generateTemplate(item)))
    }

    function generateTemplate(item) {
        console.log(item)
        return document.createDocumentFragment().textContent =
            `
                    <li class="catalog__elem card__item">
                            <span class="card__mark card__mark-blue">${item.mark}</span>
                        <picture class="card__image" aria-hidden="true" id="image">
                            <source srcset="${item.pic}" media="(min-width: 1200px)">
                            <img src="${item.image}" alt="Берег анапы">
                            </picture>
                        
                            <div class="card__text">
                            <button class="card__btn">
                            <strong class="card__name">
                            ${item.title}
                        </strong>
                        <span aria-label="Нажмите чтобы выбрать круиз"></span>
                            </button>
                        
                            <div class="card__description">
                            <b> Маршрут: </b> <p class="text"> ${item.text}</p>
                        <b>Продолжительность:</b> <p class="time"> ${item.time}</p>
                        </div>
                        
                        </div>
                        
                        <strong class="card__price"  title="price">
                            <span aria-label="актуальная цена"></span>
                            <span>${item.price} Р</span>
                        </strong>
                        <s class="card__price-old"  title="old price">
                            <span aria-label="старая цена">${item.oldPrice ? item.oldPrice : ''}</span>
                        </s>
                    </li>
                `
    }


});
