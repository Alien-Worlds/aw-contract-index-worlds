/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:09 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { ExtendedSymbol } from '@alien-worlds/eosio-contract-types';

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
   * @param PairUint8String[] refs
   * @param PairUint8Name[] accounts
   * @param number dacState
   * @param string [id]
   * @returns `Dacs` - An instance of the `Dacs` class.
   */
  public constructor(
    public owner: string,
    public dacId: string,
    public title: string,
    public symbol: ExtendedSymbol,
    public refs: PairUint8String[],
    public accounts: PairUint8Name[],
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
   * @returns `Dacs` An instance of the `Dacs` class.
   */
  public static create(
    owner: string,
    dacId: string,
    title: string,
    symbol: ExtendedSymbol,
    refs: PairUint8String[],
    accounts: PairUint8Name[],
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
      id
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

/**
 * Represents a `PairUint8String` object.
 *
 * @class
 */
export class PairUint8String implements Entity {
  /**
   * Constructs a new instance of the `PairUint8String` class.
   *
   * @public
   * @constructor
   * @param number key
   * @param string value
   * @param string [id]
   * @returns `PairUint8String` - An instance of the `PairUint8String` class.
   */
  public constructor(
    public key: number,
    public value: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `PairUint8String` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      value: this.value,
    };
  }

  /**
   * Creates an instance of the `PairUint8String` class.
   *
   * @static
   * @public
   * @returns `PairUint8String` An instance of the `PairUint8String` class.
   */
  public static create(
    key: number,
    value: string,
    id?: string,
    rest?: UnknownObject
  ): PairUint8String {
    const entity = new PairUint8String(
      key,
      value,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): PairUint8String {
    return new PairUint8String(
      0,
      '',
    );
  }
}

/**
 * Represents a `PairUint8Name` object.
 *
 * @class
 */
export class PairUint8Name implements Entity {
  /**
   * Constructs a new instance of the `PairUint8Name` class.
   *
   * @public
   * @constructor
   * @param number key
   * @param string value
   * @param string [id]
   * @returns `PairUint8Name` - An instance of the `PairUint8Name` class.
   */
  public constructor(
    public key: number,
    public value: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `PairUint8Name` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      value: this.value,
    };
  }

  /**
   * Creates an instance of the `PairUint8Name` class.
   *
   * @static
   * @public
   * @returns `PairUint8Name` An instance of the `PairUint8Name` class.
   */
  public static create(
    key: number,
    value: string,
    id?: string,
    rest?: UnknownObject
  ): PairUint8Name {
    const entity = new PairUint8Name(
      key,
      value,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): PairUint8Name {
    return new PairUint8Name(
      0,
      '',
    );
  }
}

