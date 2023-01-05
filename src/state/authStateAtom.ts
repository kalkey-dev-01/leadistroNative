import { atom } from "jotai";
import {FirebaseAuthTypes} from '@react-native-firebase/auth'

export const AuthAtom = atom<FirebaseAuthTypes.User | null>(null)
  