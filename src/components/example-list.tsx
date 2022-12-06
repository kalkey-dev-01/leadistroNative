import { EmployeeContact } from "@/models/model";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import {FlatList, FlatListProps} from 'react-native'

const StyledFlatlist = createBox<Theme, FlatListProps<EmployeeContact>>(FlatList)
