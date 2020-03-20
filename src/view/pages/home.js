export default () => {
    const homePage = `
    <h1>HOME</h1>
    
    <button><a href="#/signup">Sign up</a></button>
    <button><a href="#/signin">Sign In</a></button>
    
    `;

    const divHome = document.createElement("div");
    divHome.innerHTML = homePage;

    return divHome;

}



