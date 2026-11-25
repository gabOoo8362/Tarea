document.getElementById('btnSanta').addEventListener('click', function () {
    alert('Santa Claus: Anciano de barba blanca y traje rojo que, según la leyenda, reparte regalos a los niños la noche del 24 de diciembre.');
});
document.getElementById('btnNiño').addEventListener('click', function () {
    alert('Niño Jesus: Nació en Belén y su nacimiento es el origen de la Navidad. Se le representa en un pesebre.');
});
document.getElementById('btnGrinch').addEventListener('click', function () {
    alert('El Grinch: Personaje verde y gruñón creado por Dr. Seuss, que odia la Navidad y trata de robársela a los habitantes de Villaquién.');
});
document.getElementById('btnKrampus').addEventListener('click', function () {
    alert('Krampus: Criatura con cuernos de las leyendas de los Alpes que acompaña a San Nicolás y castiga a los niños que se portaron mal.');
});
document.getElementById('btnRobot').addEventListener('click', function () {
    alert('Santa Robot: Versión robótica de Santa Claus en Futurama. Fue programado para juzgar quién es bueno o malo, pero su criterio quedó tan estricto que considera "malos" a casi todos y los ataca. Aparece en Navidad y es muy temido.');
});
document.getElementById('btnRodolfo').addEventListener('click', function () {
    alert('Rodolfo el Reno: Reno de la nariz roja y brillante que aparece en una canción y cuento navideños. Los demás renos se burlaban de él, pero una noche de niebla Santa le pidió que guiara su trineo con su nariz, y así se volvió el reno más famoso de la Navidad.');
});
function regalo() {
    let deseo = prompt('¿Qué quieres de regalo?');

    let mensajes = [
        'Algún día conseguirás tu ' + deseo,
        'Santa ya anotó ' + deseo + ' en su lista',
        'Los renos están cargando tu ' + deseo,
        'Los duendes están fabricando ' + deseo,
        'Pórtate bien y tendrás ' + deseo,
        'Mira bajo el árbol, quizás hay ' + deseo,
        'El Grinch intentó robarse tu ' + deseo + ', pero no pudo',
        'Tu ' + deseo + ' viene en camino'
    ];

    for (let i = 0; i < 2; i++) {
        let azar = Math.floor(Math.random() * mensajes.length);
        alert(mensajes[azar]);
    }
}
function chiste() {
    let frases = [
        '¿Qué le dice un semáforo a otro? No me mires, que me estoy cambiando.',
        '¿Qué le dice un techo a otro techo? Techo de menos.',
        '¿Cómo se llama el campeón de buceo japonés? Tokofondo.',
        '¿Qué le dice un jardinero a otro? Disfrutemos mientras podamos.',
        '¿Por qué los pájaros vuelan al sur en invierno? Porque caminando tardarían mucho.',
        '¿Qué hace una abeja en el gimnasio? Zumba.',
        '¿Qué le dice un gusano a otro? Voy a dar una vuelta a la manzana.',
        'Curiosidad: Santa Claus está inspirado en San Nicolás, un obispo de la actual Turquía.',
        'Curiosidad: la canción navideña más escuchada del mundo es All I Want for Christmas Is You, de Mariah Carey.',
        'Curiosidad: en Venezuela se celebra la Navidad desde noviembre.'
    ];

    let azar = Math.floor(Math.random() * frases.length);
    alert(frases[azar]);
}
