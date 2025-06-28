import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    // private readonly pokemonService: PokemonService
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // Delete all pokemons

    // const insertPromisesArray: Promise<any>[] = [];
    const pokemonToInsert: { name: string; no: number }[] = [];

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      // await this.pokemonService.create({ name, no });
      // await this.pokemonModel.create({ name, no });
      // insertPromisesArray.push(this.pokemonModel.create({ name, no }));
      pokemonToInsert.push({ name, no });
    });

    // await Promise.all(insertPromisesArray);
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
