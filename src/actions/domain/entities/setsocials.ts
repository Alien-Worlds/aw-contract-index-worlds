/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Setsocials` object.
 *
 * @class
 */
export class Setsocials implements Entity {
  /**
   * Constructs a new instance of the `Setsocials` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param boolean active
   * @param string [id]
   * @returns `Setsocials` - An instance of the `Setsocials` class.
   */
  public constructor(
    public dacId: string,
    public active: boolean,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Setsocials` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      active: this.active,
    };
  }

  /**
   * Creates an instance of the `Setsocials` class.
   *
   * @static
   * @public
   * @param string dacId
   * @param boolean active
   * @returns `Setsocials` An instance of the `Setsocials` class.
   */
  public static create(
    dacId: string,
    active: boolean,
    id?: string,
    rest?: UnknownObject
  ): Setsocials {
    const entity = new Setsocials(
      dacId,
      active,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Setsocials {
    return new Setsocials(
      '',
      false,
    );
  }
}

