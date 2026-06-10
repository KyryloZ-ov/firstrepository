import { getUsers } from './api.js';   // Modul importieren
import { User } from './User.js';      // Komponente importieren
// Daten von der API holen
getUsers().then(users => {
    let html = '';
    // für jeden Benutzer
    users.forEach(user => {
        // Komponente erzeugt HTML
        html += User(user);
    });
    // HTML im Browser anzeigen
    document.getElementById('app').innerHTML = html;
});
