import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  private readonly livros: Livro[] = [];

  // solicitando ao sequeliza que injete o modelo Livro
  constructor(@InjectModel(Livro) private livroModel: typeof Livro) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise<void> {
    this.livroModel.create(livro);
  }

  async alterar(livro: Livro): Promise<[number]> {
    return this.livroModel.update(livro, { where: { id: livro.id } });
  }

  async apagar(id: number): Promise<void> {
    const livro: Livro = await this.obterUm(id);
    if (livro) livro.destroy();
  }
}
