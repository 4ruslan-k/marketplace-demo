import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import ProductsPage from './pages/productsPage/containers/ProductsPage';

const queryClient = new QueryClient();

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});

const App = () => (
  <StylesProvider jss={jss}>
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  </StylesProvider>
);

export default App;
