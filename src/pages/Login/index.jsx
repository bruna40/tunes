import { useState, useEffect, useContext  } from 'react';
import { createUser } from '../../services/userAPI.js';
import { ContainerForm, Input, Button } from './style.js';
import { CassetteTape } from 'lucide-react';
import { UserContext } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { name, setName } = useContext(UserContext);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const min = 3;
    if (name.length >= min) {
      setButtonDisabled(false);
      localStorage.setItem('userName', name);
    } else {
      setButtonDisabled(true);
    }
  }, [name]);

  const Logar = async (event) => {
    event.preventDefault();
    await createUser({ name });
    navigate('/search');
  };

  return (
    <div data-test="page-login">
      {
        <ContainerForm>
          <h1>Tunes</h1>
          <span><CassetteTape size={200}  color={'#3b2853'} strokeWidth={0.75}/></span>
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
              disabled={ isButtonDisabled }
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
