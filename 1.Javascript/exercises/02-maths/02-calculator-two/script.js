/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
                let opOne = parseFloat(document.getElementById("op-one").value);
                let opTwo = parseFloat(document.getElementById("op-two").value);
        switch (operation) {
            case 'addition':
                opOne = parseFloat(document.getElementById("op-one").value);
                opTwo = parseFloat(document.getElementById("op-two").value);
                alert('La réponse est ' + (opOne + opTwo) + '!');
                break;
            case 'substraction':
                opOne = parseFloat(document.getElementById("op-one").value);
                opTwo = parseFloat(document.getElementById("op-two").value);
                alert('La réponse est ' + (opOne - opTwo) + '!');
                break;
            case 'multiplication':
                opOne = parseFloat(document.getElementById("op-one").value);
                opTwo = parseFloat(document.getElementById("op-two").value);
                alert('La réponse est ' + (opOne * opTwo) + '!');
                break;
            case 'division':
                opOne = parseFloat(document.getElementById("op-one").value);
                opTwo = parseFloat(document.getElementById("op-two").value);
                if (opOne == 0 || opTwo == 0) {
                    alert('On ne peut pas diviser par 0! Erreur!');
                } else {
                    alert('La réponse est ' + (opOne / opTwo) + '!');
                }
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
