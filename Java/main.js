$(document).ready(function () {
    //var for days of week
    const CalDays = [];
    const StartWeek = moment().startOf('week').toString();
    const EndWeek = moment().endOf('week').toString();
    // const MomentToday;
    const MomentCalFormat = moment().format('ddd');
    //for each day of the week, add a td for in the calendar 
    moment.weekdaysShort().forEach(function(Day) {
        const CalDaysTd = $(`
        <td>${Day}</td>
        `);
        $(CalDaysTd).appendTo("#CalDaysTd");
    });
    //momentjs the week so calandar knows the dates
    

    console.log(StartWeek);
    console.log(EndWeek);
    console.log(moment.weekdaysShort())
});