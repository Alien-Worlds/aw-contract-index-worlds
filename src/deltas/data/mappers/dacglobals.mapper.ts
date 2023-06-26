/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 14:33:41 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Dacglobals,  PairStringStateValueVariant  } from "../../domain/entities";
import { DacglobalsMongoModel, DacglobalsRawModel,  PairStringStateValueVariantMongoModel, PairStringStateValueVariantRawModel  } from "../dtos/dacglobals.dto";

// Mongo Mappers
export class DacglobalsMongoMapper
  extends MapperImpl<Dacglobals, DacglobalsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('data', { 
      key: 'data', 
      mapper: (value: PairStringStateValueVariant[]) => 
        value.map(new PairStringStateValueVariantMongoMapper().fromEntity),
    });

  }

  public toEntity(mongoModel: DacglobalsMongoModel): Dacglobals {
    const { 
      data,
      _id, 
      ...rest
    } = mongoModel;

    return Dacglobals.create(
        data?.map(new PairStringStateValueVariantMongoMapper().toEntity) ?? []
,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class PairStringStateValueVariantMongoMapper
  extends MapperImpl<PairStringStateValueVariant, PairStringStateValueVariantMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: Array<unknown>) => 
        value,
    });

  }

  public toEntity(mongoModel: PairStringStateValueVariantMongoModel): PairStringStateValueVariant {
    const { 
      key,
      value,
      _id, 
      ...rest
    } = mongoModel;

    return PairStringStateValueVariant.create(
        key ?? '',
        value ?? [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DacglobalsRawMapper
  extends MapperImpl<Dacglobals, DacglobalsRawModel>
{
  public fromEntity(entity: Dacglobals): DacglobalsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DacglobalsRawModel): Dacglobals {
    const { 
      data,
      ...rest
    } = rawModel;

    return Dacglobals.create(
        data?.map(new PairStringStateValueVariantRawMapper().toEntity) ?? []
,
      undefined,
      rest
    );
  }
}

export class PairStringStateValueVariantRawMapper
  extends MapperImpl<PairStringStateValueVariant, PairStringStateValueVariantRawModel>
{
  public fromEntity(entity: PairStringStateValueVariant): PairStringStateValueVariantRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PairStringStateValueVariantRawModel): PairStringStateValueVariant {
    const { 
      key,
      value,
      ...rest
    } = rawModel;

    return PairStringStateValueVariant.create(
        key ?? '',
        value ?? [],
      undefined,
      rest
    );
  }
}

