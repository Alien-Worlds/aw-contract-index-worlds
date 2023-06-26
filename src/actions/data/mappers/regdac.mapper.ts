/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 14:33:41 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedSymbol, ExtendedSymbolMongoMapper, ExtendedSymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Regdac,  PairUint8String,  PairUint8Name  } from "../../domain/entities";
import { RegdacMongoModel, RegdacRawModel,  PairUint8StringMongoModel, PairUint8StringRawModel,  PairUint8NameMongoModel, PairUint8NameRawModel  } from "../dtos/regdac.dto";

// Mongo Mappers
export class RegdacMongoMapper
  extends MapperImpl<Regdac, RegdacMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('owner', { 
      key: 'owner', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacSymbol', { 
      key: 'dac_symbol', 
      mapper: (value: ExtendedSymbol) => 
           new ExtendedSymbolMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('refs', { 
      key: 'refs', 
      mapper: (value: PairUint8String[]) => 
        value.map(new PairUint8StringMongoMapper().fromEntity),
    });

    this.mappingFromEntity.set('accounts', { 
      key: 'accounts', 
      mapper: (value: PairUint8Name[]) => 
        value.map(new PairUint8NameMongoMapper().fromEntity),
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
        owner ?? '',
        dac_id ?? '',
        dac_symbol 
          ? new ExtendedSymbolMongoMapper().toEntity(dac_symbol)
          : ExtendedSymbol.getDefault(),
        title ?? '',
        refs?.map(new PairUint8StringMongoMapper().toEntity) ?? []
,
        accounts?.map(new PairUint8NameMongoMapper().toEntity) ?? []
,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class PairUint8StringMongoMapper
  extends MapperImpl<PairUint8String, PairUint8StringMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: PairUint8StringMongoModel): PairUint8String {
    const { 
      key,
      value,
      _id, 
      ...rest
    } = mongoModel;

    return PairUint8String.create(
        key ?? 0,
        value ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class PairUint8NameMongoMapper
  extends MapperImpl<PairUint8Name, PairUint8NameMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: PairUint8NameMongoModel): PairUint8Name {
    const { 
      key,
      value,
      _id, 
      ...rest
    } = mongoModel;

    return PairUint8Name.create(
        key ?? 0,
        value ?? '',
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
        owner ?? '',
        dac_id ?? '',
        dac_symbol 
          ? new ExtendedSymbolRawMapper().toEntity(dac_symbol)
          : ExtendedSymbol.getDefault(),
        title ?? '',
        refs?.map(new PairUint8StringRawMapper().toEntity) ?? []
,
        accounts?.map(new PairUint8NameRawMapper().toEntity) ?? []
,
      undefined,
      rest
    );
  }
}

export class PairUint8StringRawMapper
  extends MapperImpl<PairUint8String, PairUint8StringRawModel>
{
  public fromEntity(entity: PairUint8String): PairUint8StringRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PairUint8StringRawModel): PairUint8String {
    const { 
      key,
      value,
      ...rest
    } = rawModel;

    return PairUint8String.create(
        key ?? 0,
        value ?? '',
      undefined,
      rest
    );
  }
}

export class PairUint8NameRawMapper
  extends MapperImpl<PairUint8Name, PairUint8NameRawModel>
{
  public fromEntity(entity: PairUint8Name): PairUint8NameRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PairUint8NameRawModel): PairUint8Name {
    const { 
      key,
      value,
      ...rest
    } = rawModel;

    return PairUint8Name.create(
        key ?? 0,
        value ?? '',
      undefined,
      rest
    );
  }
}

