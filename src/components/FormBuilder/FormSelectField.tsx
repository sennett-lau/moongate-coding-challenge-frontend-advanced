import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField } from '@/models/form'

type SelectFieldProps = {
  field: FormField
}

const FormSelectField: React.FC<SelectFieldProps> = ({ field }) => {
  const { register, formState } = useFormContext()
  const { errors } = formState

  return (
    <div className='mb-4'>
      <label htmlFor={field.key} className='block text-sm font-medium'>
        {field.label}
        {field.required && <span className='text-red-600'> *</span>}
      </label>
      <select
        {...register(field.key)}
        id={field.key}
        className='mt-1 px-2 py-1 block w-full bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-500'
        disabled={field.disabled}
      >
        {field.options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            selected={option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
      <span className='text-xs text-red-600'>
        {errors[field.key]?.message as string}
      </span>
    </div>
  )
}

export default FormSelectField
