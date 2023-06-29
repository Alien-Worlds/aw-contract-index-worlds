/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Regaccount` object.
 *
 * @class
 */
export class Regaccount implements Entity {
  /**
   * Constructs a new instance of the `Regaccount` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string account
   * @param number type
   * @param string [id]
   * @returns `Regaccount` - An instance of the `Regaccount` class.
   */
  public constructor(
    public dacId: string,
    public account: string,
    public type: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Regaccount` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
      account: this.account,
      type: this.type,
    };
  }

  /**
   * Creates an instance of the `Regaccount` class.
   *
   * @static
   * @public
   * @returns `Regaccount` An instance of the `Regaccount` class.
   */
  public static create(
    dacId: string,
    account: string,
    type: number,
    id?: string,
    rest?: UnknownObject
  ): Regaccount {
    const entity = new Regaccount(
      dacId,
      account,
      type,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Regaccount {
    return new Regaccount(
      '',
      '',
      0,
    );
  }
}

