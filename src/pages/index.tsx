import FormBuilder from '@/components/FormBuilder/FormBuilder'
import { FormField, FormFieldType } from '@/models/form'

export default function Home() {
  const fields: FormField[] = [
    {
      type: FormFieldType.TEXT,
      label: 'Name',
      key: 'name',
      required: true,
      maxLength: 50,
      placeholder: 'Enter your name',
    },
    {
      type: FormFieldType.EMAIL,
      label: 'Email',
      key: 'email',
      required: true,
      maxLength: 50,
      placeholder: 'Enter your email',
    },
    {
      type: FormFieldType.NUMBER,
      label: 'Number',
      key: 'number',
      required: true,
      maxLength: 50,
      placeholder: 'Enter a number',
    },
    {
      type: FormFieldType.PASSWORD,
      label: 'Password',
      key: 'password',
      required: true,
      maxLength: 50,
      placeholder: 'Enter your password',
    },
    {
      type: FormFieldType.TEL,
      label: 'Phone',
      key: 'phone',
      required: true,
      maxLength: 8,
      placeholder: 'Enter your phone number',
      pattern: '[0-9]{8}',
    },
    {
      type: FormFieldType.DATE,
      label: 'Date',
      key: 'date',
      required: true,
      placeholder: 'Enter a date',
    },
    {
      type: FormFieldType.TIME,
      label: 'Time',
      key: 'time',
      required: true,
      placeholder: 'Enter a time',
    },
    {
      type: FormFieldType.DATETIME,
      label: 'Datetime',
      key: 'datetime',
      required: true,
      placeholder: 'Enter a datetime',
    },
    {
      type: FormFieldType.URL,
      label: 'URL',
      key: 'url',
      required: true,
      placeholder: 'Enter a URL',
    },
    {
      type: FormFieldType.SELECT,
      label: 'Select',
      key: 'select',
      required: true,
      placeholder: 'Select an option',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
          selected: true,
        },
        {
          label: 'Option 3',
          value: 'option3',
          disabled: true,
        },
      ],
    },
    {
      type: FormFieldType.CHECKBOX,
      label: 'Checkbox',
      key: 'checkbox',
      required: true,
    },
    {
      type: FormFieldType.RADIO,
      label: 'Radio',
      key: 'radio',
      required: true,
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
          selected: true,
        },
        {
          label: 'Option 3',
          value: 'option3',
          disabled: true,
        },
      ],
    },
    {
      type: FormFieldType.TEXTAREA,
      label: 'Textarea',
      key: 'textarea',
      required: true,
      placeholder: 'Enter your message',
      size: 5,
    },
  ]
  const onSubmit = async (data: any) => {
    console.log('============================')
    console.log('Form submitted')
    console.log(data)
    console.log('============================')

    // submit to localhost:3000/api/form-submission
    const resp = await fetch('/api/form-submission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const json = await resp.json()
    console.log(json)
  }

  return (
    <div className='bg-zinc-900 min-h-screen flex justify-center items-center flex-col p-4'>
      <h1 className='text-white text-center text-4xl font-bold mb-4'>
        Form Builder
      </h1>
      <FormBuilder fields={fields} onSubmit={onSubmit} />
    </div>
  )
}
