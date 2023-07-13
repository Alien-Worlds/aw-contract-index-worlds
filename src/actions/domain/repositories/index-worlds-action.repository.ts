/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:12:37 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/index-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/index-worlds-action';

/**
 * @description This abstract class represents a repository for `index.worlds` contract actions.
 */
@injectable()
export abstract class IndexWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'INDEX_WORLDS_ACTION_REPOSITORY';
}
