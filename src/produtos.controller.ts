import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  private produtos: Produto[] = [
    new Produto('LIVRO1', 'Produto 01', 29.9),
    new Produto('LIVRO2', 'Produto 02', 39.9),
    new Produto('LIVRO3', 'Produto 03', 49.9),
  ];
  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 1;
    this.produtos.push(produto);
    return;
  }

  @Put(':id')
  alterar(@Param() params, @Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params): string {
    this.produtos.pop();
    return;
  }
}
