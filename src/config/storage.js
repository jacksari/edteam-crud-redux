// Iniciar localstorage
const iniciarLocal = () => {
  const crud1 = JSON.parse(localStorage.getItem('crud'));
  if (crud1) {
    localStorage.setItem('crud', JSON.stringify(crud1));
  } else {
    const crud = {
      create_s: 0,
      create_e: 0,
      read_s: 0,
      read_e: 0,
      update_s: 0,
      update_e: 0,
      delete_s: 0,
      delete_e: 0,
    };
    localStorage.setItem('crud', JSON.stringify(crud));
  }
};
// Enviar valores al localstorage
const enviarLocal = (num, type, status) => {
  // const local = Number(localStorage.getItem(type));
  // const n = num + local;
  const crud1 = JSON.parse(localStorage.getItem('crud'));
  if (status) {
    if (type === 'read') crud1.read_s = num + crud1.read_s;
    if (type === 'create') crud1.create_s = num + crud1.create_s;
    if (type === 'update') crud1.update_s = num + crud1.update_s;
    if (type === 'delete') crud1.delete_s = num + crud1.delete_s;

    localStorage.setItem('crud', JSON.stringify(crud1));
  } else {
    if (type === 'read') crud1.read_e = num + crud1.read_e;
    if (type === 'create') crud1.create_e = num + crud1.create_e;
    if (type === 'update') crud1.update_e = num + crud1.update_e;
    if (type === 'delete') crud1.delete_e = num + crud1.delete_e;

    localStorage.setItem('crud', JSON.stringify(crud1));
  }
};
// Reinicar localstorage
const restartLocal = () => {
  const crud = {
    create_s: 0,
    create_e: 0,
    read_s: 0,
    read_e: 0,
    update_s: 0,
    update_e: 0,
    delete_s: 0,
    delete_e: 0,
  };
  localStorage.setItem('crud', JSON.stringify(crud));
};

export {
  enviarLocal,
  iniciarLocal,
  restartLocal,
};
