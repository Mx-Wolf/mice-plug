import { ComponentType } from 'react';
import { EditorProps } from '../editor-props';

export type MiceControlBase<T> = ComponentType<EditorProps<T>>
