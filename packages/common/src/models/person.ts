import { Document, model, Schema, Types } from 'mongoose'
import { Person as IPerson } from '../structures/person'
import { PetDocument } from './pet'

interface PersonDocument extends IPerson, Document {
  pets: Array<PetDocument['_id']>
}

const PersonSchema = new Schema<PersonDocument>({
  name: { type: String, required: true },
  pets: [{
    type: Types.ObjectId,
    ref: 'Pet'
  }]
})

export const Person = model<PersonDocument>('Person', PersonSchema)
