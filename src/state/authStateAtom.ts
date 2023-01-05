import { useAtom } from "jotai";
import {FirebaseAuthTypes} from '@react-native-firebase/auth'

export const AuthAtom = useAtom<FirebaseAuthTypes.User | null>()