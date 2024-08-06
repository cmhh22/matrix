document.getElementById('blue-pill').addEventListener('click', function() {
    choosePill('blue');
});

document.getElementById('red-pill').addEventListener('click', function() {
    choosePill('red');
});

function choosePill(color) {
    var messageDiv = document.getElementById('message');
    if (color === 'blue') {
        messageDiv.textContent = 'Eliges emigar al extranjero : te conviertes en toda un lider politica en tu comunidad autonoma descubriendo tu pasion innata por la politica y manipulacion de las masas.Haces un carrera excelente y progresista de tal manera q llegas a ser la presidenta de España. Comviertes a Florentino en tu vicepresidente ... y a lo meses se te arruina tu legado politico por corrupcion .Piden q dimitas pero le aplicas la ley Nicolas Maduro . Te hacen un atentado y te dejan sin una oreja . Por lo tanto decides huir a unas islas al caribe con todo el dinero q robaste del Banco de Moneda y Timbre durante tu mandato y con las nalgas echas !!!!. Se le recordo como : Nanda la del Botacaca';
    } else if (color === 'red') {
        messageDiv.textContent = 'Eliges continuar en Cuba: terminas siendo una destacada profesora de Matematicas reconocida por Oslaida pero para sobrevivir te dedicas a vender croquetas. Organizas la mafia de la croqueta convirtiendote en Fernanda de Corleone una familiar pero temida traficante de la "masa prohibida" .Como todo lo bueno tiene su final tu vecino te da un chivatazo y en un intento de salida ilegal con mucho dinero en tu bolso recuerdas q se te olvida algo ....tu fiel y tonta companera de vida : Mila . Decides perder la oportunidad de tu vida para rescartarla .Te terminan atrapando y llevando a la Isla la Juventud(nadie cree q exista -- todo es una conspiracion del gobierno). Lo ultimo q supimos de Nanda fue q planeaba un plan macabro y siniestrio para derrocar el pais una vez escape de la carcel. En la calle se le recuerda como : Nanda la Peñazco. ';
    }
    messageDiv.classList.add('show');
    document.getElementById('blue-pill').disabled = true;
    document.getElementById('red-pill').disabled = true;
}
