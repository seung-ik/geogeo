import React from 'react'
import  Link  from 'next/link';
import { useTranslation } from 'react-i18next';
import Header from '@components/sections/Header';

const Virtual = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div>virtual</div>
      <Link href="/">
        <button>main</button>
      </Link>
      <div>{t('JOB')}</div>
    </>
  );
}

export default Virtual;