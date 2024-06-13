/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let arr = [];
        function randomAdd () {
            let int = Math.floor(Math.random() * 100);
            arr.push(int);
            return(int);
        }
        document.getElementById("n-1").innerHTML = randomAdd();
        document.getElementById("n-2").innerHTML = randomAdd();
        document.getElementById("n-3").innerHTML = randomAdd();
        document.getElementById("n-4").innerHTML = randomAdd();
        document.getElementById("n-5").innerHTML = randomAdd();
        document.getElementById("n-6").innerHTML = randomAdd();
        document.getElementById("n-7").innerHTML = randomAdd();
        document.getElementById("n-8").innerHTML = randomAdd();
        document.getElementById("n-9").innerHTML = randomAdd();
        document.getElementById("n-10").innerHTML = randomAdd();
        document.getElementById("min").innerHTML = arr.reduce(function(a, b) {
            return Math.min(a, b);
        });
        document.getElementById("max").innerHTML = arr.reduce(function(a, b) {
            return Math.max(a, b);
        });
        document.getElementById("sum").innerHTML = arr.reduce(function(a, b) {
            return a + b;
        });
        document.getElementById("average").innerHTML = Math.floor(arr.reduce(function(a, b) {
            return a + b;}) / 10) ;
    });
})();
