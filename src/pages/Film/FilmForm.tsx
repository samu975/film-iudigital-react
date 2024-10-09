import { useForm } from 'react-hook-form';
import {
  Input,
  Button,
  Textarea,
  DatePicker,
  DateValue,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { AddFilms, GetFilmById, UpdateFilm } from '../../services/filmService';
import { CreateFilmObject, Film } from '../../types/Film';
import { useEffect, useState } from 'react';
import { useCategoriesStore } from '../../store/categoriesStore';
import { useDirectorStore } from '../../store/directorStore';
import { useProducerStore } from '../../store/producerStore';
import { useFetchData } from '../../hooks/useFetch';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const FilmForm = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Control de los valores de los campos con useState
  const [title, setTitle] = useState('');
  const [serial, setSerial] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [releaseYear, setReleaseYear] = useState<DateValue | null>(null);
  const [url, setUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [producer, setProducer] = useState('');

  const setCategories = useCategoriesStore((state) => state.setCategories);
  const setDirectors = useDirectorStore((state) => state.setDirectors);
  const setProducers = useProducerStore((state) => state.setProducers);

  useFetchData(`${import.meta.env.VITE_API_URL}/genre`, setCategories);
  useFetchData(`${import.meta.env.VITE_API_URL}/director`, setDirectors);
  useFetchData(`${import.meta.env.VITE_API_URL}/producer`, setProducers);

  const categories = useCategoriesStore((state) => state.categories);
  const directors = useDirectorStore((state) => state.directors);
  const producers = useProducerStore((state) => state.producers);

  const { handleSubmit } = useForm<CreateFilmObject>();

  // Cargar datos en modo edición
  useEffect(() => {
    const filmIdFromPath = location.pathname.split('/form/').pop();
    if (filmIdFromPath !== '' && filmIdFromPath !== undefined) {
      setIsEditing(true);
      GetFilmById(filmIdFromPath).then((data) => {
        setTitle(data.title);
        setSerial(data.serial);
        setSynopsis(data.synopsis);
        setCoverImage(data.coverImage);
        setUrl(data.url);
        setGenre(data.genre?._id || '');
        setDirector(data.director?._id || '');
        setProducer(data.producer?._id || '');
      });
    }
  }, [isEditing]);

  const onSubmit = () => {
    setLoading(true);
    const formData: CreateFilmObject = {
      title,
      serial: serial,
      synopsis,
      coverImage,
      releaseYear: releaseYear as unknown as Date,
      url,
      genre: categories.find((category) => category._id === genre) || null,
      director: directors.find((d) => d._id === director) || null,
      producer: producers.find((p) => p._id === producer) || null,
      type: null,
    };

    if (isEditing) {
      const filmId = location.pathname.split('/form/').pop();
      if (filmId) {
        UpdateFilm(formData as unknown as Film, filmId).finally(() => {
          setLoading(false);
          toast.warn('Película Actualizada', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
            navigate('/');
          }, 3000);
        });
      }
    } else {
      AddFilms(formData, `${import.meta.env.VITE_API_URL}/media`);
      setLoading(false);
    }
  };

  const handleDateChange = (newValue: DateValue) => {
    setReleaseYear(newValue);
  };

  return (
    <>
      <section className="flex justify-center pt-16 px-10 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 max-w-7xl">
          <h1 className="text-2xl font-bold mb-14 sm:text-5xl">
            {isEditing ? 'Editar Pelicula' : 'Agregar Nueva Pelicula'}
          </h1>

          <section className="flex flex-col items-start gap-6 mb-6 sm:grid sm:grid-cols-2 sm:items-center">
            {/* Título */}
            <Input
              label="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese el título de la película"
            />

            {/* Número Serial */}
            <Input
              label="Número Serial"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              placeholder="Ingrese el número serial"
            />

            {/* Sinopsis */}
            <Textarea
              label="Sinopsis"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              placeholder="Ingrese la sinopsis de la película"
            />

            {/* Imagen de portada */}
            <Input
              label="Link de imagen de portada"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="Ingrese el link de la imagen de portada"
            />

            {/* Fecha de lanzamiento */}
            <DatePicker
              label="Fecha de lanzamiento"
              value={releaseYear}
              onChange={handleDateChange}
            />

            {/* URL */}
            <Input
              label="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Ingrese la URL de la película"
            />

            {/* Selección de Categoría */}
            <Select
              label="Selecciona una categoría"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              {categories.map((category) => (
                <SelectItem key={category._id} value={category._id}>
                  {category.name}
                </SelectItem>
              ))}
            </Select>

            {/* Selección de Director */}
            <Select
              label="Selecciona un director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            >
              {directors.map((director, index) => (
                <SelectItem key={director._id ?? index} value={director._id}>
                  {director.name}
                </SelectItem>
              ))}
            </Select>

            {/* Selección de Productor */}
            <Select
              label="Selecciona un productor"
              value={producer}
              onChange={(e) => setProducer(e.target.value)}
            >
              {producers.map((producer, index) => (
                <SelectItem key={producer._id ?? index} value={producer._id}>
                  {producer.name}
                </SelectItem>
              ))}
            </Select>
          </section>

          <div className="flex justify-center my-6">
            <Button
              type="submit"
              variant="solid"
              isLoading={loading}
              color="danger"
              className="text-white"
            >
              Guardar
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FilmForm;
