/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:12 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Dacglobals` object.
 *
 * @class
 */
export class Dacglobals implements Entity {
  /**
   * Constructs a new instance of the `Dacglobals` class.
   *
   * @public
   * @constructor
   * @param Pair[] data
   * @param string [id]
   * @returns `Dacglobals` - An instance of the `Dacglobals` class.
   */
  public constructor(
    public data: Pair[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Dacglobals` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      data: this.data,
    };
  }

  /**
   * Creates an instance of the `Dacglobals` class.
   *
   * @static
   * @public
   * @param Pair[] data
   * @returns `Dacglobals` An instance of the `Dacglobals` class.
   */
  public static create(
    data: Pair[],
    id?: string,
    rest?: UnknownObject
  ): Dacglobals {
    const entity = new Dacglobals(
      data,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Dacglobals {
    return new Dacglobals(
        []
,
    );
  }
}

