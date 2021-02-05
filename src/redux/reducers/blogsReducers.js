import {
  AGREGAR_BLOG,
  AGREGAR_BLOG_ERROR,
  AGREGAR_BLOG_EXITO,
  BLOG_ELIMINADO_ERROR,
  BLOG_ELIMINADO_EXITO,
  COMENZAR_DESCARGA_BLOGS,
  DESCARGA_BLOGS_ERROR,
  DESCARGA_BLOGS_EXITO,
  OBTENEER_BLOG, OBTENEER_BLOG_ERROR, OBTENEER_BLOG_EXITO,
  OBTENER_BLOG_ELIMINAR,
  RESET, UPDATE_BLOG, UPDATE_BLOG_ERROR, UPDATE_BLOG_EXITO,
} from '../types';

// Cada reducer tiene su propiostate
const initialState = {
  blogs: [],
  error: null,
  loading: false,
  success: null,
  blogEliminar: null,
  blogSelect: null,
  blogUpdate: null,
  redirect: null,
};
const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BLOG_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case UPDATE_BLOG_EXITO:
      return {
        ...state,
        success: true,
        loading: false,
        redirect: true,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        loading: true,
      };
    case OBTENEER_BLOG_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case OBTENEER_BLOG_EXITO:
      return {
        ...state,
        blogUpdate: action.payload,
        loading: false,
        success: true,
      };
    case OBTENEER_BLOG:
      return {
        ...state,
        loading: true,
        blogSelect: action.payload,
      };
    case BLOG_ELIMINADO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case BLOG_ELIMINADO_EXITO:
      return {
        ...state,
        success: true,
        loading: false,
        // Si se tuviera una API real se actualizarian en la base de datos en y el state
        blogs: state.blogs.filter((blog) => blog.id !== state.blogEliminar),

      };
    case OBTENER_BLOG_ELIMINAR:
      return {
        ...state,
        loading: true,
        blogEliminar: action.payload,
      };
    case DESCARGA_BLOGS_ERROR:
      return {
        ...state,
        loading: null,
        error: true,
      };
    case DESCARGA_BLOGS_EXITO:
      return {
        ...state,
        loading: null,
        success: true,
        blogs: action.payload,
      };
    case COMENZAR_DESCARGA_BLOGS:
      return {
        ...state,
        loading: true,
      };
    case RESET:
      return {
        ...state,
        error: null,
        loading: null,
        success: null,
        blogEliminar: null,
        blogSelect: null,
        blogUpdate: null,
        redirect: null,
      };
    case AGREGAR_BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case AGREGAR_BLOG_EXITO:
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.payload],
        success: true,
      };
    case AGREGAR_BLOG:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default blogReducers;
