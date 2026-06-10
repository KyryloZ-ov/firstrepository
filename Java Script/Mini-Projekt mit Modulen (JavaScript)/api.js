// MODUL: Holt Daten von der API
export async function getUsers() {
    // Anfrage an die API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // Daten in JSON umwandeln
    const users = await response.json();
    // Daten zurückgeben
    return users;
}
