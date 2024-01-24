import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField } from '@/models/form'

type CheckboxFieldProps = {
  field: FormField
}

const FormCheckboxField: React.FC<CheckboxFieldProps> = ({ field }) => {
  const { register, formState } = useFormContext()
  const { errors } = formState

  return (
    <div className='mb-4'>
      <label htmlFor={field.key} className='flex items-center gap-2'>
        <input
          type='checkbox'
          {...register(field.key)}
          id={field.key}
          className='accent-indigo-500'
          disabled={field.disabled}
          defaultChecked={field.checked}
        />
        {field.label}
      </label>
      <span className='text-xs text-red-600'>
        {errors[field.key]?.message as string}
      </span>
    </div>
  )
}

export default FormCheckboxField
