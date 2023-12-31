/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Settitle  } from "../../domain/entities";
import { SettitleMongoModel, SettitleRawModel  } from "../dtos/settitle.dto";

// Mongo Mappers
export class SettitleMongoMapper
  extends MongoMapper<Settitle, SettitleMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: SettitleMongoModel): Settitle {
    const { 
      dac_id,
      title,
      _id,
      ...rest
    } = mongoModel;

    return Settitle.create(
      dac_id || '',
      title || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SettitleRawMapper
  extends MapperImpl<Settitle, SettitleRawModel>
{
  public fromEntity(entity: Settitle): SettitleRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SettitleRawModel): Settitle {
    const { 
      dac_id,
      title,
      ...rest
    } = rawModel;

    return Settitle.create(
      dac_id || '',
      title || '',
      undefined,
      rest
    );
  }
}

