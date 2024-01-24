import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField } from '@/models/form'

type TextareaFieldProps = {
  field: FormField
}

const FormTextareaField: React.FC<TextareaFieldProps> = ({ field }) => {
  const { register, formState } = useFormContext()
  const { errors } = formState

  return (
    <div className='mb-4'>
      <label htmlFor={field.key} className='block text-sm font-medium'>
        {field.label}
        {field.required && <span className='text-red-600'> *</span>}
      </label>
      <textarea
        {...register(field.key)}
        id={field.key}
        className='mt-1 px-2 py-1 block w-full bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 transition duration-300'
        placeholder={field.placeholder}
        disabled={field.disabled}
        readOnly={field.readonly}
        rows={field.size || 3}
      />
      <span className='text-xs text-red-600'>
        {errors[field.key]?.message as string}
      </span>
    </div>
  )
}

export default FormTextareaField
