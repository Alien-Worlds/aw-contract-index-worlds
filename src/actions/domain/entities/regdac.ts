/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { ExtendedSymbol, Pair } from '@alien-worlds/aw-antelope';

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
   * @param Pair[] refs
   * @param Pair[] accounts
   * @param string [id]
   * @returns `Regdac` - An instance of the `Regdac` class.
   */
  public constructor(
    public owner: string,
    public dacId: string,
    public dacSymbol: ExtendedSymbol,
    public title: string,
    public refs: Pair[],
    public accounts: Pair[],
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
   * @param string owner
   * @param string dacId
   * @param ExtendedSymbol dacSymbol
   * @param string title
   * @param Pair[] refs
   * @param Pair[] accounts
   * @returns `Regdac` An instance of the `Regdac` class.
   */
  public static create(
    owner: string,
    dacId: string,
    dacSymbol: ExtendedSymbol,
    title: string,
    refs: Pair[],
    accounts: Pair[],
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
      id,
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

