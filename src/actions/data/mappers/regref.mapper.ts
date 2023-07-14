/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:11 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Regref  } from "../../domain/entities";
import { RegrefMongoModel, RegrefRawModel  } from "../dtos/regref.dto";

// Mongo Mappers
export class RegrefMongoMapper
  extends MapperImpl<Regref, RegrefMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('type', { 
      key: 'type', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: RegrefMongoModel): Regref {
    const { 
      dac_id,
      value,
      type,
      _id,
      ...rest
    } = mongoModel;

    return Regref.create(
      dac_id || '',
      value || '',
      type || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RegrefRawMapper
  extends MapperImpl<Regref, RegrefRawModel>
{
  public fromEntity(entity: Regref): RegrefRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RegrefRawModel): Regref {
    const { 
      dac_id,
      value,
      type,
      ...rest
    } = rawModel;

    return Regref.create(
      dac_id || '',
      value || '',
      type || 0,
      undefined,
      rest
    );
  }
}

