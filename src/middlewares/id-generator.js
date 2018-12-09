import { ADD_COMMENT } from '../constants'

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ID_LENGTH = 24

const newId = () => {
  let id = ''
  for (let i = 0; i < ID_LENGTH; i++) {
    id += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length))
  }
  return id
}

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    action.payload.comment = {
      ...action.payload.comment,
      id: newId()
    }
  }
  next(action)
}
