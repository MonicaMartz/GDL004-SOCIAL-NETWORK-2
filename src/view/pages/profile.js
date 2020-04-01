export default () => {

const profileUser = `
    <h1>Red social</h1>

    <header>
            <nav>
                <ul>
                    <li>
                        <p>Nombre de usuario<p>
                    </li>
                    <li>
                        <p> Red social</p>
                    </li>
                    <li>
                        <button type="submit" id="closeSesion">Cerrar Sesión</button>
                    </li>
                </ul>
            </nav>
        </header>


        <form class= "profileForm" id="profileForm">
   
        <label for="toPost">Publica</label>
        <input name="post" type="text" id="post" placeholder="Que nos quieres compartir"/>
    

        <button type="submit" id="send">Enviar</button>
        
    <table>
   <tr> 
    <th>POST</th>
    <th>Editar</th>
    <th>Eliminar</th>
    </tr>
    <tbody id="table">
    </tbody>

    

    </table>


        
  </form> `


    const divProfile = document.createElement("div");
    divProfile.innerHTML = profileUser;

    return divProfile;
}