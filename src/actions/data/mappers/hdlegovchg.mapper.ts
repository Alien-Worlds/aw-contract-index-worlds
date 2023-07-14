/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:11 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Hdlegovchg  } from "../../domain/entities";
import { HdlegovchgMongoModel, HdlegovchgRawModel  } from "../dtos/hdlegovchg.dto";

// Mongo Mappers
export class HdlegovchgMongoMapper
  extends MapperImpl<Hdlegovchg, HdlegovchgMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: HdlegovchgMongoModel): Hdlegovchg {
    const { 
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Hdlegovchg.create(
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class HdlegovchgRawMapper
  extends MapperImpl<Hdlegovchg, HdlegovchgRawModel>
{
  public fromEntity(entity: Hdlegovchg): HdlegovchgRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: HdlegovchgRawModel): Hdlegovchg {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Hdlegovchg.create(
      dac_id || '',
      undefined,
      rest
    );
  }
}

