import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React from "react";
import {Image as NativeImage, ImageProps as NativeImageProps} from 'react-native'

const Image = createBox<Theme,NativeImageProps>(NativeImage)
export type ImageProps = React.ComponentProps<typeof Image>

export default Image