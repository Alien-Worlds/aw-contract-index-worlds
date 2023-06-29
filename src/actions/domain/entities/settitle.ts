/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Settitle` object.
 *
 * @class
 */
export class Settitle implements Entity {
  /**
   * Constructs a new instance of the `Settitle` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string title
   * @param string [id]
   * @returns `Settitle` - An instance of the `Settitle` class.
   */
  public constructor(
    public dacId: string,
    public title: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Settitle` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      title: this.title,
    };
  }

  /**
   * Creates an instance of the `Settitle` class.
   *
   * @static
   * @public
   * @returns `Settitle` An instance of the `Settitle` class.
   */
  public static create(
    dacId: string,
    title: string,
    id?: string,
    rest?: UnknownObject
  ): Settitle {
    const entity = new Settitle(
      dacId,
      title,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Settitle {
    return new Settitle(
      '',
      '',
    );
  }
}

