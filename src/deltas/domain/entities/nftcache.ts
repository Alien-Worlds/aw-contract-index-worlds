/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:52:08 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Nftcache` object.
 *
 * @class
 */
export class Nftcache implements Entity {
  /**
   * Constructs a new instance of the `Nftcache` class.
   *
   * @public
   * @constructor
   * @param number nftId
   * @param string schemaName
   * @param number value
   * @param string [id]
   * @returns `Nftcache` - An instance of the `Nftcache` class.
   */
  public constructor(
    public nftId: number,
    public schemaName: string,
    public value: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Nftcache` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      nftId: this.nftId,
      schemaName: this.schemaName,
      value: this.value,
    };
  }

  /**
   * Creates an instance of the `Nftcache` class.
   *
   * @static
   * @public
   * @param number nftId
   * @param string schemaName
   * @param number value
   * @returns `Nftcache` An instance of the `Nftcache` class.
   */
  public static create(
    nftId: number,
    schemaName: string,
    value: number,
    id?: string,
    rest?: UnknownObject
  ): Nftcache {
    const entity = new Nftcache(
      nftId,
      schemaName,
      value,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Nftcache {
    return new Nftcache(
      0,
      '',
      0,
    );
  }
}

