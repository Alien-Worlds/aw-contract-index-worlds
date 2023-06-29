/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Setowner  } from "../../domain/entities";
import { SetownerMongoModel, SetownerRawModel  } from "../dtos/setowner.dto";

// Mongo Mappers
export class SetownerMongoMapper
  extends MapperImpl<Setowner, SetownerMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('newOwner', { 
      key: 'new_owner', 
      mapper: (value: string) => 
        value,
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
        dac_id ?? '',
        new_owner ?? '',
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
        dac_id ?? '',
        new_owner ?? '',
      undefined,
      rest
    );
  }
}

