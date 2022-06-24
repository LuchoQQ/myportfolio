import { Input } from '@chakra-ui/react'
import React from 'react'

const FormInput = ({type, placeholder, id}) => {
  return (
    <>
        <Input
            type={type}
            placeholder={placeholder}
            id={id} 
            color={'#dedede'}
            variant={'flushed'}
            p={'2vw'}
            w={'100%'}
            fontSize={'xl'}
            focusBorderColor={'#ad1d71'}

        />
    </>
  )
}

export default FormInput