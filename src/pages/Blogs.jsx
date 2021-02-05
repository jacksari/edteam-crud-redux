import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerBlogsAction } from '../redux/actions/blogActions';
// Componente que muestra notificaiones
import Notifications from '../components/Notifications';
import BlogCard from '../components/BlogCard';

function Blogs() {
  // Iniciarlizar dipatch para usar actions
  const dispatch = useDispatch();
  const cargarBlogs = () => dispatch(obtenerBlogsAction());
  useEffect(() => {
    cargarBlogs();
  }, []);
  // Obtener datos del state
  const blogs = useSelector((state) => state.blog.blogs);

  // console.log(blogs);

  return (
    <main>
      <section className="section-center section-blogs">
        <h2>Listado de Blogs</h2>
        <Notifications
          errorMessage="Upps..., hubo un error al cargar los datos"
          successMessage="Los datos se cargaron correctamente"
        />
        <div className="blogs">
          {
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                data={blog}
              />
            ))
          }

        </div>
      </section>
    </main>
  );
}

export default Blogs;
