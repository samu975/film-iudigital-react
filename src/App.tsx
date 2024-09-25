import Layout from './layout/layout';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <AppRoutes />
      <ToastContainer />
    </Layout>
  );
}

export default App;
