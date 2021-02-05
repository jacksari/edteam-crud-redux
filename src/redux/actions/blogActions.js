import {
  AGREGAR_BLOG,
  AGREGAR_BLOG_ERROR,
  AGREGAR_BLOG_EXITO,
  BLOG_ELIMINADO_ERROR,
  BLOG_ELIMINADO_EXITO,
  COMENZAR_DESCARGA_BLOGS,
  DESCARGA_BLOGS_ERROR,
  DESCARGA_BLOGS_EXITO,
  OBTENEER_BLOG,
  OBTENEER_BLOG_ERROR,
  OBTENEER_BLOG_EXITO,
  OBTENER_BLOG_ELIMINAR,
  RESET, UPDATE_BLOG, UPDATE_BLOG_ERROR, UPDATE_BLOG_EXITO,

} from '../types';
import clienteAxios from '../../config/axios';
import { enviarLocal } from '../../config/storage';

// Crear nuevo blog
const crearNuevoBlogAction = (blog) => async (dispatch) => {
  dispatch({
    type: AGREGAR_BLOG,
  });
  try {
    // Insertar en la API
    const blogNew = await clienteAxios.post('/posts', blog);

    blogNew.userId = 11;
    // console.log('newblog', blogNew.data);

    // Si todo va bien, se actualiza el state
    dispatch({
      type: AGREGAR_BLOG_EXITO,
      payload: blogNew.data,
    });
    enviarLocal(1, 'create', true);
  } catch (e) {
    // console.log('error', e);
    // Si hay un error cambiar el state
    dispatch({
      type: AGREGAR_BLOG_ERROR,
    });
    enviarLocal(1, 'create', false);
  }
  setTimeout(() => {
    dispatch({
      type: RESET,
    });
  }, 3000);
};

// Lista blog en la pantalla principal
const obtenerBlogsAction = () => async (dispatch) => {
  // Dispatch de inicio de petición
  dispatch({
    type: COMENZAR_DESCARGA_BLOGS,
  });
  try {
    // Si la petición es success
    const blogs = await clienteAxios.get('/posts');
    dispatch({
      type: DESCARGA_BLOGS_EXITO,
      payload: blogs.data,
    });
    // console.log(blogs);
    // Localstorage
    enviarLocal(1, 'read', true);
  } catch (e) {
    // En el caso de generar error la petición get
    dispatch({
      type: DESCARGA_BLOGS_ERROR,
    });
    // console.log(e);
    enviarLocal(1, 'read', false);
  }
  // Se resetea los state, menos lel de blogs
  setTimeout(() => {
    dispatch({
      type: RESET,
    });
  }, 2000);
};
// Selecciona y eliminar blog elegido
const borrarBlogAction = (id) => async (dispatch) => {
  // console.log('id', id);
  // Elegir blog a eliminar
  dispatch({
    type: OBTENER_BLOG_ELIMINAR,
    payload: id,
  });
  // Iniciar petición delete
  try {
    // Si la petición delete es success
    await clienteAxios.delete(`/posts/${id}`);
    // console.log(res);
    dispatch({
      type: BLOG_ELIMINADO_EXITO,
    });
    enviarLocal(1, 'delete', true);
  } catch (e) {
    // console.log(e);
    // Si la petición da error se da los mensajes
    dispatch({
      type: BLOG_ELIMINADO_ERROR,
    });
    enviarLocal(1, 'delete', false);
  }
  setTimeout(() => {
    dispatch({
      type: RESET,
    });
  }, 3000);
};

// Obtener blog a partide un id
const obtenerBlogAction = (id) => async (dispatch) => {
  // console.log('id', id);
  dispatch({
    type: OBTENEER_BLOG,
    payload: id,
  });
  try {
    const { data } = await clienteAxios.get(`/posts/${id}`);
    // console.log(data);
    dispatch({
      type: OBTENEER_BLOG_EXITO,
      payload: data,
    });
    enviarLocal(1, 'read', true);
  } catch (e) {
    // console.log(e);
    dispatch({
      type: OBTENEER_BLOG_ERROR,
    });
    enviarLocal(1, 'read', false);
  }
  setTimeout(() => {
    dispatch({
      type: RESET,
    });
  }, 1000);
};
// Editar un registro en la api en el state
const updateBlogAction = (blog) => async (dispatch) => {
  dispatch({
    type: UPDATE_BLOG,
  });
  try {
    await clienteAxios.put(`/posts/${blog.id}`);
    // console.log('blog', res);
    dispatch({
      type: UPDATE_BLOG_EXITO,
    });
    enviarLocal(1, 'update', true);
  } catch (e) {
    // console.log(e);
    dispatch({
      type: UPDATE_BLOG_ERROR,
    });
    enviarLocal(1, 'update', false);
  }
};
export {
  crearNuevoBlogAction,
  obtenerBlogsAction,
  borrarBlogAction,
  obtenerBlogAction,
  updateBlogAction,
};
