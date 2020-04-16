export default () => {
    const homePage = `
    <div class="main-container"></main>
     <div class = "content">    
        <div class="logo">
            <h2 class="text-logo">Plant Lover</h2>
            <h4 class="slogan">Comunidad que florece</h4>
            <img src="/src/images/logo.png" alt="Logo"  width="50%" ">
        </div>
        <div class ="welcome">
        <h3 class="titlen">Bienvenido</h3>
        
        </div>
        <button class="button-Sign"><a href="#/signup">Sign up</a></button>
        <button class="button-SignUp"><a href="#/signin">Sign In</a></button>
   
    </div>
    <div class="footer">Copyrigth 2020 Mónica MartSosa</div>
    </main>
    `

    const divHome = document.createElement("div");
    divHome.innerHTML = homePage;

    return divHome;
}



