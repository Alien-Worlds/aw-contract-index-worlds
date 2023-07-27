/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Setsocials  } from "../../domain/entities";
import { SetsocialsMongoModel, SetsocialsRawModel  } from "../dtos/setsocials.dto";

// Mongo Mappers
export class SetsocialsMongoMapper
  extends MongoMapper<Setsocials, SetsocialsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('active', { 
      key: 'active', 
      mapper: (value: boolean) => value,
    });

  }

  public toEntity(mongoModel: SetsocialsMongoModel): Setsocials {
    const { 
      dac_id,
      active,
      _id,
      ...rest
    } = mongoModel;

    return Setsocials.create(
      dac_id || '',
      active || false,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SetsocialsRawMapper
  extends MapperImpl<Setsocials, SetsocialsRawModel>
{
  public fromEntity(entity: Setsocials): SetsocialsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetsocialsRawModel): Setsocials {
    const { 
      dac_id,
      active,
      ...rest
    } = rawModel;

    return Setsocials.create(
      dac_id || '',
      active || false,
      undefined,
      rest
    );
  }
}

