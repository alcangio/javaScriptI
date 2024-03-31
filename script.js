let contador = 0;

function conexaoRealizada() {
    console.log("Conexão feita com sucesso!");
    contador++;
}

for (let i = 0; i < 3; i++) {
    conexaoRealizada();
}

console.log("A função foi chamada " + contador + " vezes.");