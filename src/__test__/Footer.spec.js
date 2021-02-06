import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('<Footer/> Cargar el formulario y verificar que todo está correcto', () => {
  const wrapper = render(<Footer />);
  // wrapper.debug();
});
