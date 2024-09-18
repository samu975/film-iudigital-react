import CardExample from './components/CardExample'
import Layout from './layout/layout';
import Filters from './components/Filters/Filters'
import './App.css'

function App() {
  return (
    <Layout>
      <Filters />
      <div className='h-screen flex flex-col justify-center'>
        <div className='flex justify-center w-full mb-16'>
          <h1 className='flex justify-center font-bold text-red-600'>
            Film IUDIgital
          </h1>
        </div>
        <div className='mt-10 flex justify-center'>
          <CardExample />
        </div>
      </div>
    </Layout>
  );
}

export default App;
