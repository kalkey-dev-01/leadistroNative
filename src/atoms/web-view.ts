import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React from "react";
import {WebView as RnWebView, WebViewProps as RnWebViewProps} from 'react-native-webview'

const WebView = createBox<Theme, RnWebViewProps>(RnWebView)
export type WebViewProps = React.ComponentProps<typeof WebView>

export default WebView