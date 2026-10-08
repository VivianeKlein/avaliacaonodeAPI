import Servicefilmes from '../service/filmes.js';

class ControllerFilmes {

    Buscar(req, res) {
        try {
            const filmes = Servicefilmes.Buscar();
            res.send({ filmes });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const filmes = Servicefilmes.BuscarUm(id);
            res.send({ filmes });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Cadastrar(req, res) {
        try {
            const filmes = req.body.filmes;
            Servicefilmes.Cadastrar(filmes);
            res.send({ message: 'Filme cadastrado com sucesso' });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Atualizar(req, res) {
        try {
            const id = req.params.id;
            const filmes = req.body.filmes;
            Servicefilmes.Atualizar(id, filmes);
            res.send({ message: 'Filme atualizado com sucesso' });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Eliminar(req, res) {
        try {
            const id = req.params.id;
            Servicefilmes.Eliminar(id);
            res.send({ message: 'Filme eliminado com sucesso' });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

}

export default new ControllerFilmes();