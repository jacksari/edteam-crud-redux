import React, { useEffect, useState } from 'react';
// React router
import {
  useParams, useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../components/Notifications';
// Redux
import { obtenerBlogAction, updateBlogAction } from '../redux/actions/blogActions';

function EditBlog() {
  // history
  const history = useHistory();
  // Success del state
  const redirect = useSelector((state) => state.blog.redirect);
  // State local de blog
  const [blog, setBlog] = useState({
    id: '',
    title: '',
    body: '',
  });
  const { title, body } = blog;

  // Sacar id de la ure por params
  const { id } = useParams();
  const dispatch = useDispatch();
  // inicializar datos de blog
  useEffect(() => {
    dispatch(obtenerBlogAction(id));
  }, []);

  // traer datos del blog del staete);
  const blogUpdate = useSelector((state) => state.blog.blogUpdate);

  useEffect(() => {
    if (blogUpdate) {
      setBlog(blogUpdate);
    }
  }, [blogUpdate]);

  // Leer datos del fomulario
  const onChangeFormulario = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };
  // Limpiar formulario
  useEffect(() => {
    if (redirect) {
      setBlog({
        title: '',
        body: '',
      });
      history.push('/');
    }
  }, [redirect]);

  const submitUpdateBlog = (e) => {
    e.preventDefault();

    // Preguntar al usuario

    // Si todo eata bien se actualiza
    dispatch(updateBlogAction(blog));
  };

  return (
    <main>
      <section className="blog-page section-center">
        <div className="section-blog-page">

          <div className="section-title">
            <h2>
              Update Blog
            </h2>
            <Notifications
              errorMessage="Upps..., hubo un error al guardar blog"
              successMessage="Se guardar los datos satisfactoriamete"
            />
          </div>
          <form
            className="form-blog"
            onSubmit={submitUpdateBlog}
          >
            <div className="form-control">
              <label htmlFor="title">
                <span>Título</span>
                <input
                  id="title"
                  type="text"
                  name="title"
                  className="input"
                  placeholder="Ingrese título"
                  value={title}
                  onChange={onChangeFormulario}
                />
              </label>

            </div>
            <div className="form-control">
              <label htmlFor="body">
                <span>Descripción</span>
                <textarea
                  className="input"
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder="Ingrese descripción"
                  value={body}
                  onChange={onChangeFormulario}
                />
              </label>

            </div>
            <button type="submit" className="btn">Actualizar blog</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default EditBlog;
