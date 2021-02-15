import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';

const Alert = () => {
  const { alertMsg } = useContext(AppContext);
  return <>{alertMsg ? <div>{alertMsg}</div> : null}</>;
};

export default Alert;
