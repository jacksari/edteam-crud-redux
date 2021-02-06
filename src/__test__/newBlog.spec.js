import React from 'react';
import { render } from '@testing-library/react';
import NewBlog from '../pages/NewBlog';

test('<NewBlog/> prueba del componente', () => {
  // const wrapper = render(<NewBlog />);
  const wrapper = () => render(<NewBlog />);
  wrapper().debug();
});
