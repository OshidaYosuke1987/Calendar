var today = new Date();
var weekDay = "日月火水木金土";
/*
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

document.write('<tr>');
for (let i = 0; i < weekDay.length; i++) {
  document.write('<th>' + weekDay[i] + '</th>');
}
document.write('</tr>');

document.write('<tr>');
for (let w = 0; w < weekDay.length; w++) {
  document.write('<td>' + weekDay[w] + '</td>');
}
document.write('</tr>');
document.write('</table>');
