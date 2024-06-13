/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let reponse = prompt('Est-ce que tu veux du gateau?');
    if (reponse == 'oui' || reponse == 'OUI' || reponse == 'Oui') {
        alert("C'est la bonne réponse!")
    } else {
        alert("Non, on ne refuse pas du gateau si bon et agréable pour tes papilles")
    }
})();
