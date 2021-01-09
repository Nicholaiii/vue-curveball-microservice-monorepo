import { Document, model, Schema } from 'mongoose'
import { Pet as IPet } from '../structures/pet'

export interface PetDocument extends IPet, Document {}

const PetSchema = new Schema<PetDocument>({
  name: String
})

export const Pet = model<PetDocument>('Pet', PetSchema)
