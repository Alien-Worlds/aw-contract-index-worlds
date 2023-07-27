/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Nftcache  } from "../../domain/entities";
import { NftcacheMongoModel, NftcacheRawModel  } from "../dtos/nftcache.dto";

// Mongo Mappers
export class NftcacheMongoMapper
  extends MongoMapper<Nftcache, NftcacheMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('nftId', { 
      key: 'nft_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('schemaName', { 
      key: 'schema_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: NftcacheMongoModel): Nftcache {
    const { 
      nft_id,
      schema_name,
      value,
      _id,
      ...rest
    } = mongoModel;

    return Nftcache.create(
      nft_id || 0,
      schema_name || '',
      value || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class NftcacheRawMapper
  extends MapperImpl<Nftcache, NftcacheRawModel>
{
  public fromEntity(entity: Nftcache): NftcacheRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: NftcacheRawModel): Nftcache {
    const { 
      nft_id,
      schema_name,
      value,
      ...rest
    } = rawModel;

    return Nftcache.create(
      nft_id || 0,
      schema_name || '',
      value || 0,
      undefined,
      rest
    );
  }
}

