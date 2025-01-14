import { atom } from 'jotai'
// import { AxiosResponse, AxiosError } from 'axios'
import { ConvertCompanyNames, EmployeeContact } from '@/models/model'

export const searchQueryAtom = atom<string>('')
export const searchDomainAtom = atom<string>('')
export const inputFocusAtom = atom<boolean>(false)

export const responseDataAtom = atom<Array<EmployeeContact>>([])
// export const responseErrorAtom = atom<AxiosError>

export const loadingAtom = atom<boolean>(false)
export const UserStateLoadingAtom = atom<boolean>(false)

export const sswAtom = atom<Array<ConvertCompanyNames>>([])

export const searchContacts = atom<string>('')

export const savedContactDataAtom = atom<Array<ConvertCompanyNames>>([])

export const PromptAtom = atom<string>('');

export const EnrichSearchCount  = atom<number>(1);