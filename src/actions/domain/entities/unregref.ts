/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Unregref` object.
 *
 * @class
 */
export class Unregref implements Entity {
  /**
   * Constructs a new instance of the `Unregref` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param number type
   * @param string [id]
   * @returns `Unregref` - An instance of the `Unregref` class.
   */
  public constructor(
    public dacId: string,
    public type: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unregref` class to a JSON object.
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
   * Creates an instance of the `Unregref` class.
   *
   * @static
   * @public
   * @param string dacId
   * @param number type
   * @returns `Unregref` An instance of the `Unregref` class.
   */
  public static create(
    dacId: string,
    type: number,
    id?: string,
    rest?: UnknownObject
  ): Unregref {
    const entity = new Unregref(
      dacId,
      type,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unregref {
    return new Unregref(
      '',
      0,
    );
  }
}

