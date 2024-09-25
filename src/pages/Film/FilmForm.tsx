import { useForm } from 'react-hook-form';
import {
  Input,
  Button,
  Textarea,
  DatePicker,
  RadioGroup,
  Radio,
  DateValue,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { AddFilms } from '../../services/filmService';
import { CreateFilmObject } from '../../types/Film';
import { useEffect, useState } from 'react';
import { parseDate } from '../../utils/helpers';
import { useCategoriesStore } from '../../store/categoriesStore';
import { useDirectorStore } from '../../store/directorStore';
import { useProducerStore } from '../../store/producerStore';

const FilmForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<DateValue | null>(null);

  const categories = useCategoriesStore((state) => state.categories);
  const directors = useDirectorStore((state) => state.directors);
  const producers = useProducerStore((state) => state.producers);

  useEffect(() => {
    const filmIdFromPath = location.pathname.split('/form').pop();
    if (filmIdFromPath !== '') {
      setIsEditing(true);
    }

    return () => {
      setIsEditing(false);
    };
  }, []);

  useEffect(() => {
    if (isEditing) {
      // Fetch Film info
    }
  }, [isEditing]);

  const {
    register,
    handleSubmit,
    setValue: setFormValue,
    formState: { errors },
  } = useForm<CreateFilmObject>();

  const onSubmit = (data: CreateFilmObject) => {
    setLoading(true);
    if (isEditing) return;
    AddFilms(data, `${import.meta.env.VITE_API_URL}/media`);
    setLoading(false);
  };

  const handleOnChange = (newValue: DateValue) => {
    setValue(newValue);
    const parsedDate = parseDate(newValue);
    setFormValue('releaseYear', parsedDate);
  };

  return (
    <>
      <section className="flex justify-center pt-16 px-10 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 max-w-7xl">
          <h1 className="text-2xl font-bold mb-14 sm:text-5xl">
            {isEditing
              ? `Editar Pelicula Nombre Pelicula`
              : 'Agregar Nueva Pelicula'}
          </h1>
          <section className="flex flex-col items-start gap-6 mb-6 sm:grid sm:grid-cols-2 sm:items-center">
            <Input
              label="Título"
              {...register('title', { required: 'El titulo es obligatorio' })}
              placeholder="Ingrese el título de la película"
              isInvalid={errors.title ? true : false}
              errorMessage={errors.title?.message}
            />
            <Input
              label="Número Serial"
              type="number"
              {...register('serial', {
                required: 'El número serial es obligatorio',
              })}
              placeholder="Ingrese el número serial"
              isInvalid={errors.serial ? true : false}
              errorMessage={errors.serial?.message}
            />

            <Textarea
              label="Sinopsis"
              {...register('synopsis', {
                required: 'La sinopsis es obligatoria',
              })}
              placeholder="Ingrese la sinopsis de la película"
              isInvalid={errors.synopsis ? true : false}
              errorMessage={errors.synopsis?.message}
            />
            <Input
              label="Link de imagen de portada"
              {...register('coverImage', {
                required: 'La imagen de portada es obligatoria',
              })}
              placeholder="Ingrese el link de la imagen de portada"
              isInvalid={errors.coverImage ? true : false}
              errorMessage={errors.coverImage?.message}
            />

            <DatePicker
              label="Fecha de lanzamiento"
              isInvalid={errors.releaseYear ? true : false}
              errorMessage={errors.releaseYear?.message}
              value={value}
              onChange={handleOnChange}
            />

            <Input
              label="URL"
              {...register('url', {
                required: 'La URL es obligatoria',
              })}
              placeholder="Ingrese la URL de la película"
              isInvalid={errors.url ? true : false}
              errorMessage={errors.url?.message}
            />

            <Select
              label="Selecciona una categoria"
              onChange={(e) => setFormValue('genre', e.target.value)}
              isInvalid={errors.genre ? true : false}
            >
              {categories.map((category) => (
                <SelectItem key={category._id} value={category._id}>
                  {category.name}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Selecciona un director"
              onChange={(e) => setFormValue('producer', e.target.value)}
              isInvalid={errors.genre ? true : false}
            >
              {directors.map((director) => (
                <SelectItem key={director._id} value={director._id}>
                  {director.name}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Selecciona un productor"
              onChange={(e) => setFormValue('director', e.target.value)}
              isInvalid={errors.genre ? true : false}
            >
              {producers.map((producer) => (
                <SelectItem key={producer._id} value={producer._id}>
                  {producer.name}
                </SelectItem>
              ))}
            </Select>

            <RadioGroup
              label="Selecciona un tipo"
              onChange={(e) => setFormValue('type', e.target.value)}
            >
              <Radio value="movie">Película</Radio>
              <Radio value="serie">Serie</Radio>
            </RadioGroup>
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
