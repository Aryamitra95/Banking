import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { AccountFormSchema } from '@/lib/utils'

const formSchema = AccountFormSchema;

type SchemaKeys = keyof z.infer<typeof formSchema>;

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}

const PersonalInput = ({ control, name, label, placeholder }: CustomInput) => {
  // Dynamically determine input type based on schema
  const determineInputType = (fieldName: SchemaKeys): string => {
    if (fieldName === 'Acc_age' || fieldName === 'Balance' || fieldName.startsWith('Acc_') || fieldName === 'no_of_defaults') {
      return 'number';
    }
    return 'text'; // default to text
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>
            {label}
          </FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={determineInputType(name as SchemaKeys)}
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  )
}

export default PersonalInput