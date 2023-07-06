/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:42:04 GMT
 */

import { 
  DacglobalsRawModel,
  DacsRawModel,
  NftcacheRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { IndexWorldsContractService } from './index-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the index.worlds smart contract.
 * 
 * @class IndexWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { IndexWorldsContractService}
*/
export class IndexWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements IndexWorldsContractService 
{
  /**
   * Creates an instance of IndexWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'index.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the dacglobals table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDacglobals (
    options?: GetTableRowsOptions
  ): Promise<Result<DacglobalsRawModel[], Error>> {
    const table_key = 'data';
    const tableRowOptions = {
      ...options,
      code: 'index.worlds',
      table: 'dacglobals',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<DacglobalsRawModel>(tableRowOptions)
      : await this.getAll<DacglobalsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the dacs table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDacs (
    options?: GetTableRowsOptions
  ): Promise<Result<DacsRawModel[], Error>> {
    const table_key = 'owner';
    const tableRowOptions = {
      ...options,
      code: 'index.worlds',
      table: 'dacs',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<DacsRawModel>(tableRowOptions)
      : await this.getAll<DacsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the nftcache table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchNftcache (
    options?: GetTableRowsOptions
  ): Promise<Result<NftcacheRawModel[], Error>> {
    const table_key = 'nft_id';
    const tableRowOptions = {
      ...options,
      code: 'index.worlds',
      table: 'nftcache',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<NftcacheRawModel>(tableRowOptions)
      : await this.getAll<NftcacheRawModel>(table_key, tableRowOptions);
  }
}
