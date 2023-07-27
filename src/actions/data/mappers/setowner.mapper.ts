/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Setowner  } from "../../domain/entities";
import { SetownerMongoModel, SetownerRawModel  } from "../dtos/setowner.dto";

// Mongo Mappers
export class SetownerMongoMapper
  extends MongoMapper<Setowner, SetownerMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('newOwner', { 
      key: 'new_owner', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: SetownerMongoModel): Setowner {
    const { 
      dac_id,
      new_owner,
      _id,
      ...rest
    } = mongoModel;

    return Setowner.create(
      dac_id || '',
      new_owner || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SetownerRawMapper
  extends MapperImpl<Setowner, SetownerRawModel>
{
  public fromEntity(entity: Setowner): SetownerRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetownerRawModel): Setowner {
    const { 
      dac_id,
      new_owner,
      ...rest
    } = rawModel;

    return Setowner.create(
      dac_id || '',
      new_owner || '',
      undefined,
      rest
    );
  }
}

