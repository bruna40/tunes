import { useState, useEffect, useContext  } from 'react';
import { createUser } from '../../services/userAPI.js';
import { ContainerForm, Input, Button } from './style.js';
import logoTunes from '../../assets/logoTunes.jpg';
import { UserContext } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { name, setName } = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const min = 3;
    if (name.length >= min) {
      setDisabled(false);
      localStorage.setItem('userName', name);
    } else {
      setDisabled(true);
    }
  }, [name]);

  const Logar = async (event) => {
    setLoading(true);
    event.preventDefault();
    await createUser({ name });
    setLoading(false);
    navigate('/search');
  };

  return (
    <div data-test="page-login">
      {
        <ContainerForm>
          <h1>Tunes</h1>
          <img src={ logoTunes } alt="logoTunes" />
          <form>
            <Input
              type="text"
              data-test="login-name-input"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
              placeholder="Digite seu nome"
            />
            <Button
              type="submit"
              data-test="login-submit-button"
              onClick={ Logar }
              disabled={ disabled }
            >
              Entrar
            </Button>
          </form>
        </ContainerForm>
      }
    </div>
  );
};

export default Login;
