import { FormField, FormFieldType } from '@/models/form'
import { useForm, FormProvider, Form } from 'react-hook-form'
import FormInputTextField from './FormInputFieldText'
import FormSelectField from './FormSelectField'
import FormCheckboxField from './FormCheckboxField'
import FormRadioField from './FormRadioField'
import FormTextareaField from './FormTextareaField'

const FormBuilder = ({
  fields,
  onSubmit: onSubmit = () => {},
}: {
  fields: FormField[]
  onSubmit?: (data: any) => void
}) => {
  const methods = useForm({
    mode: 'onChange',
  })

  const rendering = (field: FormField) => {
    switch (field.type) {
      case FormFieldType.TEXT:
      case FormFieldType.EMAIL:
      case FormFieldType.PASSWORD:
      case FormFieldType.NUMBER:
      case FormFieldType.TEL:
      case FormFieldType.DATE:
      case FormFieldType.TIME:
      case FormFieldType.DATETIME:
      case FormFieldType.URL:
        return <FormInputTextField field={field} />
      case FormFieldType.SELECT:
        return <FormSelectField field={field} />
      case FormFieldType.CHECKBOX:
        return <FormCheckboxField field={field} />
      case FormFieldType.RADIO:
        return <FormRadioField field={field} />
      case FormFieldType.TEXTAREA:
        return <FormTextareaField field={field} />
      default:
        return null
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='px-6 md:px-20 py-4 md:py-10 border rounded-lg shadow-md bg-gray-800 border-gray-700 max-w-full'
      >
        {fields.map((field) => (
          <div key={field.key}>{rendering(field)}</div>
        ))}
        <button
          type='submit'
          className='btn-primary bg-blue-500 py-2 rounded-md w-full mt-4 hover:bg-green-600 transition duration-300'
        >
          Submit
        </button>
      </form>
    </FormProvider>
  )
}

export default FormBuilder
