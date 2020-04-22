export default () => {
    const viewDifferent = `
<div class="noencontrado-container">
    <div class="no-encontrado">
            <h1>404</h1>
            <h1>Página no encontrada</h1>
            <p>El archivo especificado no se encontró en este sitio web.<br> Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
    </div> 
</div>     
            `;

    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewDifferent;
    return divElemt;
};