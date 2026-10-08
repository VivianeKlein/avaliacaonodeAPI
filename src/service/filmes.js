import filmes from '../model/filmes.js';

class Servicefilmes {

    Buscar() {
        return filmes.Buscar();
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        return filmes.BuscarUm(id);
    }

    Cadastrar(filmes) {
        if(!filmes) {
            throw new Error('filme inválido');
        }
        filmes.Cadastrar(filmes);
    }

    Atualizar(id, filmes) {
        if (!id || isNaN(id) || !filmes) {
            throw new Error('ID e filme inválidos');
        }
        filmes.Atualizar(id, filmes);
    }

    Eliminar(id) {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        filmes.Eliminar(id);
    }

}

export default new Servicefilmes();