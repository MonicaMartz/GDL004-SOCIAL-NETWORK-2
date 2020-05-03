export default (user) => {
    //console.log(user);

const general = `
<div class="general-container">
    <div class ="content-general">

        <div class="titulo-perfil-general">
            <h2>P l a n t  L o v e r</h2>
            <button id="profile"><a href="#/profile">Perfil</a></button> 
        </div>
        
        <div class="profile-image">
        <img src="/src/images/logo.png" alt="LogoPlantLover"  width="75" ">
        </div>
        
        <div id="tableGeneral">
        </div>
    </div>
</div>
        `
        
        const divGeneral = document.createElement("div");
        divGeneral.innerHTML = general;

        return divGeneral;
}