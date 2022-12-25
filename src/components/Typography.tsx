import { Text } from "@/atoms"
import { Theme } from "@/themes"
import { TextProps } from "@shopify/restyle"
import { TextProps as RnTextProps } from 'react-native'
import React from "react"

interface Props {
    props?: TextProps<Theme> & RnTextProps,
    children: React.ReactNode
    fontName: string
}

export const RegularText: React.FC<Props> = ({ props, children, fontName }) => {
    return (
        <>
            <Text fontFamily={`${fontName}-Regular`} {...props}>
                {children}
            </Text>
        </>
    )
}

export const BoldText: React.FC<Props> = ({ props, children, fontName }) => {
    return (
        <>
            <Text fontFamily={`${fontName}-Bold`} {...props}>
                {children}
            </Text>
        </>
    )
}

export const MediumText: React.FC<Props> = ({ props, children, fontName }) => {
    return (
        <>
            <Text fontFamily={`${fontName}-Medium`} {...props}>
                {children}
            </Text>
        </>
    )
}

export const SemiBoldText: React.FC<Props> = ({ props, children, fontName }) => {
    return (
        <>
            <Text fontFamily={`${fontName}-SemiBold`} {...props}>
                {children}
            </Text>
        </>
    )
}

export const lightText: React.FC<Props> = ({ props, children, fontName }) => {
    return (
        <>
            <Text fontFamily={`${fontName}-Light`} {...props}>
                {children}
            </Text>
        </>
    )
}
