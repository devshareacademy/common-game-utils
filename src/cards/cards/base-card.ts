import type { Card } from '../types';

export default abstract class BaseCard<Type> implements Card<Type> {
  #cardType: Type;
  #visible: boolean;
  #id: number;

  constructor(id: number, cardType: Type) {
    this.#id = id;
    this.#cardType = cardType;
    this.#visible = false;
  }

  get cardType(): Type {
    return this.#cardType;
  }

  get visible(): boolean {
    return this.#visible;
  }

  set visible(value: boolean) {
    this.#visible = value;
  }

  get id(): number {
    return this.#id;
  }
}
