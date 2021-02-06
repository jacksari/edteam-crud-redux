import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import NewBlog from './pages/NewBlog';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';
import store from './redux/store';
import Requests from './pages/Requests';
import EditBlog from './pages/EditBlog';
import { iniciarLocal } from './config/storage';

const App = () => {
  useEffect(() => {
    iniciarLocal();
  }, []);

  return (

    <Provider store={store}>
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/new-blog">
              <NewBlog />
            </Route>
            <Route path="/update-blog/:id">
              <EditBlog />
            </Route>
            <Route path="/requests">
              <Requests />
            </Route>
            <Route path="/">
              <Blogs />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>

  );
};

export default App;
