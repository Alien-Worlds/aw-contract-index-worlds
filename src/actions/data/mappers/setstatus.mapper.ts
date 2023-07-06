/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:42:04 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Setstatus  } from "../../domain/entities";
import { SetstatusMongoModel, SetstatusRawModel  } from "../dtos/setstatus.dto";

// Mongo Mappers
export class SetstatusMongoMapper
  extends MapperImpl<Setstatus, SetstatusMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: number) => 
        value,
    });

  }

  public toEntity(mongoModel: SetstatusMongoModel): Setstatus {
    const { 
      dac_id,
      value,
      _id, 
      ...rest
    } = mongoModel;

    return Setstatus.create(
        dac_id ?? '',
        value ?? 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class SetstatusRawMapper
  extends MapperImpl<Setstatus, SetstatusRawModel>
{
  public fromEntity(entity: Setstatus): SetstatusRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetstatusRawModel): Setstatus {
    const { 
      dac_id,
      value,
      ...rest
    } = rawModel;

    return Setstatus.create(
        dac_id ?? '',
        value ?? 0,
      undefined,
      rest
    );
  }
}

