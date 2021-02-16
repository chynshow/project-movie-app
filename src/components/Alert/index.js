import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';

const Alert = () => {
  const { alertMsg } = useContext(AppContext);
  return (
    <>
      {alertMsg ? (
        <div className='bg-gray-700 w-full p-4 text-gray-50 rounded-sm text-center uppercase italic'>
          {alertMsg}
        </div>
      ) : null}
    </>
  );
};

export default Alert;
