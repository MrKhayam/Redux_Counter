import React from 'react';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import { useSelector } from 'react-redux';

const App = () => {
  const count = useSelector((state) => state.count);
  return (
    <>
      <div className="main w-full bg-zinc-900 gap-10 h-screen flex flex-col items-center justify-center">
        <h1 className='text-6xl text-white font-semibold text-center'>{count}</h1>
        <div className="flex gap-5 items-center">
          <Increment />
          <Decrement />
        </div>
      </div>
    </>
  );
}

export default App;
