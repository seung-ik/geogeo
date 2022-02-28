import { RootState } from '@store/reducers';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const { language, name, age } = useSelector(({ userStore }: RootState) => userStore);
  const router = useRouter();
  return (
    <>
      <div>뭐만들지?</div>
      <div>{language}</div>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={() => router.push('/virtual')}>virtual</button>
    </>
  );
};

export default Home;
