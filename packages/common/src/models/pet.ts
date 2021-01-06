import { Document } from "mongoose"

interface Pet {
  name: string
}

export interface PetDocument extends Pet, Document {}
