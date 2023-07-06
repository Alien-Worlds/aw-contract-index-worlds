/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 10:13:17 GMT
 */


import { 
  Hdlegovchg,
  Regaccount,
  Regdac,
  Regref,
  Setowner,
  Setsociallnk,
  Setsocials,
  Setstatus,
  Settitle,
  Unregaccount,
  Unregdac,
  Unregref,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { HdlegovchgMongoMapper } from "./hdlegovchg.mapper";
import { RegaccountMongoMapper } from "./regaccount.mapper";
import { RegdacMongoMapper } from "./regdac.mapper";
import { RegrefMongoMapper } from "./regref.mapper";
import { SetownerMongoMapper } from "./setowner.mapper";
import { SetsociallnkMongoMapper } from "./setsociallnk.mapper";
import { SetsocialsMongoMapper } from "./setsocials.mapper";
import { SetstatusMongoMapper } from "./setstatus.mapper";
import { SettitleMongoMapper } from "./settitle.mapper";
import { UnregaccountMongoMapper } from "./unregaccount.mapper";
import { UnregdacMongoMapper } from "./unregdac.mapper";
import { UnregrefMongoMapper } from "./unregref.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/index-worlds-action';
import { 
  IndexWorldsActionMongoModel,
  HdlegovchgMongoModel,
  RegaccountMongoModel,
  RegdacMongoModel,
  RegrefMongoModel,
  SetownerMongoModel,
  SetsociallnkMongoModel,
  SetsocialsMongoModel,
  SetstatusMongoModel,
  SettitleMongoModel,
  UnregaccountMongoModel,
  UnregdacMongoModel,
  UnregrefMongoModel,
} from '../dtos';
import { IndexWorldsActionName } from '../../domain/enums';

export class IndexWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType, IndexWorldsActionMongoModel>, IndexWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType, IndexWorldsActionMongoModel>
  ): IndexWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case IndexWorldsActionName.Hdlegovchg:
        entityData = new HdlegovchgMongoMapper().fromEntity(entity.data as Hdlegovchg);
        break;
      case IndexWorldsActionName.Regaccount:
        entityData = new RegaccountMongoMapper().fromEntity(entity.data as Regaccount);
        break;
      case IndexWorldsActionName.Regdac:
        entityData = new RegdacMongoMapper().fromEntity(entity.data as Regdac);
        break;
      case IndexWorldsActionName.Regref:
        entityData = new RegrefMongoMapper().fromEntity(entity.data as Regref);
        break;
      case IndexWorldsActionName.Setowner:
        entityData = new SetownerMongoMapper().fromEntity(entity.data as Setowner);
        break;
      case IndexWorldsActionName.Setsociallnk:
        entityData = new SetsociallnkMongoMapper().fromEntity(entity.data as Setsociallnk);
        break;
      case IndexWorldsActionName.Setsocials:
        entityData = new SetsocialsMongoMapper().fromEntity(entity.data as Setsocials);
        break;
      case IndexWorldsActionName.Setstatus:
        entityData = new SetstatusMongoMapper().fromEntity(entity.data as Setstatus);
        break;
      case IndexWorldsActionName.Settitle:
        entityData = new SettitleMongoMapper().fromEntity(entity.data as Settitle);
        break;
      case IndexWorldsActionName.Unregaccount:
        entityData = new UnregaccountMongoMapper().fromEntity(entity.data as Unregaccount);
        break;
      case IndexWorldsActionName.Unregdac:
        entityData = new UnregdacMongoMapper().fromEntity(entity.data as Unregdac);
        break;
      case IndexWorldsActionName.Unregref:
        entityData = new UnregrefMongoMapper().fromEntity(entity.data as Unregref);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action_hash: entity.actionHash,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: IndexWorldsActionMongoModel
  ): ContractAction<DataEntityType, IndexWorldsActionMongoModel> {
    let data;
    switch (mongoModel.action.name) {
      case IndexWorldsActionName.Hdlegovchg:
        data = new HdlegovchgMongoMapper().toEntity(mongoModel.action.data as HdlegovchgMongoModel);
        break;
      case IndexWorldsActionName.Regaccount:
        data = new RegaccountMongoMapper().toEntity(mongoModel.action.data as RegaccountMongoModel);
        break;
      case IndexWorldsActionName.Regdac:
        data = new RegdacMongoMapper().toEntity(mongoModel.action.data as RegdacMongoModel);
        break;
      case IndexWorldsActionName.Regref:
        data = new RegrefMongoMapper().toEntity(mongoModel.action.data as RegrefMongoModel);
        break;
      case IndexWorldsActionName.Setowner:
        data = new SetownerMongoMapper().toEntity(mongoModel.action.data as SetownerMongoModel);
        break;
      case IndexWorldsActionName.Setsociallnk:
        data = new SetsociallnkMongoMapper().toEntity(mongoModel.action.data as SetsociallnkMongoModel);
        break;
      case IndexWorldsActionName.Setsocials:
        data = new SetsocialsMongoMapper().toEntity(mongoModel.action.data as SetsocialsMongoModel);
        break;
      case IndexWorldsActionName.Setstatus:
        data = new SetstatusMongoMapper().toEntity(mongoModel.action.data as SetstatusMongoModel);
        break;
      case IndexWorldsActionName.Settitle:
        data = new SettitleMongoMapper().toEntity(mongoModel.action.data as SettitleMongoModel);
        break;
      case IndexWorldsActionName.Unregaccount:
        data = new UnregaccountMongoMapper().toEntity(mongoModel.action.data as UnregaccountMongoModel);
        break;
      case IndexWorldsActionName.Unregdac:
        data = new UnregdacMongoMapper().toEntity(mongoModel.action.data as UnregdacMongoModel);
        break;
      case IndexWorldsActionName.Unregref:
        data = new UnregrefMongoMapper().toEntity(mongoModel.action.data as UnregrefMongoModel);
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action_hash,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType, IndexWorldsActionMongoModel>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
      action_hash
    );
  }
}
