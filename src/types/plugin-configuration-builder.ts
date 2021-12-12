import { ElementType } from 'react';
import { Column } from './column';

export interface PluginConfigurationBuilder<T>{
  control:()=>ElementType<T>
  column:{
    date:(column:Partial<Column<T>>)=>Column<T>,
    int:(column:Partial<Column<T>>)=>Column<T>,
    label:(column:Partial<Column<T>>)=>Column<T>,
    tag:(column:Partial<Column<T>>)=>Column<T>,
    description:(column:Partial<Column<T>>)=>Column<T>,
  }
}
