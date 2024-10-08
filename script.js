const usuarios = [
    { id: 1, nombres: 'Jheison', apellidos: 'Beltrán', fechaNacimiento: '1997-01-18', correo: 'jbeltran17@cuc.edu.co' },
    { id: 2, nombres: 'Sebastian', apellidos: 'Galvan', fechaNacimiento: '1998-02-19', correo: 'sgalvan@cuc.edu.co' },
    { id: 3, nombres: 'Alicia', apellidos: 'Daza', fechaNacimiento: '1999-03-20', correo: 'adaza17@cuc.edu.co' }
];

document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = parseInt(document.getElementById('identificacion').value); // Asegúrate de convertirlo a número
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;

    // Validaciones
    if (!id || isNaN(id)) {
        alert('La identificación debe ser un número.');
        return;
    }

    // Validar que el ID no esté duplicado
    const idExistente = usuarios.find(usuario => usuario.id === id);
    if (idExistente) {
        alert('El ID ya está registrado.');
        return;
    }

    const nuevoUsuario = {
        id,
        nombres,
        apellidos,
        fechaNacimiento,
        correo
    };

    usuarios.push(nuevoUsuario); // Agregar nuevo usuario al arreglo

    console.log(nuevoUsuario);
    console.log(usuarios); // Muestra el arreglo actualizado en la consola

    document.getElementById('formRegistro').reset();
});

// Función para listar usuarios
document.getElementById('listarUsuarios').addEventListener('click', function() {
    const tbody = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; 

    usuarios.forEach(usuario => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = usuario.id;
        row.insertCell(1).textContent = usuario.nombres;
        row.insertCell(2).textContent = usuario.apellidos;
        row.insertCell(3).textContent = usuario.fechaNacimiento;
        row.insertCell(4).textContent = usuario.correo;
    });
});