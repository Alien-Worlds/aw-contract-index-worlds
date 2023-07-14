/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:23:27 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/index-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/index-worlds-delta';

/**
 * @description This abstract class represents a repository for `index.worlds` contract deltas.
 */
@injectable()
export abstract class IndexWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'INDEX_WORLDS_DELTA_REPOSITORY';
}
