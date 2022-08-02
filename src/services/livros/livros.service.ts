import { Injectable } from '@nestjs/common';
import { Livro } from 'src/model/livro-model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro("LIV001", "JavaScript para Back-end", 19.99),
    new Livro("LIV002", "Prisma e GraphQL", 29.99),
    new Livro("LIV003", "Código Limpo", 49.99),
  ]

  getAll(): Livro[] {
    return this.livros;
  }

  getOne(id: number): Livro {
    return this.livros[0];2
  }

  create(livro: Livro) {
    this.livros.push(livro);
  }

  update(livro: Livro): Livro {
    return livro;
  }

  delete(id: number) {
    this.livros.pop()
  }
}
