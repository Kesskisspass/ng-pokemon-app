export class Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created: Date;
  
  constructor(
    public name: string = 'Entrer un nom',
    public hp: number = 100,
    public cp: number = 10,
    public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
    public types: string[] = ['Normal'],
    public created: Date = new Date()
  ) {}
}
