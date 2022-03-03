import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Image } from "@chakra-ui/react"
import logo from '../assets/logo.svg'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'


type SignInFormData = {
  login: string
  password: string
}

const signInFormSchema = yup.object().shape({
  login: yup.string().required('Login obrigatório'),
  password: yup.string().required('Sehha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const { signIn } = useContext(AuthContext)

  const handleSignIn: SubmitHandler<SignInFormData> = async ({ login, password }) => {
    try {
      await signIn({ username: login, password })
    } catch (e) {
      alert (e)
    }
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p="2rem"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Image src={logo} alt="lucky sena logo" h={[6, 7]} w={[6, 7]} ml='auto' />
        <Stack spacing="4">
          <Input type="login" label="Usuário" error={errors.login} {...register('login')} />
          <Input type="password" label="Senha" error={errors.password} {...register('password')} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="gray"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}