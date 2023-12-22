import { domains, inputs } from './constants';

export interface DialogField {
  inputType: Input
  label: string
  hint?: string
  prefix?: string
  iconName?: string
  rules?: ((num: number | string) => boolean | string)[]
  class?: string[]
}

export interface DialogSelectField extends DialogField {
  inputType: 'select'
  availableValues: readonly string[]
}

export interface DialogNumberField extends DialogField {
  inputType: 'number'
}

export type DialogAnyField = (DialogField | DialogSelectField | DialogNumberField)
export type Window = {
  title: string
  fields: DialogAnyField[]
}

export type Input = typeof inputs[number]
export type Domain = typeof domains[number]
