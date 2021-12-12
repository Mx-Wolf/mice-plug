import { EditorConfiguratorCallback } from './editor-configurator-callback';
import { Form } from './form';

export type DefineEditor = <TDataRow>(configurator:EditorConfiguratorCallback<TDataRow>)=>Form<TDataRow>
