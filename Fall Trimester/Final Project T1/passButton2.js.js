/*this function should launch a prompt when a button is clicked. If the user correctly names on of the four buildings at Horace Mann, they will be able to email a creator of this webpage*/
function keyWord2 () {
var possWords = ["phorzheimer", "fisher", "tillinghast", "rose"];
answer = prompt("Name one building on the Horace Mann campus. (Include only the first name, without the hall at end)");
answerNew = answer.toLowerCase();

for (i = 0;i<possWords.length;i++) {

if (answerNew === possWords[i]) {
window.location.href = "mailto:audrey_shapiro@horacemann.org?subject=About%20Your%20Website";
return;
}}
//if user response does not match any array values, it exits loop and gives alert
alert("That is incorrect, I believe. Make sure you spelled it correctly.");
}
