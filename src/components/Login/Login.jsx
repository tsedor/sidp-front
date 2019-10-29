import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Icon, Button } from 'antd';
import { loginRequestStart, passwordFieldUpdate, usernameFieldUpdate } from '../../actions/auth';

const LoginContainer = styled.main`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
`;

const StyledButton = styled(Button)`
  width: 110px;
`;

const StyledIcon = styled(Icon)`
  color: rgba(0, 0, 0, .25);
`;

const Login = ({ form }) => {
  const { getFieldDecorator } = form;
  const dispatch = useDispatch();

  const loginRequest = useSelector(state => state.authReducer.loginRequest);
  const auth = useSelector(state => state.authReducer.auth);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginRequestStart())
  }

  return (
    <LoginContainer>
    {auth === true && <Redirect to="/" />}
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: "Podaj nazwę użytkownika" }]
          })(
            <Input onChange={e => dispatch(usernameFieldUpdate(e.target.value))} prefix={<StyledIcon type="user" />} placeholder="Użytkownik" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: "Podaj swoje hasło" }]
          })(
            <Input onChange={e => dispatch(passwordFieldUpdate(e.target.value))} prefix={<StyledIcon type="lock" />} placeholder="Hasło" type="password" />
          )}
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={loginRequest}>Zaloguj się</StyledButton>
        </Form.Item>
      </Form>
    </LoginContainer>
  )
}

export default Form.create({name: 'login_form'})(Login);