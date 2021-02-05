import React, { useEffect, useState } from 'react';
import { restartLocal } from '../config/storage';

function Requests() {
  const [local, setLocal] = useState(null);
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('crud'));
    setLocal(res);
    // console.log(local);
  }, []);

  const rest = () => {
    restartLocal();
    setLocal(null);
  };

  return (
    <main>
      <div className="section-center section-requests ">
        <div className="title">
          <h1>Request</h1>
          <button type="button" onClick={rest} className="btn btn-request">Reiniciar requests</button>
        </div>
        <div className="filters" />
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Sucess</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            {
            local ? (
              <>
                <tr>
                  <td>CREATE</td>
                  <td>{local.create_s}</td>
                  <td>{local.create_e}</td>
                </tr>
                <tr>
                  <td>READ</td>
                  <td>{local.read_s}</td>
                  <td>{local.read_e}</td>
                </tr>
                <tr>
                  <td>UPDATE</td>
                  <td>{local.update_s}</td>
                  <td>{local.update_e}</td>
                </tr>
                <tr>
                  <td>DELETE</td>
                  <td>{local.delete_s}</td>
                  <td>{local.delete_e}</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan="3">Sin datos</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Requests;
