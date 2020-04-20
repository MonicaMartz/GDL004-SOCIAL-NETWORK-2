export default () => {
    const homePage = `
    <div class="main-container">
        <div class = "content"> 

            <div class="plantlover">
                <h2 class="text-logo">Plant Lover</h2>
                <h4 class="slogan">Comunidad que florece</h4>
            </div>

            <div class="logo">
                <img src="/src/images/logo.png" alt="LogoPlantLover"  width="75" ">
            </div>

            <div class ="welcome">
            <h3 class="titlen">Bienvenidx</h3>
            </div>
            
            <div class="buttons">
            <h5>¿Eres nuevo?</h5>
            <button class="button-Sign"><a href="#/signup">Sign up</a></button>
            <h5>Ingresa</h5>
            <button class="button-SignUp"><a href="#/signin">Sign In</a></button>
            </div>

        </div>
    <div class="footer">Copyrigth 2020 Mónica MartSosa</div>
    </div>
    `

    const divHome = document.createElement("div");
    divHome.innerHTML = homePage;

    return divHome;
}



