/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/aw-antelope';
import { Dacglobals  } from "../../domain/entities";
import { DacglobalsMongoModel, DacglobalsRawModel  } from "../dtos/dacglobals.dto";

// Mongo Mappers
export class DacglobalsMongoMapper
  extends MongoMapper<Dacglobals, DacglobalsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('data', { 
      key: 'data', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: DacglobalsMongoModel): Dacglobals {
    const { 
      data,
      _id,
      ...rest
    } = mongoModel;

    return Dacglobals.create(
      data?.map(value => new PairMongoMapper().toEntity(value)) || [],
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
      data?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

