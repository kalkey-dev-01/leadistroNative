import { Text } from "@/atoms"
import { Theme } from "@/themes"
import { TextProps } from "@shopify/restyle"
import {TextProps as RnTextProps} from 'react-native'
import React from "react"

interface Props {
    props?: TextProps<Theme> & RnTextProps,
    children: React.ReactNode
}

export const RegularText: React.FC<Props> = ({ props, children }) => {
    return (
        <>
            <Text fontFamily={'Comfortaa-Regular'} {...props}>
                {children}
            </Text>
        </>
    )
}

export const BoldText: React.FC<Props> = ({ props, children }) => {
    return (
        <>
            <Text fontFamily={'Comfortaa-Bold'} {...props}>
                {children}
            </Text>
        </>
    )
}

export const MediumText: React.FC<Props> = ({ props, children }) => {
    return (
        <>
            <Text fontFamily={'Comfortaa-Medium'} {...props}>
                {children}
            </Text>
        </>
    )
}

export const SemiBoldText: React.FC<Props> = ({ props, children }) => {
    return (
        <>
            <Text fontFamily={'Comfortaa-SemiBold'} {...props}>
                {children}
            </Text>
        </>
    )
}

export const lightText: React.FC<Props> = ({ props, children }) => {
    return (
        <>
            <Text fontFamily={'Comfortaa-Light'} {...props}>
                {children}
            </Text>
        </>
    )
}
