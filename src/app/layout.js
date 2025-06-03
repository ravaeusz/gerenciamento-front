'use client'


import './globals.css';


import Nav from '../components/nav';
import Login from './login/page';

import { Provider } from 'react-redux';
import store from "../redux/store";


export default function RootLayout({ children }) {


  return (
    <html lang="pt-BR">

      <Provider store={store}>
        <body>
          <Nav />
          <main>{
             children
          }</main>
        </body>
      </Provider>

    </html>
  );
}

