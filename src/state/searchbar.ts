import { atom } from 'jotai'
import { AxiosResponse, AxiosError } from 'axios'

export const searchQueryAtom = atom<string>('')
export const inputFocusAtom = atom<boolean>(false)

export const responseDataAtom = atom<AxiosResponse>({})
export const responseErrorAtom = atom<AxiosError>
