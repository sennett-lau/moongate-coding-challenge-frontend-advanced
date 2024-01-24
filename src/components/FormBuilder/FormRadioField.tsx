import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField, FormSelectOption } from '@/models/form'

type RadioFieldProps = {
  field: FormField
}

const FormRadioField: React.FC<RadioFieldProps> = ({ field }) => {
  const { register, formState } = useFormContext()
  const { errors } = formState

  return (
    <div className='mb-4'>
      <span className='block text-sm font-medium mb-1'>
        {field.label}
        {field.required && <span className='text-red-600'> *</span>}
      </span>
      {field.options?.map((option: FormSelectOption) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className='flex items-center gap-2'
        >
          <input
            type='radio'
            {...register(field.key)}
            id={option.value}
            value={option.value}
            className='accent-indigo-500'
            disabled={option.disabled}
            defaultChecked={option.selected}
          />
          {option.label}
        </label>
      ))}
      <span className='text-xs text-red-600'>
        {errors[field.key]?.message as string}
      </span>
    </div>
  )
}

export default FormRadioField
