import React, { useState } from 'react';
// Actions de redux
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { crearNuevoBlogAction } from '../redux/actions/blogActions';
import Notifications from '../components/Notifications';

const NewBlog = () => {
  // History react-router-dom
  const history = useHistory();
  // Crear state local
  const [title, setTittle] = useState('');
  const [description, setDescription] = useState('');
  // Utilizar dipatch
  const dispatch = useDispatch();
  // console.log(cargando);
  // Mandar a llamar el action de blogAction
  const agregarBlog = (blog) => dispatch(crearNuevoBlogAction(blog));
  // Cuando el usuario haga submit
  const submitNuevoBlog = (e) => {
    e.preventDefault();
    // Validar formulario
    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    // Si no hay errores

    // Crear el nuevo blog
    agregarBlog({
      title,
      description,
    });
    setTimeout(() => {
      history.push('/');
    }, 3000);
  };

  return (
    <main>
      <section className="blog-page section-center">
        <div className="section-blog-page">

          <div className="section-title">
            <h2>
              Crear Blog
            </h2>
            <Notifications
              errorMessage="Upps..., hubo un error al guardar blog"
              successMessage="Se guardar los datos satisfactoriamete"
            />
          </div>
          <form
            className="form-blog"
            onSubmit={submitNuevoBlog}
          >
            <div className="form-control">
              <label htmlFor="title">
                <span>Título</span>
                <input
                  id="title"
                  type="text"
                  className="input"
                  placeholder="Ingrese título"
                  value={title}
                  onChange={(e) => setTittle(e.target.value)}
                />
              </label>

            </div>
            <div className="form-control">
              <label htmlFor="description">
                <span>Descripción</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input"
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Ingrese descripción"
                />
              </label>

            </div>
            <button type="submit" className="btn">Agregar blog</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default NewBlog;
