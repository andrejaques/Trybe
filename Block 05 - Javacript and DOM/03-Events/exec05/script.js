function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const weekDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        dayListItem.className = 'day';

        if (days === 24 || days === 25 || days === 31) {
            dayListItem.className += ' ' + 'holiday';
        }
        
        if (days === 4 || days === 11 || days === 18 || days === 25) {
            dayListItem.className += ' ' + 'friday';
        }

        weekDaysList.appendChild(dayListItem);
    };
};

function createFeriadoButton() {
    let feriadoButton = document.createElement('button');
    let buttonsContainer = document.querySelector('.buttons-container');
    feriadoButton.id = 'btn-holiday';
    feriadoButton.innerHTML = 'Feriados';
    buttonsContainer.appendChild(feriadoButton);
}



createDaysOfTheWeek();
createDays();
createFeriadoButton();
