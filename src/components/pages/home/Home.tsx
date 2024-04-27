import { useAppSelector } from '../../../store/hooks';

export const Home = () => {
  const email = useAppSelector((state) => state.login.email);

  console.log('email: ', email);
  return <div>Home</div>;
};
