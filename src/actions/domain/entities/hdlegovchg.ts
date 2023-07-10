/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:37:43 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Hdlegovchg` object.
 *
 * @class
 */
export class Hdlegovchg implements Entity {
  /**
   * Constructs a new instance of the `Hdlegovchg` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Hdlegovchg` - An instance of the `Hdlegovchg` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Hdlegovchg` class to a JSON object.
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
   * Creates an instance of the `Hdlegovchg` class.
   *
   * @static
   * @public
   * @returns `Hdlegovchg` An instance of the `Hdlegovchg` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Hdlegovchg {
    const entity = new Hdlegovchg(
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Hdlegovchg {
    return new Hdlegovchg(
      '',
    );
  }
}

