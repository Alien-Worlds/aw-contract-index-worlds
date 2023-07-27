/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { 
  DacglobalsRawModel,
  DacsRawModel,
  NftcacheRawModel,
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { IndexWorldsContractService } from './index-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the index.worlds smart contract.
 * 
 * @class IndexWorldsContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { IndexWorldsContractService}
*/
export class IndexWorldsContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements IndexWorldsContractService 
{
  /**
   * Creates an instance of IndexWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'index.worlds');
  }

  /**
   * An AntelopeSmartContractServiceImpl for the dacglobals table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDacglobals (
    options?: GetTableRowsOptions
  ): Promise<Result<DacglobalsRawModel[], Error>> {
    const table_key = '';
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
   * An AntelopeSmartContractServiceImpl for the dacs table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDacs (
    options?: GetTableRowsOptions
  ): Promise<Result<DacsRawModel[], Error>> {
    const table_key = 'dac_id';
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
   * An AntelopeSmartContractServiceImpl for the nftcache table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
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
