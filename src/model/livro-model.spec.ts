import { Livro } from './livro-model';

describe('Livro', () => {
  it('should be defined', () => {
    expect(new Livro('23','12',12)).toBeDefined();
  });
});
