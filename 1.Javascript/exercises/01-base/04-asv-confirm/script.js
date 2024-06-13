/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let age = prompt("Quel est ton âge?");
    let sexe = prompt("Quel est ton sexe?");
    let ville = prompt("Dans quelle ville es-tu né?");
    while (confirm('Tu as ' + age + ' ans. Tu es de sexe ' + sexe +'. Tu es né dans la ville de ' + ville + '. Est-ce que tu confirmes ces informations?') == false) {
    age = prompt("Quel est ton âge?");
    sexe = prompt("Quel est ton sexe?");
    ville = prompt("Dans quelle ville es-tu né?");
    }
})();
