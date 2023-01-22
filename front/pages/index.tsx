import { AuthApi } from '@codegen/api/api/auth-api';
import { Configuration } from '@codegen/api/configuration';
import { AuthSignUpPostRequest } from '@codegen/api/model';
import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const API_URL = 'http://localhost:31111';
const configuration = new Configuration({
  basePath: API_URL,
});
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const Home: NextPage = () => {
  const [loginUser, setLoginUser] = useState<{ name: string }>();

  const [loginForm, setLoginForm] = useState<AuthSignUpPostRequest>({ name: '', email: '', password: '' });
  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, name: e.target.value }));
  }, []);
  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, email: e.target.value }));
  }, []);
  const handleChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, password: e.target.value }));
  }, []);

  useEffect(() => {
    const infoGet = async () => {
      const res = await new AuthApi(configuration, '', axiosInstance).authInfoGet();
      if (res.data.name) {
        setLoginUser({ name: res.data.name });
      }
    };

    infoGet();
  }, []);

  const handleSignUp = async () => {
    const res = await new AuthApi(configuration, '', axiosInstance).authSignUpPost(loginForm);
    if (res.data.name) {
      setLoginUser({ name: res.data.name });
    }
  };

  return (
    <div className={styles.container}>
      <Head>Fastify Todo Application</Head>
      <main className={styles.main}>
        {loginUser ? (
          <div>Hello: {loginUser.name}</div>
        ) : (
          <div>
            SignUp
            <form onSubmit={handleSignUp}>
              <div>
                <input type="text" placeholder="name" value={loginForm.name} onChange={handleChangeName} />
                <br />
                <input type="email" placeholder="email" value={loginForm.email} onChange={handleChangeEmail} />
                <br />
                <input
                  type="password"
                  placeholder="password"
                  value={loginForm.password}
                  onChange={handleChangePassword}
                />
              </div>
              <button type="submit">SignUp</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
