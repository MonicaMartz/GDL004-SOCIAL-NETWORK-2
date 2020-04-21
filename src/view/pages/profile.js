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
<div class="profile-container">
    <div class ="content-user">
    
        <div class="titulo-perfil">
            <h2>P l a n t  L o v e r</h2>
        </div>

        <div class ="emailUser">
            <p>${user.email}</p>
        </div>


        <div class="botones-perfil"
            <button id="profile" class="botones-perfil2"><a href="#/general">General</a></button>
            <button id="closed" class="botones-perfil2">Cerrar Sesión</button>      
        </div>

        <form class= "profileForm" id="profileForm">
            <label for="toPost">Cuentanos</label>
            <input name="post" type="text" id="post" placeholder="Que nos quieres compartir"/>
            <button type="submit" id="send">Enviar</button>
        </form>

        <div id="edittext" class="espacio-editar">
            <label for="editText">¿Cambiaste de idea?</label>
            <input name="editText" type="text" id="edittx" placeholder="¿Qué modificaremos?"/>
            <button id="cambios">Cambios</button>
        </div>

        <div id="table" class="table">
        </div>

    </div>
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