export default () => {
    const homePage = `
    <h1>HOME</h1>
    <button><a href="#/signin">Continue</a></button>
    `;

    const divHome = document.createElement("div");
    divHome.innerHTML = homePage;

    return divHome;

}



