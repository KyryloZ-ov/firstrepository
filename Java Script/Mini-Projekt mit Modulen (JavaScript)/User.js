// KOMPONENTE: Zeigt einen Benutzer im HTML an
export function User(user) {
    return `
        <div>
            <h3>${user.name}</h3>   <!-- Name -->
            <p>${user.email}</p>    <!-- E-Mail -->
        </div>
    `;
}