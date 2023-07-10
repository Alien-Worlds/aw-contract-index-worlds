/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:37:43 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Setsociallnk` object.
 *
 * @class
 */
export class Setsociallnk implements Entity {
  /**
   * Constructs a new instance of the `Setsociallnk` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string key
   * @param string link
   * @param string [id]
   * @returns `Setsociallnk` - An instance of the `Setsociallnk` class.
   */
  public constructor(
    public dacId: string,
    public key: string,
    public link: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Setsociallnk` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      key: this.key,
      link: this.link,
    };
  }

  /**
   * Creates an instance of the `Setsociallnk` class.
   *
   * @static
   * @public
   * @returns `Setsociallnk` An instance of the `Setsociallnk` class.
   */
  public static create(
    dacId: string,
    key: string,
    link: string,
    id?: string,
    rest?: UnknownObject
  ): Setsociallnk {
    const entity = new Setsociallnk(
      dacId,
      key,
      link,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Setsociallnk {
    return new Setsociallnk(
      '',
      '',
      '',
    );
  }
}

