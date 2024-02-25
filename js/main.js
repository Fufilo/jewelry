window.addEventListener('click', function(event){  /* добавляем ивент клика по окну браузера */
    const counterWrap = event.target.closest('.cart__count');       /* находим родительский блок */
    const counter = counterWrap.querySelector('[data-counter]');
    if (event.target.dataset.action === 'plus') {   /* если мы кликаем по кнопке с дата-атрибутом action со значением "plus" */
        counter.innerText = ++counter.innerText;    /* обращаемся к внутриннему тексту с помощью innerText  */
    };
    if (event.target.dataset.action === 'minus') {  /* если мы кликаем по кнопке с дата-атрибутом action со значением "minus" */
        if (parseInt(counter.InnerText > 1)) {  /* переводим счётчик из строчного типа в числовой и проверяем, больше ли единицы число */
            counter.innerText = --counter.innerText;
        };
    };
});

/* добавление товара в корзину */
