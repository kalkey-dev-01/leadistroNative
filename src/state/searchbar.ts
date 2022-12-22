import { atom } from 'jotai'
// import { AxiosResponse, AxiosError } from 'axios'
import { EmployeeContact } from '@/models/model'

export const searchQueryAtom = atom<string>('')
export const inputFocusAtom = atom<boolean>(false)

export const responseDataAtom = atom<Array<EmployeeContact>>([])
// export const responseErrorAtom = atom<AxiosError>

export const loadingAtom = atom<boolean>(false)



