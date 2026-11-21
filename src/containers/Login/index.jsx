import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api.js';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles.js';

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser();

  const schema = yup.object({
    email: yup.string().email().required('O e-mail é um campo obrigatório.'),
    password: yup
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres.')
      .required('A senha é um campo obrigatório.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: {
          render(){
            setTimeout(() => {
              if (userData?.admin) { 
                navigate('/admin/pedidos')
              } else {
                navigate('/')
              }
            }, 2000)
            return 'Seja bem vindo(a)!'
          }
        },
        error: 'E-mail ou senha incorretos',
      },
    );
  
    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-login" />
      </LeftContainer>

      <RightContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>
            Olá, seja bem vindo(a) ao <span>Dev Burguer!</span> <br />
            Acesse com seu <span>Login e senha.</span>
          </Title>

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

          <Button type="submit">Entrar</Button>

          <p>
            Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
