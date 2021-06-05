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
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        let day = date.getDate();
        if(day.toString().length < 2) day = '0' + day    // convert to the format that the browser needs
        let month = date.getMonth() + 1;
        if(month.toString().length < 2) month = '0' + month
        const year = date.getFullYear();
        // return `${day}/${month}/${year}`;
        return `${year}-${month}-${day}`;      // convert to the format that the browser needs
    },
});
picker.show()


