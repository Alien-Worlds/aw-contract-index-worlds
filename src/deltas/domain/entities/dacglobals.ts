/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:37:43 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Dacglobals` object.
 *
 * @class
 */
export class Dacglobals implements Entity {
  /**
   * Constructs a new instance of the `Dacglobals` class.
   *
   * @public
   * @constructor
   * @param PairStringStateValueVariant[] data
   * @param string [id]
   * @returns `Dacglobals` - An instance of the `Dacglobals` class.
   */
  public constructor(
    public data: PairStringStateValueVariant[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Dacglobals` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      data: this.data,
    };
  }

  /**
   * Creates an instance of the `Dacglobals` class.
   *
   * @static
   * @public
   * @returns `Dacglobals` An instance of the `Dacglobals` class.
   */
  public static create(
    data: PairStringStateValueVariant[],
    id?: string,
    rest?: UnknownObject
  ): Dacglobals {
    const entity = new Dacglobals(
      data,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Dacglobals {
    return new Dacglobals(
        []
,
    );
  }
}

/**
 * Represents a `PairStringStateValueVariant` object.
 *
 * @class
 */
export class PairStringStateValueVariant implements Entity {
  /**
   * Constructs a new instance of the `PairStringStateValueVariant` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param Array<unknown> value
   * @param string [id]
   * @returns `PairStringStateValueVariant` - An instance of the `PairStringStateValueVariant` class.
   */
  public constructor(
    public key: string,
    public value: Array<unknown>,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `PairStringStateValueVariant` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      value: this.value,
    };
  }

  /**
   * Creates an instance of the `PairStringStateValueVariant` class.
   *
   * @static
   * @public
   * @returns `PairStringStateValueVariant` An instance of the `PairStringStateValueVariant` class.
   */
  public static create(
    key: string,
    value: Array<unknown>,
    id?: string,
    rest?: UnknownObject
  ): PairStringStateValueVariant {
    const entity = new PairStringStateValueVariant(
      key,
      value,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): PairStringStateValueVariant {
    return new PairStringStateValueVariant(
      '',
      [],
    );
  }
}

