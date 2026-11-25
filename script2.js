let carrito = [];
let total = 0;

function agregar(nombre, precio) {
    carrito.push(nombre);
    total = total + precio;
    document.getElementById('carrito').textContent = 'Carrito: ' + carrito.join(', ');
    document.getElementById('total').textContent = 'Total: $' + total;
}

function comprar() {
    alert('Compraste: ' + carrito.join(', ') + '. Total: $' + total);
    vaciar();
}

function vaciar() {
    carrito = [];
    total = 0;
    document.getElementById('carrito').textContent = 'Carrito vacío';
    document.getElementById('total').textContent = 'Total: $0';
} 


function comida() {
    let platos = [
        'Lechón al horno: cerdo entero o en trozos, con piel crocante y jugoso por dentro. Es muy típico de Nochebuena.',
        'Pavo al horno: relleno de verduras o frutas y con salsa. Es el clásico de la cena navideña.',
        'Pollo al horno: dorado, con papas y marinado con ajo y especias.',
        'Picana: sopa festiva boliviana de Nochebuena con pollo, res, cordero, papas y mote.',
        'Pierna de cerdo al horno: carne tierna marinada y servida con papas o arroz.',
        'Pollo relleno: pollo entero con relleno de carne, pasas y aceitunas.',
        'Costillas de cerdo en salsa: costillas cocinadas lentamente en salsa dulce y ahumada.',
        'Asado de res: carne de res al horno con verduras y salsa de su propio jugo.'
    ];

    let azar = Math.floor(Math.random() * platos.length);
    alert(platos[azar]);
}