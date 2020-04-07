/*export default () => {
    
    const barramenu = document.createElement('nav');
    barramenu.setAttribute('class', 'header');
    const socialnetwork =document.createElement("h1");
        socialnetwork.innerHTML="Social Network";
    const nameUser = document.createElement("h2");
        nameUser.innerHTML="Bienvenido";
    const buttonExit = document.createElement("button");
        buttonExit.innerHTML ="Salir";
        buttonExit.setAttribute("id", "exitbutton");
        barramenu.appendChild(socialnetwork);
        barramenu.appendChild(nameUser);
        barramenu.appendChild(buttonExit)

    
    const containerPost = document.createElement("div");
    containerPost.setAttribute("id", "containerPost");

    const title = document.createElement("h3");
        title.setAttribute("id", "titlePost");
        title.innerHTML="Tus posts";

    const textPost =document.createElement("textarea");
        textPost.setAttribute("id", "textPost");
        textPost.setAttribute("placeholder", "Comparte tus ideas");

    //const buttonSend = document.createElement("button");
        buttonSend.innerHTML ="Enviar";
        buttonSend.setAttribute("id", "sendButton");


    const buttonEdit = document.createElement("button");
      buttonEdit.innerHTML ="Editar";
      buttonEdit.setAttribute("id", "editButton");

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML ="Eliminar";
    buttonDelete.setAttribute("id", "deleteButton");

   

    containerPost.appendChild(title);
    containerPost.appendChild(textPost);
    containerPost.appendChild(buttonSend);
    containerPost.appendChild(buttonEdit);
    containerPost.appendChild(buttonDelete);
    containerPost.appendChild(tabla);

    const profile = document.createElement("div");
    profile.setAttribute("class","profile");

    profile.appendChild(barramenu);
    profile.appendChild(containerPost);

    document.body.appendChild(profile);
    return profile;
}



    

*/

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