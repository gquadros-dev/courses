import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'asdasd',
      sobrenome: 'felipe',
      email: 'Gabriel@123.com',
      idade: 55,
      peso: 122,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
