// import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'antd';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Form
        layout='vertical'
        name='normal_login'
        className='login-form'>
          <LoginForm/>
        </Form>
      <Button>Submit</Button>
    </>
  );
};

export default LoginPage;
