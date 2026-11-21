import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api.js';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link
} from './styles.js';



export function Register() {
  const navigate = useNavigate()
  const schema = yup.object({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup.string().email().required('O e-mail é um campo obrigatório.'),
    password: yup
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres.')
      .required('A senha é um campo obrigatório.'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais.').required('Confirme sua senha.')
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password
      },
      {
        validateStatus: () => true
      })
    
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login')
        }, 2000)
        toast.success('Conta criada com sucesso!')
      } else if (status === 400 ) {
        toast.error('Email já cadastrado! Faça o login para continuar')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema. Tente novamente.')
    }
  };

  

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-login" />
      </LeftContainer>

      <RightContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>
            Crie sua conta
          </Title>

          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>


          <InputContainer>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input type="password" name="confirmPassword" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar conta</Button>

          <p>
            Já possui conta? <Link to="/login" >Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
