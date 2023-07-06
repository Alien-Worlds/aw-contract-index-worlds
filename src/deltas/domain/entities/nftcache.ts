/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 10:13:18 GMT
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
   * @param bigint nftId
   * @param string schemaName
   * @param bigint value
   * @param string [id]
   * @returns `Nftcache` - An instance of the `Nftcache` class.
   */
  public constructor(
    public nftId: bigint,
    public schemaName: string,
    public value: bigint,
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
   * @returns `Nftcache` An instance of the `Nftcache` class.
   */
  public static create(
    nftId: bigint,
    schemaName: string,
    value: bigint,
    id?: string,
    rest?: UnknownObject
  ): Nftcache {
    const entity = new Nftcache(
      nftId,
      schemaName,
      value,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Nftcache {
    return new Nftcache(
      0n,
      '',
      0n,
    );
  }
}

