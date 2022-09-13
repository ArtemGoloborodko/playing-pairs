
    //Выбираем все переменные с нужным нам классом, где спрятались карточки
    let cards = document.querySelectorAll('.card_open');

    // присваиваем переменные где изначально открытые карты и переворачивание ложные, не выполняется ничего 
    let hasFlipCard = false;
    let openCard = false;
    let firstCard, nextCard;

    let dubleCard = 0;
    let allDible = 8;

    let winner = document.querySelector('.winner')// кнопка победителя
    let btn = document.querySelector('.btn_plus') //кнопка перемешивания
    
    //Пишем функцию на переворачиваине карточки 
    function flipCard (targetCard) {

        
        if(openCard) return; //усли карточка не перевернута, то мы ее не трогаем 
        if(targetCard === firstCard) return; //усли перевернутая карточка ровна картоке один (обложка), то ничего не происходит

        targetCard.classList.add('flip'); //добавляем к нашему классу с карточками класс перевертывания

        if (!hasFlipCard) { //условие. Если Карточка перевернута, то она правда, и теперь первая карточка ровна той которая повернулась завершаем действие 
            hasFlipCard = true;
            firstCard = targetCard;
            return;
        }
        
        nextCard = targetCard; 
        openCard = true; //и открытая карточка это правда

        checkForMatch() // выполняем функцию сравнения 
    }


    btn.addEventListener('click', function shuffle() { // перемешиваем карты
        setTimeout(() => {   cards.forEach(card => { // делам так чтобы они перемешивались с задержкой и карты которые были перевернуты не показывались
         let ramdomPos = Math.floor(Math.random() * 12);
         card.style.order = ramdomPos;
         })}, 1000)
         
         cards.forEach(cloce => {
             cloce.classList.remove('flip');
         });

         dubleCard = 0;
         
     }) 
     

    function checkForMatch () { //сравниваем с усовием по дата ай ди  

        let isMatch = firstCard.dataset.cards === nextCard.dataset.cards; //карта один ровна карте два выполняем функцию остановки карточек иначе продолжаем 

        if (isMatch === true) {
            disableCards();
            dubleCard++;

            if (allDible === dubleCard) {
                setTimeout(() => {

                    winner.classList.add('winner_open')

                }, 500)
               
                return
            }
            console.log(dubleCard)

        } else {
            unFlipCards();
        }  
            
    } 
    


    function disableCards () { //убираем обработчик событий с нужных нам карт и теперь они не активны 
        firstCard.removeEventListener('click', flipCard)
        nextCard.removeEventListener('click', flipCard)

        resetCards();
        
        
    }

    function unFlipCards () { //если карты не совпали, то они закрываются через 1,5 секунды
        openCard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            nextCard.classList.remove('flip');

           resetCards();
        }, 1500)
    }  


      function resetCards () { //сброс карт делаем через массив который равен 
        [hasFlipCard, openCard] = [false, false];
        [firstCard, nextCard] = [null, null];
    
    }

      

    cards.forEach(card => card.addEventListener('click', function(e) {
        flipCard(this);
    
        
    }));



    let btnWinner = document.querySelector('.btn_winner'); //кнопка Сыграть еще перемешывает и закрывает карточки

    btnWinner.addEventListener('click', function () {
        winner.classList.remove('winner_open');

        setTimeout(() => {   cards.forEach(card => { // делам так чтобы они перемешивались с задержкой и карты которые были перевернуты не показывались
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
            })}, 1000)
       
             cards.forEach(cloce => {
                 cloce.classList.remove('flip');
             });

             dubleCard = 0;
             
    });
    

    //выбираем уровень игры 
    // открываем карточки 

    let cardsLevel16 = document.querySelectorAll('.level_16')
    let levelCards = document.querySelector('.Level_up_16');
    let cardWidth = document.querySelectorAll('.card_open')

     levelCards.addEventListener('click', function () {

        cardsLevel24.forEach(cardLevel24 => {
            cardLevel24.classList.remove('card_level_cloce');
});

        cardsLevel16.forEach(cardLevel16 => {
            cardLevel16.classList.add('card_level_cloce');

            cardWidth.forEach(width => {
                width.classList.add('card_width');

            });


        });
        allDible = 16;
        
     });

     let cardsLevel8 = document.querySelectorAll('.level_8')
     let levelCards8 = document.querySelector('.Level_up_8');

     levelCards8.addEventListener('click', function () {

        cardsLevel24.forEach(cardLevel24 => {
                        cardLevel24.classList.remove('card_level_cloce');
        });

        cardsLevel16.forEach(cardLevel16 => {
            cardLevel16.classList.remove('card_level_cloce');

            cardWidth.forEach(width => {
                width.classList.remove('card_width');

            });
            allDible = 8;

        });
    });
        
     let cardsLevel24 = document.querySelectorAll('.level_24')
     let levelCards24 = document.querySelector('.Level_up_24');

     levelCards24.addEventListener('click', function () { 
        
        cardsLevel24.forEach(cardLevel24 => {
            
             cardLevel24.classList.add('card_level_cloce');

                 cardWidth.forEach(width => {
                    width.classList.add('card_width');
                    });

                    cardsLevel16.forEach(cardLevel16 => {
                    cardLevel16.classList.add('card_level_cloce');
                    });

                    allDible = 24;
          });

         });

