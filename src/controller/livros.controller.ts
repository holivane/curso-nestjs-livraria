import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "src/model/livro-model";
import { LivrosService } from "src/services/livros/livros.service";

@Controller('livro')
export class LivrosController {


  constructor(private livrosSercive: LivrosService) { }

  @Get()
  getAll(): Livro[] {
    return this.livrosSercive.getAll();
  }

  @Get(':id')
  getone(@Param() params): Livro {
    return this.livrosSercive.getOne(params.id);
  }

  @Post()
  create(@Body() livro: Livro) {
    return this.livrosSercive.create(livro);
  }

  @Put()
  update(@Body() livro: Livro): Livro {
    return this.livrosSercive.update(livro);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.livrosSercive.delete(params.id);
  }
}
