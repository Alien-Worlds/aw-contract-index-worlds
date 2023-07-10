/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:37:43 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Unregdac` object.
 *
 * @class
 */
export class Unregdac implements Entity {
  /**
   * Constructs a new instance of the `Unregdac` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Unregdac` - An instance of the `Unregdac` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unregdac` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Unregdac` class.
   *
   * @static
   * @public
   * @returns `Unregdac` An instance of the `Unregdac` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Unregdac {
    const entity = new Unregdac(
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unregdac {
    return new Unregdac(
      '',
    );
  }
}

