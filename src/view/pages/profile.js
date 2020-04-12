/*export default (user) => {
    console.log(user);
    
    const barramenu = document.createElement("nav");
    barramenu.setAttribute("class", "header");
    const socialnetwork =document.createElement("h1");
        socialnetwork.innerHTML="Social Network";
    const welcome = document.createElement("h2");
        welcome.innerHTML="Bienvenido";
    const nameUser =document.createElement("p")
         nameUser.innerHTML= '${user.email}'
    const buttonExit = document.createElement("button");
        buttonExit.innerHTML ="Salir";
        buttonExit.setAttribute("id", "exitbutton");
        barramenu.appendChild(socialnetwork);
        barramenu.appendChild(welcome);
        barramenu.appendChild(nameUser);
        barramenu.appendChild(buttonExit)

    
    const containerPost = document.createElement("div");
    containerPost.setAttribute("id", "containerPost");

    const title = document.createElement("h3");
        title.setAttribute("id", "titlePost");
        title.innerHTML="Tus posts";

    const posttable = document.createElement("div") 
    posttable.setAttribute("id", "table");
     
    containerPost.appendChild(title);
    containerPost.appendChild(posttable);

    const profile = document.createElement("div");
    profile.setAttribute("class","profile");

    profile.appendChild(barramenu);
    profile.appendChild(containerPost);

    document.body.appendChild(profile);
    return profile;
}

*/





export default (user) => {
    console.log(user);

const profileUser = `
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
                        <button id="closeSesion">Cerrar Sesión</button>
                    </li>
                </ul>
            </nav>
        </header>
        <form class= "profileForm" id="profileForm">
        <label for="toPost">Publica</label>
        <input name="post" type="text" id="post" placeholder="Que nos quieres compartir"/>
        <button type="submit" id="send">Enviar</button>
        </form>

        <div id="edittext">
        <label for="editText">¿Cambiaste de idea?</label>
        <input name="editText" type="text" id="edittx" placeholder="¿Qué modificaremos?"/>
        <button id="send"> Cambios</button>
        </div>

        <div id="table">
        </div>`

    const divProfile = document.createElement("div");
    divProfile.innerHTML = profileUser;
    
    return divProfile;
}

/*
<table>
   <tr> 
    <th>Id</th>
    <th>POST</th>
    <th>EDITAR</th>
    <th>ELIMINAR</th>
    
    </tr>
    <tbody id="table">
    </tbody>
    </table>*/