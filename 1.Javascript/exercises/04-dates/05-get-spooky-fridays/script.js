/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){
    let year = new Date(document.getElementById("year").value + 'january' + 13);
    let option = {
        month: "long",
      };
    for (let i = 0; i < 12; i++) {
        year.setMonth(i);
        if (year.getDay() == 5) {
            let month = year.toLocaleString('fr-FR', option);
            alert("Vendredi 13 en " + month);
        }
    }
    });
})();
