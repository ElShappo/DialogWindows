import { domains, inputs } from './constants';

export interface DialogField {
  inputType: Input
  label: string
  hint?: string
  prefix?: string
  iconName?: string
  class?: string[]
}

export interface DialogSelectField extends DialogField {
  inputType: 'select'
  availableValues: readonly string[]
}

export interface DialogNumberField extends DialogField {
  inputType: 'number'
  restrictions: (num: number) => boolean
}

export type DialogAnyField = (DialogField | DialogSelectField | DialogNumberField)
export type Window = {
  title: string
  fields: DialogAnyField[]
}

export type Input = typeof inputs[number]
export type Domain = typeof domains[number]
