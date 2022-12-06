import { Box } from "@/atoms";

import { View } from "react-native";


export type ListComponent = <T>(
    { items, render }: { items: T[]; render: (item: T) => React.ReactNode }
) => JSX.Element;



const ECard: ListComponent = ({ items, render }) => {
    return (
        <View>
            {items.slice(0, 20).map((item, index) => <Box key={index.toString()}>{render(item)}</Box>)}
        </View>
    )
}
export default ECard