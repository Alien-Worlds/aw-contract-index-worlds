/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Unregaccount  } from "../../domain/entities";
import { UnregaccountMongoModel, UnregaccountRawModel  } from "../dtos/unregaccount.dto";

// Mongo Mappers
export class UnregaccountMongoMapper
  extends MapperImpl<Unregaccount, UnregaccountMongoModel>
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

  public toEntity(mongoModel: UnregaccountMongoModel): Unregaccount {
    const { 
      dac_id,
      type,
      _id, 
      ...rest
    } = mongoModel;

    return Unregaccount.create(
        dac_id ?? '',
        type ?? 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnregaccountRawMapper
  extends MapperImpl<Unregaccount, UnregaccountRawModel>
{
  public fromEntity(entity: Unregaccount): UnregaccountRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnregaccountRawModel): Unregaccount {
    const { 
      dac_id,
      type,
      ...rest
    } = rawModel;

    return Unregaccount.create(
        dac_id ?? '',
        type ?? 0,
      undefined,
      rest
    );
  }
}

