import React from 'react'
import  Link  from 'next/link';

const Virtual = () => {
  return (
    <>
      <div>virtual</div>
      <Link href="/">
        <button>main</button>
      </Link>
    </>
  );
}

export default Virtual;