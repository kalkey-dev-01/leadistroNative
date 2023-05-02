// import { RichToolbarProps } from './../../node_modules/react-native-pell-rich-editor/index.d';
import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import React from 'react'
import {
  RichEditor as RichEditorComponent,
  RichToolbar as RichToolbarComponent,
  RichEditorProps as RichEditorComponentProps,
  RichToolbarProps as RichToolbarComponentProps,
  actions,
} from 'react-native-pell-rich-editor'

const RichEditor = createBox<Theme, RichEditorComponentProps>(RichEditorComponent)

export const RichToolbar = createBox<Theme,RichToolbarComponentProps<actions>>(RichToolbarComponent);

export type RichEditorProps =  React.ComponentProps<typeof RichEditor>; 

export type RichToolbarProps =  React.ComponentProps<typeof RichToolbar>;

export default RichEditor;
