import Layout from './layout/layout';
import Filters from './components/Filters/Filters';
import Home from './pages/Home/Home';

function App() {
  return (
    <Layout>
      <Filters />
      <Home />
    </Layout>
  );
}

export default App;
