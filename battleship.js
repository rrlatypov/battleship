/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var quess;
var hits = 0;
var quesses = 0;
var isSunk = false;

while (isSunk == false) {
    quess = prompt("Твой выстрел, командир! (введите число от 0 до 6) :");
    
    if (quess == 0 || quess == 1 || quess == 2 || quess == 3 || quess == 4 || quess == 5 || quess == 6 ) {
        quesses = quesses + 1;
        if (quess == location1 || quess == location2  || quess == location3 ) {
            alert("Есть попадание!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Победа за нами, командир!");
            }

        } else {
            alert("Вне цели! Нужно быть точнее, командир! Давай еще раз!");
        }
        
        } else {
            alert("Будь внимателен, командир! Введи число от 0 до 6!");
           
        }
}
var stats = "Количество попыток равна " + quesses + ". Точность попаданий равна " + (3/quesses);
alert(stats);
}
)