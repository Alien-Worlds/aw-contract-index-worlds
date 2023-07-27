/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/aw-core';

import { 
  DacglobalsRawModel,
  DacsRawModel,
  NftcacheRawModel,
} from '../deltas/data/dtos';

export abstract class IndexWorldsContractService extends SmartContractService {
  public static Token = 'INDEX_WORLDS_CONTRACT_SERVICE';

  public abstract fetchDacglobals(
    options?: GetTableRowsOptions
  ): Promise<Result<DacglobalsRawModel[], Error>>;
  public abstract fetchDacs(
    options?: GetTableRowsOptions
  ): Promise<Result<DacsRawModel[], Error>>;
  public abstract fetchNftcache(
    options?: GetTableRowsOptions
  ): Promise<Result<NftcacheRawModel[], Error>>;
}
