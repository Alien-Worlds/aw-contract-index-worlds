/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Unregref  } from "../../domain/entities";
import { UnregrefMongoModel, UnregrefRawModel  } from "../dtos/unregref.dto";

// Mongo Mappers
export class UnregrefMongoMapper
  extends MapperImpl<Unregref, UnregrefMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('type', { 
      key: 'type', 
      mapper: (value: number) => 
        value,
    });

  }

  public toEntity(mongoModel: UnregrefMongoModel): Unregref {
    const { 
      dac_id,
      type,
      _id, 
      ...rest
    } = mongoModel;

    return Unregref.create(
        dac_id ?? '',
        type ?? 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnregrefRawMapper
  extends MapperImpl<Unregref, UnregrefRawModel>
{
  public fromEntity(entity: Unregref): UnregrefRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnregrefRawModel): Unregref {
    const { 
      dac_id,
      type,
      ...rest
    } = rawModel;

    return Unregref.create(
        dac_id ?? '',
        type ?? 0,
      undefined,
      rest
    );
  }
}

