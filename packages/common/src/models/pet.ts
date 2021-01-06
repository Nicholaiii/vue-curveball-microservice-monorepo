import { getModelForClass, prop } from "@typegoose/typegoose"

export class Pet {
  @prop({ required: true })
  public name!: string
}

export const PetModel = getModelForClass(Pet)
