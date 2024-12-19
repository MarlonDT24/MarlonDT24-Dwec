setTimeout(() => {
    if (confirm('¿Deseas ordenar alfabéticamente?')) {
        let lista = document.getElementById("lista");
        let palabras = Array.from(lista.getElementsByTagName('li')).map(li => li.textContent);
        palabras.sort();

        lista.innerHTML = '';
        palabras.forEach(palabra => {
            let li = document.createElement('li');
            li.textContent = palabra;
            lista.appendChild(li);
        });
    }
}, 3000);