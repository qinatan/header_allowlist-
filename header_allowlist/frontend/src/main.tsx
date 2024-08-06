import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './AppRoutes';

const queryClient = new QueryClient();

//selects the HTML element with the ID 'root' where the React application will be mounted
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <Router>
      <AppRoutes/>
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
)
