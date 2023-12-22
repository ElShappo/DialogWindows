import { domains, inputs } from './constants';

// common description of a single field in a current dialog window
export interface DialogField {
  inputType: Input
  label: string
  hint?: string
  prefix?: string
  iconName?: string
  rules?: ((num: number | string) => boolean | string)[] // there might be restrictions to values in input
  class?: string[]
}

// more detailed description of a single field when this field is of 'select' type
export interface DialogSelectField extends DialogField {
  inputType: 'select'
  availableValues: readonly string[]
}

// more detailed description of a single field when this field is of 'number' type
export interface DialogNumberField extends DialogField {
  inputType: 'number'
}

// matches any possible type of field
export type DialogAnyField = (DialogField | DialogSelectField | DialogNumberField)

// a window (or a tab) is described by its' title and fields
export type Window = {
  title: string
  fields: DialogAnyField[]
}

// to check that form submission is working properly the data is sent to a server
// a single record of such data is given below
export type POSTRecord = {
  title: string
  label: string
  value: string | number
}

// all data that is sent to server
export type POSTBody = POSTRecord[]

export type Input = typeof inputs[number] // available types of input
export type Domain = typeof domains[number] // available types of domains
