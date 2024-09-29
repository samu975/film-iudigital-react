import { useCategoriesStore } from '../../store/categoriesStore';
import { useDirectorStore } from '../../store/directorStore';
import { useFetchData } from '../../hooks/useFetch';
import { useProducerStore } from '../../store/producerStore';
import { useMediaStore } from '../../store/mediaStore';
import MovieCard from '../../components/MovieCard';

const Home = () => {
  const setCategories = useCategoriesStore((state) => state.setCategories);
  const setDirectors = useDirectorStore((state) => state.setDirectors);
  const setProducers = useProducerStore((state) => state.setProducers);
  const setMedia = useMediaStore((state) => state.setFilm);

  const movies = useMediaStore((state) => state.film);

  useFetchData(`${import.meta.env.VITE_API_URL}/genre`, setCategories);
  useFetchData(`${import.meta.env.VITE_API_URL}/director`, setDirectors);
  useFetchData(`${import.meta.env.VITE_API_URL}/producer`, setProducers);
  useFetchData(`${import.meta.env.VITE_API_URL}/media`, setMedia);
  return (
    <>
      <section className="my-20 mx-auto">
        <div className="flex justify-center w-full mb-16">
          <h1 className="flex justify-center font-bold text-white text-3xl sm:text-5xl">
            Film IUDIgital
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 px-10">
          {movies.map((movie) => (
            <MovieCard
              key={movie._id}
              nombrePelicula={movie.title}
              description={movie.synopsis}
              image={movie.coverImage}
              id={movie._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
