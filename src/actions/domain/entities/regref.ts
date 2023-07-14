/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Regref` object.
 *
 * @class
 */
export class Regref implements Entity {
  /**
   * Constructs a new instance of the `Regref` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string value
   * @param number type
   * @param string [id]
   * @returns `Regref` - An instance of the `Regref` class.
   */
  public constructor(
    public dacId: string,
    public value: string,
    public type: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Regref` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      value: this.value,
      type: this.type,
    };
  }

  /**
   * Creates an instance of the `Regref` class.
   *
   * @static
   * @public
   * @param string dacId
   * @param string value
   * @param number type
   * @returns `Regref` An instance of the `Regref` class.
   */
  public static create(
    dacId: string,
    value: string,
    type: number,
    id?: string,
    rest?: UnknownObject
  ): Regref {
    const entity = new Regref(
      dacId,
      value,
      type,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Regref {
    return new Regref(
      '',
      '',
      0,
    );
  }
}

