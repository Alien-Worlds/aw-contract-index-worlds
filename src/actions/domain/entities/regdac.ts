/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 10:13:17 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { ExtendedSymbol } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Regdac` object.
 *
 * @class
 */
export class Regdac implements Entity {
  /**
   * Constructs a new instance of the `Regdac` class.
   *
   * @public
   * @constructor
   * @param string owner
   * @param string dacId
   * @param ExtendedSymbol dacSymbol
   * @param string title
   * @param PairUint8String[] refs
   * @param PairUint8Name[] accounts
   * @param string [id]
   * @returns `Regdac` - An instance of the `Regdac` class.
   */
  public constructor(
    public owner: string,
    public dacId: string,
    public dacSymbol: ExtendedSymbol,
    public title: string,
    public refs: PairUint8String[],
    public accounts: PairUint8Name[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Regdac` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      owner: this.owner,
      dacId: this.dacId,
      dacSymbol: this.dacSymbol,
      title: this.title,
      refs: this.refs,
      accounts: this.accounts,
    };
  }

  /**
   * Creates an instance of the `Regdac` class.
   *
   * @static
   * @public
   * @returns `Regdac` An instance of the `Regdac` class.
   */
  public static create(
    owner: string,
    dacId: string,
    dacSymbol: ExtendedSymbol,
    title: string,
    refs: PairUint8String[],
    accounts: PairUint8Name[],
    id?: string,
    rest?: UnknownObject
  ): Regdac {
    const entity = new Regdac(
      owner,
      dacId,
      dacSymbol,
      title,
      refs,
      accounts,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Regdac {
    return new Regdac(
      '',
      '',
      ExtendedSymbol.getDefault(),
      '',
        []
,
        []
,
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

