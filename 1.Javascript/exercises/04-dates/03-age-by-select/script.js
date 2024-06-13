/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        const date = new Date();
        let d1 = date.getDate();
        let m1 = date.getMonth();
        let y1 = date.getFullYear();
        let naissance = new Date(document.getElementById("dob-month").value + " " + document.getElementById("dob-day").value + ", " + document.getElementById("dob-year").value);
        let d2 = naissance.getDate();
        let m2 = naissance.getMonth();
        let y2 = naissance.getFullYear();
        let y3 = y1 - y2;
        let m3;
        if(m1 >= m2){
            m3 = m1 - m2;
        } else {
            y3--;
            m3 = 12 + m1 - m2;
        }
        let d3;
        if(d1 >= d2){
            d3 = d1 - d2;
        }
        else{
            m3--;
            d3 = getDaysInMonth(y2, m2) + d1 - d2;
        }
        if(m3 < 0) {
            m3 = m3 + 12;
            y3--;
        }
        alert("Tu es sur Terre depuis " + d3 + " jours, " + m3 + " mois et " + y3 + " années!");
    });
})();
