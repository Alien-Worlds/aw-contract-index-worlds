/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:12:37 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedSymbol, ExtendedSymbolMongoMapper, ExtendedSymbolRawMapper, Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/eosio-contract-types';
import { Dacs  } from "../../domain/entities";
import { DacsMongoModel, DacsRawModel  } from "../dtos/dacs.dto";

// Mongo Mappers
export class DacsMongoMapper
  extends MapperImpl<Dacs, DacsMongoModel>
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

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('symbol', { 
      key: 'symbol', 
      mapper: (value: ExtendedSymbol) => new ExtendedSymbolMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('refs', { 
      key: 'refs', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('accounts', { 
      key: 'accounts', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('dacState', { 
      key: 'dac_state', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: DacsMongoModel): Dacs {
    const { 
      owner,
      dac_id,
      title,
      symbol,
      refs,
      accounts,
      dac_state,
      _id,
      ...rest
    } = mongoModel;

    return Dacs.create(
      owner || '',
      dac_id || '',
      title || '',
      new ExtendedSymbolMongoMapper().toEntity(symbol),
      refs?.map(value => new PairMongoMapper().toEntity(value)) || [],
      accounts?.map(value => new PairMongoMapper().toEntity(value)) || [],
      dac_state || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DacsRawMapper
  extends MapperImpl<Dacs, DacsRawModel>
{
  public fromEntity(entity: Dacs): DacsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DacsRawModel): Dacs {
    const { 
      owner,
      dac_id,
      title,
      symbol,
      refs,
      accounts,
      dac_state,
      ...rest
    } = rawModel;

    return Dacs.create(
      owner || '',
      dac_id || '',
      title || '',
      new ExtendedSymbolRawMapper().toEntity(symbol),
      refs?.map(value => new PairRawMapper().toEntity(value)) || [],
      accounts?.map(value => new PairRawMapper().toEntity(value)) || [],
      dac_state || 0,
      undefined,
      rest
    );
  }
}

