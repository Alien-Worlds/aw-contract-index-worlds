/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
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
    return await this.getAll<DacglobalsRawModel>('candidate_name', {
      ...options,
      code: 'index.worlds',
      table: 'dacglobals',
      table_key: 'data',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the dacs table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDacs (
    options?: GetTableRowsOptions
  ): Promise<Result<DacsRawModel[], Error>> {
    return await this.getAll<DacsRawModel>('candidate_name', {
      ...options,
      code: 'index.worlds',
      table: 'dacs',
      table_key: 'owner',
    });
  };

  /**
   * A EosSmartContractServiceImpl for the nftcache table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchNftcache (
    options?: GetTableRowsOptions
  ): Promise<Result<NftcacheRawModel[], Error>> {
    return await this.getAll<NftcacheRawModel>('candidate_name', {
      ...options,
      code: 'index.worlds',
      table: 'nftcache',
      table_key: 'nft_id',
    });
  };

}
