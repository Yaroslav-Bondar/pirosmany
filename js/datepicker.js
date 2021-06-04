// https://github.com/Pikaday/Pikaday
var picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    i18n: {
        previousMonth: '',
        nextMonth: '',
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        weekdaysShort: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    },
    showDaysInNextAndPreviousMonths: true, 
});
picker.show()


