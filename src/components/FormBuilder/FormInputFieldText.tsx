import { FormField, FormFieldType } from '@/models/form'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  field: FormField
}

const FormInputTextField = (props: Props) => {
  const { field } = props

  const { register, formState } = useFormContext()
  const { errors } = formState

  const validationRules = {
    required: field.required
      ? field.errorMessages?.required || 'Required'
      : false,
    maxLength: field.maxLength
      ? {
          value: field.maxLength,
          message: field.errorMessages?.maxLength
            ? field.errorMessages?.maxLength
            : `Maximum length is ${field.maxLength}`,
        }
      : undefined,
    minLength: field.minLength
      ? {
          value: field.minLength,
          message: field.errorMessages?.minLength
            ? field.errorMessages?.minLength
            : `Minimum length is ${field.minLength}`,
        }
      : undefined,
    max: field.max
      ? {
          value: field.max,
          message: field.errorMessages?.max
            ? field.errorMessages?.max
            : `Maximum value is ${field.max}`,
        }
      : undefined,
    min: field.min
      ? {
          value: field.min,
          message: field.errorMessages?.min
            ? field.errorMessages?.min
            : `Minimum value is ${field.min}`,
        }
      : undefined,
    pattern: field.pattern
      ? {
          value: new RegExp(field.pattern),
          message: field.errorMessages?.pattern
            ? field.errorMessages?.pattern
            : `Invalid format`,
        }
      : undefined,
  }

  const getTypeByFieldType = (type: FormFieldType) => {
    switch (type) {
      case FormFieldType.TEXT:
        return 'text'
      case FormFieldType.EMAIL:
        return 'email'
      case FormFieldType.PASSWORD:
        return 'password'
      case FormFieldType.NUMBER:
        return 'number'
      case FormFieldType.TEL:
        return 'tel'
      case FormFieldType.DATE:
        return 'date'
      case FormFieldType.TIME:
        return 'time'
      case FormFieldType.DATETIME:
        return 'datetime-local'
      case FormFieldType.URL:
        return 'url'
      case FormFieldType.HIDDEN:
        return 'hidden'
      default:
        return 'text'
    }
  }

  return (
    <div className='mb-4'>
      <div className='flex justify-between mb-1'>
        <label htmlFor={field.key} className='block text-sm font-medium'>
          {field.label}
          {field.required && <span className='text-red-600'> *</span>}
        </label>
        <span className='text-xs text-red-600'>
          {errors[field.key]?.message as string}
        </span>
      </div>
      <input
        type={getTypeByFieldType(field.type)}
        {...register(field.key, validationRules)}
        id={field.key}
        className='px-2 py-1 block w-full bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 transition duration-300'
        placeholder={field.placeholder}
        disabled={field.disabled || false}
        readOnly={field.readonly || false}
        size={field.size || 50}
        step={field.step || 1}
      />
    </div>
  )
}

export default FormInputTextField
