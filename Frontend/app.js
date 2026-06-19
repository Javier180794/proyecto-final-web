fetch('https://proyecto-final-web-production-5207.up.railway.app/tareas')
    .then(response => response.json())
    .then(data => {

        const lista = document.getElementById('listaTareas');

        data.forEach(tarea => {

            const elemento = document.createElement('li');

            elemento.innerHTML = `
                <a href="${tarea.url}" target="_blank">
                    ${tarea.titulo}
                </a>
            `;

            lista.appendChild(elemento);

        });

    })
    .catch(error => {
        console.error('Error:', error);
    });