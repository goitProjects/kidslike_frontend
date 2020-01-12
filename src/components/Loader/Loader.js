import React from 'react';
import Loader from 'react-loader-spinner';
import s from './loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={s.loader}>
      <Loader
        type="Puff"
        color="#efbb43"
        height={100}
        width={100}
        timeout={3000} // 3 secs
      />
    </div>
  );
};

export default LoaderComponent;
