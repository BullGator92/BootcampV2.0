$(document).ready(function () {
    //var for days of week
    const Sunday = moment().startOf('week').toString();
    const Monday = moment().startOf('week').add(1, 'day').toString();
    const Tuesday = moment().startOf('week').add(2, 'day').toString();
    const Wednesday = moment().startOf('week').add(3, 'day').toString();
    const Thursday = moment().startOf('week').add(4, 'day').toString();
    const Friday = moment().startOf('week').add(5, 'day').toString()
    const Saturday = moment().endOf('week').toString();
    const CalDays = [Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday];
    
    // const Today = moment().format('ddd MMM Do')
    // const Tomorrow =  moment().add(1, 'day').format('ddd MMM Do')
    // const MomentToday;
    const MomentCalFormat = moment().format('ddd MM Do');
    //for each day of the week, add a td for in the calendar 
    CalDays.forEach(function(Day) {
        const CalDaysTd = $(`
        <td>${Day}</td>
        `);
        $(CalDaysTd).appendTo("#CalDaysTd");
    });
    //momentjs the week so calandar knows the dates
    

    console.log(Sunday);
    console.log(Monday);
    console.log(Saturday);
});