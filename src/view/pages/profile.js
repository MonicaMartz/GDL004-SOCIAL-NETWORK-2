
export default (user) => {
    console.log(user);

const profileUser = `
<div class="profile-container">
    <div class ="content-user">
    
        <div class="titulo-perfil">
            <h2>P l a n t  L o v e r</h2>
        </div>


        
        <div class="profile-image">
        <img src="/src/images/logo.png" alt="LogoPlantLover"  width="75" ">
        </div>
        <div class ="emailUser">
            <p>${user.email}</p>
        </div>


        <div class="botones-perfil">
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