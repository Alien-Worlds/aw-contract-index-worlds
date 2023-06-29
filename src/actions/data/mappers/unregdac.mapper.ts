/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:20 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Unregdac  } from "../../domain/entities";
import { UnregdacMongoModel, UnregdacRawModel  } from "../dtos/unregdac.dto";

// Mongo Mappers
export class UnregdacMongoMapper
  extends MapperImpl<Unregdac, UnregdacMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: UnregdacMongoModel): Unregdac {
    const { 
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Unregdac.create(
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnregdacRawMapper
  extends MapperImpl<Unregdac, UnregdacRawModel>
{
  public fromEntity(entity: Unregdac): UnregdacRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnregdacRawModel): Unregdac {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Unregdac.create(
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

