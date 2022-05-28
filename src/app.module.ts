import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // dialeto do banco de dados
      host: 'localhost', // endereço do servidor do banco de dados
      port: 3306, // porta do banco de dados. A porta padrão é 3306, porém se foi escolhida outra na instalação, alterar
      username: 'root', // usuário do MySQL
      password: 'mysqlwill', // senha do usuário do MySQL
      database: 'livraria', // nome do banco de dados
      autoLoadModels: true, // reconhecer automaticamente os modelos que foram anotados no projeto
      synchronize: true, // quando subir a aplicação irá importar automaticamente os módulos adicionados no forFeature e vai sincronizar com o banco de dados
    }),
    SequelizeModule.forFeature([Livro]), // anotando os modelos
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
