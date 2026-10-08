const filmes = new Array("A Colina", "Casa de Cera");

class modelfilmes {

    Buscar() {
        return filmes;
    }

    BuscarUm(id) {
        return filmes[id];
    }

    Cadastrar(filmes) {
        filmes.push(filmes);
    }

    Atualizar(id, filmes) {
        filmes[id] = filmes;
    }

    Eliminar(id) {
        filmes.splice(id, 1);
    }

}

export default new modelfilmes();