/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:52:08 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Unregaccount  } from "../../domain/entities";
import { UnregaccountMongoModel, UnregaccountRawModel  } from "../dtos/unregaccount.dto";

// Mongo Mappers
export class UnregaccountMongoMapper
  extends MongoMapper<Unregaccount, UnregaccountMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('type', { 
      key: 'type', 
      mapper: (value: number) => value,
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
      dac_id || '',
      type || 0,
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
      dac_id || '',
      type || 0,
      undefined,
      rest
    );
  }
}

