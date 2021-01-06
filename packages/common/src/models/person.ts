import { Document, model, Schema, Types } from 'mongoose'
import { PetDocument } from './pet'

interface Person {
  name: string
  pets: Array<Types.ObjectId>
}

interface PersonDocument extends Person, Document {
  pets: PetDocument['_id']
}

const PersonSchema = new Schema<PersonDocument>({
  name: { type: String, required: true },
  pets: [String]
})

export const PersonModel = model<PersonDocument>('Person', PersonSchema)
