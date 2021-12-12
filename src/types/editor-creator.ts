import { EditorConfiguratorCallback } from './editor-configurator-callback';
import { Form } from './form';

export type EditorCreator = <TDataRow>(configurator:EditorConfiguratorCallback<TDataRow>)=>Form<TDataRow>
