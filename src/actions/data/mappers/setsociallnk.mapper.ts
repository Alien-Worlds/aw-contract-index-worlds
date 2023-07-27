/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Setsociallnk  } from "../../domain/entities";
import { SetsociallnkMongoModel, SetsociallnkRawModel  } from "../dtos/setsociallnk.dto";

// Mongo Mappers
export class SetsociallnkMongoMapper
  extends MongoMapper<Setsociallnk, SetsociallnkMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('link', { 
      key: 'link', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: SetsociallnkMongoModel): Setsociallnk {
    const { 
      dac_id,
      key,
      link,
      _id,
      ...rest
    } = mongoModel;

    return Setsociallnk.create(
      dac_id || '',
      key || '',
      link || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SetsociallnkRawMapper
  extends MapperImpl<Setsociallnk, SetsociallnkRawModel>
{
  public fromEntity(entity: Setsociallnk): SetsociallnkRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetsociallnkRawModel): Setsociallnk {
    const { 
      dac_id,
      key,
      link,
      ...rest
    } = rawModel;

    return Setsociallnk.create(
      dac_id || '',
      key || '',
      link || '',
      undefined,
      rest
    );
  }
}

