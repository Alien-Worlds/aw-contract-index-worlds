/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:11 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedSymbol, ExtendedSymbolMongoMapper, ExtendedSymbolRawMapper, Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/eosio-contract-types';
import { Regdac  } from "../../domain/entities";
import { RegdacMongoModel, RegdacRawModel  } from "../dtos/regdac.dto";

// Mongo Mappers
export class RegdacMongoMapper
  extends MapperImpl<Regdac, RegdacMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('owner', { 
      key: 'owner', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacSymbol', { 
      key: 'dac_symbol', 
      mapper: (value: ExtendedSymbol) => new ExtendedSymbolMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('refs', { 
      key: 'refs', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('accounts', { 
      key: 'accounts', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: RegdacMongoModel): Regdac {
    const { 
      owner,
      dac_id,
      dac_symbol,
      title,
      refs,
      accounts,
      _id,
      ...rest
    } = mongoModel;

    return Regdac.create(
      owner || '',
      dac_id || '',
      dac_symbol ? new ExtendedSymbolMongoMapper().toEntity(dac_symbol) : ExtendedSymbol.getDefault(),
      title || '',
      refs?.map(value => new PairMongoMapper().toEntity(value)) || [],
      accounts?.map(value => new PairMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RegdacRawMapper
  extends MapperImpl<Regdac, RegdacRawModel>
{
  public fromEntity(entity: Regdac): RegdacRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RegdacRawModel): Regdac {
    const { 
      owner,
      dac_id,
      dac_symbol,
      title,
      refs,
      accounts,
      ...rest
    } = rawModel;

    return Regdac.create(
      owner || '',
      dac_id || '',
      dac_symbol ? new ExtendedSymbolRawMapper().toEntity(dac_symbol) : ExtendedSymbol.getDefault(),
      title || '',
      refs?.map(value => new PairRawMapper().toEntity(value)) || [],
      accounts?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

