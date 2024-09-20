import { useEffect } from 'react';
import CardExample from '../../components/CardExample';
import { useCategoriesStore } from '../../store/categoriesStore';
import { fetchData } from '../../utils/helpers';

const Home = () => {
  const setCategories = useCategoriesStore((state) => state.setCategories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchData(`${import.meta.env.VITE_API_URL}/genre`);
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [setCategories]);
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center w-full mb-16">
          <h1 className="flex justify-center font-bold text-red-600 text-3xl">
            Film IUDIgital
          </h1>
        </div>
        <div className="mt-10 flex justify-center">
          <CardExample />
        </div>
      </div>
    </>
  );
};

export default Home;
