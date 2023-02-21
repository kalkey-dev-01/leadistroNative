// import { SavedLeads } from './../models/model';
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { atom } from "jotai";

export const firestoreDataAtom  = atom<FirebaseFirestoreTypes.DocumentData[] | undefined>([])

