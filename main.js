const form = document.getElementById('form-formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campA = parseFloat (document.getElementById('camp-a').value);
    const campB = parseFloat (document.getElementById('camp-b').value);

    function diferenteAB(campA, campB) {
        if (campA < campB) {
            alert("O número campo B é maior que o campo A");
        } else {
            alert("O número campo B não é maior que o campo A");
        }
    }

    formValido = diferenteAB(campA, campB)
});