import { EmployeeContact } from './../models/model';

import { atom } from "jotai";

export const singleContactAtom = atom<EmployeeContact>({} as EmployeeContact)