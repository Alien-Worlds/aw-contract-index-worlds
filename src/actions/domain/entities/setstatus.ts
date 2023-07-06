/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 10:13:17 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Setstatus` object.
 *
 * @class
 */
export class Setstatus implements Entity {
  /**
   * Constructs a new instance of the `Setstatus` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param number value
   * @param string [id]
   * @returns `Setstatus` - An instance of the `Setstatus` class.
   */
  public constructor(
    public dacId: string,
    public value: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Setstatus` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      value: this.value,
    };
  }

  /**
   * Creates an instance of the `Setstatus` class.
   *
   * @static
   * @public
   * @returns `Setstatus` An instance of the `Setstatus` class.
   */
  public static create(
    dacId: string,
    value: number,
    id?: string,
    rest?: UnknownObject
  ): Setstatus {
    const entity = new Setstatus(
      dacId,
      value,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Setstatus {
    return new Setstatus(
      '',
      0,
    );
  }
}

