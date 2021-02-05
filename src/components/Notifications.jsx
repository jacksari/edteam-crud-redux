import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

function Notifications({ errorMessage, successMessage }) {
  const cargando = useSelector((state) => state.blog.loading);
  const error = useSelector((state) => state.blog.error);
  const success = useSelector((state) => state.blog.success);
  return (
    <>
      {
        cargando ? (
          <div className="spinner-loading">
            <span>cargando...</span>
            <Spinner />
          </div>
        ) : null
      }
      {
        error ? (
          <p className="alert-danger">
            <span>{errorMessage}</span>
          </p>
        ) : null
      }
      {
        success ? (
          <p className="alert-success">
            <span>{successMessage}</span>
          </p>
        ) : null
      }
    </>
  );
}

export default Notifications;
