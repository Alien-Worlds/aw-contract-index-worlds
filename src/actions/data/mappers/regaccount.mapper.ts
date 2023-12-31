/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Regaccount  } from "../../domain/entities";
import { RegaccountMongoModel, RegaccountRawModel  } from "../dtos/regaccount.dto";

// Mongo Mappers
export class RegaccountMongoMapper
  extends MongoMapper<Regaccount, RegaccountMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('type', { 
      key: 'type', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: RegaccountMongoModel): Regaccount {
    const { 
      dac_id,
      account,
      type,
      _id,
      ...rest
    } = mongoModel;

    return Regaccount.create(
      dac_id || '',
      account || '',
      type || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RegaccountRawMapper
  extends MapperImpl<Regaccount, RegaccountRawModel>
{
  public fromEntity(entity: Regaccount): RegaccountRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RegaccountRawModel): Regaccount {
    const { 
      dac_id,
      account,
      type,
      ...rest
    } = rawModel;

    return Regaccount.create(
      dac_id || '',
      account || '',
      type || 0,
      undefined,
      rest
    );
  }
}

