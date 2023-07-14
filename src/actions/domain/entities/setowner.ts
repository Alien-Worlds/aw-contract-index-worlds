/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Setowner` object.
 *
 * @class
 */
export class Setowner implements Entity {
  /**
   * Constructs a new instance of the `Setowner` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string newOwner
   * @param string [id]
   * @returns `Setowner` - An instance of the `Setowner` class.
   */
  public constructor(
    public dacId: string,
    public newOwner: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Setowner` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      newOwner: this.newOwner,
    };
  }

  /**
   * Creates an instance of the `Setowner` class.
   *
   * @static
   * @public
   * @param string dacId
   * @param string newOwner
   * @returns `Setowner` An instance of the `Setowner` class.
   */
  public static create(
    dacId: string,
    newOwner: string,
    id?: string,
    rest?: UnknownObject
  ): Setowner {
    const entity = new Setowner(
      dacId,
      newOwner,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Setowner {
    return new Setowner(
      '',
      '',
    );
  }
}

