import { atom } from 'jotai'

export const searchQueryAtom = atom<string>('')
export const inputFocusAtom = atom<boolean>(false)

export const responseDataAtom = atom<{}>({})