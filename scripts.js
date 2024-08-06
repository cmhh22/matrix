document.getElementById('blue-pill').addEventListener('click', function() {
    choosePill('blue');
});

document.getElementById('red-pill').addEventListener('click', function() {
    choosePill('red');
});

function choosePill(color) {
    var messageDiv = document.getElementById('message');
    if (color === 'blue') {
        messageDiv.textContent = 'Eliges emigrar al extranjero: te conviertes en toda una líder política en tu comunidad autónoma, descubriendo tu pasión innata por la política y la manipulación de las masas. Haces una carrera excelente y progresista, de tal manera que llegas a ser la presidenta de España. Conviertes a Florentino en tu vicepresidente... y a los meses se te arruina tu legado político por corrupción. Piden que dimitas, pero aplicas la ley Nicolás Maduro. Te hacen un atentado y te dejan sin una oreja. Por lo tanto, decides huir a unas islas del Caribe con todo el dinero que robaste del Banco de Moneda y Timbre durante tu mandato. Se te recuerda como: Nanda la del Botacaca.';
    } else if (color === 'red') {
        messageDiv.textContent = 'Eliges continuar en Cuba: terminas siendo una destacada profesora de Matemáticas reconocida por Oslaida, pero para sobrevivir te dedicas a vender croquetas. Organizas la mafia de la croqueta, convirtiéndote en Fernanda de Corleone, una familiar pero temida traficante de la "masa prohibida". Como todo lo bueno tiene su final, tu vecino te da un chivatazo y en un intento de salida ilegal con mucho dinero en tu bolso, recuerdas que se te olvida algo... tu fiel y tonta compañera de vida: Mila. Decides perder la oportunidad de tu vida para rescatarla. Te terminan atrapando y llevando a la Isla de la Juventud (nadie cree que exista -- todo es una conspiración del gobierno). Lo último que supimos de Nanda fue que planeaba un plan macabro y siniestro para derrocar el país una vez escapara de la cárcel. En la calle se le recuerda como: Nanda la Peñasco.';
    }
    messageDiv.classList.add('show');
    document.getElementById('blue-pill').disabled = true;
    document.getElementById('red-pill').disabled = true;
}
