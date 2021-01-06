import { getModelForClass, prop, Ref } from "@typegoose/typegoose"
import { Pet } from "./pet"

export class Person {
  @prop({ required: true })
  public name!: string

  @prop({ ref: Pet })
  public pets!: Ref<Pet>[]
}

export const PersonModel = getModelForClass(Person)
