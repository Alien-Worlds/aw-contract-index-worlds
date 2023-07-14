/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:52:08 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { ExtendedSymbol, Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Dacs` object.
 *
 * @class
 */
export class Dacs implements Entity {
  /**
   * Constructs a new instance of the `Dacs` class.
   *
   * @public
   * @constructor
   * @param string owner
   * @param string dacId
   * @param string title
   * @param ExtendedSymbol symbol
   * @param Pair[] refs
   * @param Pair[] accounts
   * @param number dacState
   * @param string [id]
   * @returns `Dacs` - An instance of the `Dacs` class.
   */
  public constructor(
    public owner: string,
    public dacId: string,
    public title: string,
    public symbol: ExtendedSymbol,
    public refs: Pair[],
    public accounts: Pair[],
    public dacState: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Dacs` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      owner: this.owner,
      dacId: this.dacId,
      title: this.title,
      symbol: this.symbol,
      refs: this.refs,
      accounts: this.accounts,
      dacState: this.dacState,
    };
  }

  /**
   * Creates an instance of the `Dacs` class.
   *
   * @static
   * @public
   * @param string owner
   * @param string dacId
   * @param string title
   * @param ExtendedSymbol symbol
   * @param Pair[] refs
   * @param Pair[] accounts
   * @param number dacState
   * @returns `Dacs` An instance of the `Dacs` class.
   */
  public static create(
    owner: string,
    dacId: string,
    title: string,
    symbol: ExtendedSymbol,
    refs: Pair[],
    accounts: Pair[],
    dacState: number,
    id?: string,
    rest?: UnknownObject
  ): Dacs {
    const entity = new Dacs(
      owner,
      dacId,
      title,
      symbol,
      refs,
      accounts,
      dacState,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Dacs {
    return new Dacs(
      '',
      '',
      '',
      ExtendedSymbol.getDefault(),
        []
,
        []
,
      0,
    );
  }
}

