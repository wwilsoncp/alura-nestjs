import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  private readonly livros: Livro[] = [
    new Livro('LIVRO1', 'Livro Java', 29.9),
    new Livro('LIVRO2', 'Livro JavaScript', 39.9),
    new Livro('LIVRO3', 'Livro Angular', 49.9),
    new Livro('LIVRO4', 'Livro Nestjs', 49.9),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro): void {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number): void {
    this.livros.pop();
  }
}
