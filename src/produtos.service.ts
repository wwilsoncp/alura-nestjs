import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [
    new Produto('LIVRO1', 'Produto 01', 29.9),
    new Produto('LIVRO2', 'Produto 02', 39.9),
    new Produto('LIVRO3', 'Produto 03', 49.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto): void {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number): void {
    this.produtos.pop();
  }
}
