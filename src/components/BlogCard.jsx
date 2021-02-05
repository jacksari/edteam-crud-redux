import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { useDispatch } from 'react-redux';
// Sweet alert
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { borrarBlogAction } from '../redux/actions/blogActions';

function BlogCard(data) {
  const dipatch = useDispatch();

  const confirmarEliminarBlog = (id) => {
    // Preguntar si de desea eliminar
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al action
        dipatch(borrarBlogAction(id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      }
    });
  };
  const {
    id, title, body,
  } = data.data;
  // console.log(id);
  return (
    <article className="blog">
      <div className="blog-head">
        <h2>{title}</h2>
      </div>
      <div className="blog-body">
        <p>
          {body}
        </p>
      </div>
      <div className="blog-footer ">
        <Link to={`/update-blog/${id}`} className="btn btn-blog btn-success">Editar</Link>
        <button onClick={() => confirmarEliminarBlog(id)} type="button" className="btn btn-blog btn-danger">Eliminar</button>
      </div>
    </article>
  );
}

BlogCard.propType = {
  blog: PropTypes.object,
};

export default BlogCard;
