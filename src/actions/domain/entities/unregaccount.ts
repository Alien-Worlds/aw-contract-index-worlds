/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Unregaccount` object.
 *
 * @class
 */
export class Unregaccount implements Entity {
  /**
   * Constructs a new instance of the `Unregaccount` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param number type
   * @param string [id]
   * @returns `Unregaccount` - An instance of the `Unregaccount` class.
   */
  public constructor(
    public dacId: string,
    public type: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unregaccount` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      type: this.type,
    };
  }

  /**
   * Creates an instance of the `Unregaccount` class.
   *
   * @static
   * @public
   * @param string dacId
   * @param number type
   * @returns `Unregaccount` An instance of the `Unregaccount` class.
   */
  public static create(
    dacId: string,
    type: number,
    id?: string,
    rest?: UnknownObject
  ): Unregaccount {
    const entity = new Unregaccount(
      dacId,
      type,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unregaccount {
    return new Unregaccount(
      '',
      0,
    );
  }
}

