var today = new Date();
var today = new Date( '2011/07/29');
var weekDay = "日月火水木金土";
var year = today.getFullYear();
var month = today.getMonth() + 1;
var startDate = new Date(year, month - 1, 1);
var endDate = new Date(year, month, 0);
var endDayCount = endDate.getDate();
var startDay = startDate.getDay();
var lastMonthEndDate = new Date(year, month - 1, 0);
var lastMonthEndDay = lastMonthEndDate.getDate();
var calendarDate = 1;
/*
document.write('StartDate: ' + startDate + '<br>');
document.write('endDate: ' + endDate + '<br>');
document.write('endDayCount: ' + endDayCount + '<br>');
document.write('startDay: ' + weekDay[startDay] + '<br>');

var voll = document.getElementById("fullmessage");
voll.innerHTML = today;
var jaar = document.getElementById("years");
jaar.innerHTML = today.getFullYear();
var maand = document.getElementById("months");
maand.innerHTML = today.getMonth() + 1;
var dag = document.getElementById("days");
dag.innerHTML = today.getDate();
var weekdagen = document.getElementById("date");
weekdagen.innerHTML = weekDay[today.getDay()];
*/

document.write('<table>');

//Header Part: days of the week
document.write('<tr>');
for (let i = 0; i < weekDay.length; i++) {
  document.write('<th>' + weekDay[i] + '</th>');
}
document.write('</tr>');

//Body part: Calendar days
document.write('<tr>');
// Draw an outer frame of calendar
for (let wm = 0; wm < 6; wm++) {
  // Make inner frame of calendar
  for (let w = 0; w < weekDay.length; w++) {
//    document.write('<td>');
    var tagTable = '<td';
    // Before the first day of this month
    if (wm == 0 && w < startDay) {
      var num = lastMonthEndDay - startDay + w + 1;
      tagTable += ' id=is_disabled>';
      tagTable += num;
    } else if (calendarDate > endDayCount) {
      num = calendarDate - endDayCount;
      tagTable += ' id=is_disabled>' + num;
      calendarDate++;
    } else {
      tagTable += '>' + calendarDate;
      calendarDate++;
    }
    document.write(tagTable);
    if (w == 6) {
      document.write('</tr>');
    }
  }
}
document.write('</table>');
