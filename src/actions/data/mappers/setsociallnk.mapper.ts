/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 14:33:41 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Setsociallnk  } from "../../domain/entities";
import { SetsociallnkMongoModel, SetsociallnkRawModel  } from "../dtos/setsociallnk.dto";

// Mongo Mappers
export class SetsociallnkMongoMapper
  extends MapperImpl<Setsociallnk, SetsociallnkMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('link', { 
      key: 'link', 
      mapper: (value: string) => 
        value,
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
        dac_id ?? '',
        key ?? '',
        link ?? '',
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
        dac_id ?? '',
        key ?? '',
        link ?? '',
      undefined,
      rest
    );
  }
}

