import Layout from './layout/layout';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
