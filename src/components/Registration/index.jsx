import React, { useState } from 'react';
import userLogo from './img/user.svg';
import './style.css';

const Registration = ({}) => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const [validation, setValidation] = useState({
    emailExeption: false,
    passwordExeption: false,
    mandatoryFieldExeption: false,
    submitConfirmation: false,
    submitData: '',
  });

  const usernameFromEmail = (email) => {
    return email.split('@')[0];
  };

  const handleChangeEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value,
      username: usernameFromEmail(event.target.value),
    });
    if (user.email.includes('@')) {
      setValidation({
        ...validation,
        emailExeption: false,
      });
    }
  };
  const handleChangeUsername = (event) => {
    setUser({
      ...user,
      username: event.target.value,
    });
  };
  const handleChangePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };
  const handleChangePasswordConfirm = (event) => {
    setUser({
      ...user,
      passwordConfirm: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.email.includes('@')) {
      setValidation({
        ...validation,
        emailExeption: true,
      });
    } else if (user.password !== user.passwordConfirm) {
      setValidation({
        ...validation,
        passwordExeption: true,
      });
    } else if (
      user.email === '' ||
      user.username === '' ||
      user.password === '' ||
      user.passwordConfirm === ''
    ) {
      setValidation({
        ...validation,
        mandatoryFieldExeption: true,
      });
    } else {
      console.log(user);
      setValidation({
        ...validation,
        emailExeption: false,
        passwordExeption: false,
        mandatoryFieldExeption: false,
        submitConfirmation: true,
        submitData: `e-mail: ${user.email}, user name: ${user.username}`,
      });
      setUser({
        ...user,
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
      });
    }

    console.log(user);
  };

  return (
    <>
      <h1 className="uppercase">Registration</h1>

      <form className="form">
        <div className="round">
          <div className="roundIn">
            <img src={userLogo} alt="Logo user" />
          </div>
        </div>

        <input
          type="email"
          placeholder="Email Address"
          onChange={handleChangeEmail}
          value={validation.submitConfirmation ? '' : user.email}
        />
        <div className={validation.emailExeption ? 'error' : 'dnone'}>
          Invalid e-mail
        </div>

        <input
          type="text"
          placeholder="User Name"
          onChange={handleChangeUsername}
          value={validation.submitConfirmation ? '' : user.username}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
          value={validation.submitConfirmation ? '' : user.password}
        />

        <input
          type="text"
          placeholder="Confirm password"
          onChange={handleChangePasswordConfirm}
          value={validation.submitConfirmation ? '' : user.passwordConfirm}
        />
        <div className={validation.passwordExeption ? 'error' : 'dnone'}>
          Not identical passwords.
        </div>

        <div className={validation.mandatoryFieldExeption ? 'error' : 'dnone'}>
          Not all fields are filled.
        </div>
        <div className={validation.submitConfirmation ? 'success' : 'dnone'}>
          Your registration was successful ({validation.submitData})
        </div>

        <div className={validation.submitConfirmation ? 'dnone' : ''}>
          <button className="uppercase" onClick={handleSubmit}>
            Register
          </button>
        </div>
        <div className={validation.submitConfirmation ? '' : 'dnone'}>
          <a href="/">
            <button className="uppercase">Add more</button>
          </a>
        </div>
      </form>
    </>
  );
};

export default Registration;
