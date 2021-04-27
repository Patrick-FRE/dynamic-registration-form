export interface DynamicFormConfig {
  formControls: DynamicFormControl[];
}

export interface DynamicFormControl {
  id: string;
  label: string;
  type: DynamicFormControlType;
  value: string;
}

export type DynamicFormControlType = 'input' | 'date';
