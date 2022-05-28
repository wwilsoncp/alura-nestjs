import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log('Produto criado: ', produto);
    return `Produto criado ${produto}`;
  }

  @Put(':id')
  alterar(@Param() params, @Body() produto): string {
    console.log('Produto alterado: ', produto);
    return `Produto alterado, id: ${params.id}`;
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Produto apagado, id ${params.id}`;
  }
}
