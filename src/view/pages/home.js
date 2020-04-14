export default () => {
    const homePage = `
    <main class="main-container"></main>
    <div class = "content">    

    <div class="logo">
        <h1 class="text-logo">Plant Lovers</h1>
        <img src="/src/images/plantLoverCute.jpg" alt="Logo"  width="50%" height="70%">
    </div>
        <h2 class="title f-open">Bienvenidx</h1>
        <h3 class="f-open sub-title">Slogan sobre plantas</h3>

        <button class="f-open cta-start"><a href="#/signup">Sign up</a></button>
        <button class="f-open cta-start"><a href="#/signin">Sign In</a></button>
   
    </div>
    `

    const divHome = document.createElement("div");
    divHome.innerHTML = homePage;

    return divHome;
}



