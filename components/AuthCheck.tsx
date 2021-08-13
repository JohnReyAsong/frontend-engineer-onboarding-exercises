import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/userAuthentication';

const AuthCheck: FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(userLogin(token));
    }
  });

  //   useEffect(() => {
  //     const ifAuth: string[] = ['/login', '/signup'];
  //     if (isLoggedin && ifAuth.includes(router.asPath)) void router.push('/products');
  //   }, [isLoggedin, router]);

  return <div>{children}</div>;
};

export default AuthCheck;
