/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let opOne = parseFloat(document.getElementById("op-one").value);
        let opTwo = parseFloat(document.getElementById("op-two").value);
        alert('La réponse est ' + (opOne + opTwo) + '!');
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let opOne = parseFloat(document.getElementById("op-one").value);
        let opTwo = parseFloat(document.getElementById("op-two").value);
        alert('La réponse est ' + (opOne - opTwo) + '!');
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let opOne = parseFloat(document.getElementById("op-one").value);
        let opTwo = parseFloat(document.getElementById("op-two").value);
        alert('La réponse est ' + (opOne * opTwo) + '!');
    });

    document.getElementById("division").addEventListener("click", () => {
        let opOne = parseFloat(document.getElementById("op-one").value);
        let opTwo = parseFloat(document.getElementById("op-two").value);
        if (opOne == 0 || opTwo == 0) {
            alert('On ne peut pas diviser par 0! Erreur!');
        } else {
            alert('La réponse est ' + (opOne / opTwo) + '!');
        }
    });
})();
