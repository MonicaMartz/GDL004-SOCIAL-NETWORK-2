export default (user) => {
    console.log(user);

const general = `
    <h1>Red social</h1>
    <header>
            <nav>
                <ul>
                    <li>
                        <p>${user.email}<p>
                    </li>
                    <li>
                        <p> Red social</p>
                    </li>
                    <li>
                    <button id="closed">Cerrar Sesión</button>
                    <button id="profile"><a href="#/perfil">Perfil</a></button>
                    </li>
                </ul>
            </nav>
        </header>
        
        <div id="tableGeneral">
        </div>`
        
        const divGeneral = document.createElement("div");
        divGeneral.innerHTML = general;

        return divGeneral;
}