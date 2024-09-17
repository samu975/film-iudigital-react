import './App.css';
import CardExample from './components/CardExample';

function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center w-full mb-16">
          <h1 className="flex justify-center font-bold text-red-600">
            Film IUDIgital
          </h1>
        </div>
        <div className="mt-10 flex justify-center">
          <CardExample />
        </div>
      </div>
    </>
  );
}

export default App;
