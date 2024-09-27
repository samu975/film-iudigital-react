import { useCallback, useEffect, useState } from 'react';
import { Film } from '../../types/Film';
import { GetFilmById } from '../../services/filmService';
import { Image, Spinner } from '@nextui-org/react';
import { dateToString } from '../../utils/helpers';

const FilmDetail = () => {
  const pathName = location.pathname;
  const filmID = pathName.split('/')[2];
  const [filmData, setFilmData] = useState<Film | null>(null);

  const getFilmData = useCallback(async () => {
    GetFilmById(filmID).then((response) => {
      setFilmData(response);
    });
  }, [filmID]);

  useEffect(() => {
    getFilmData();
  }, [getFilmData]);

  return (
    <>
      {!filmData ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner label="Loading..." color="primary" />
        </div>
      ) : (
        <section className="flex flex-col justify-center mt-8 md:mt-16 px-10 items-center md:items-start">
          <div className="my-12 flex flex-col gap-10">
            <h1 className="font-extrabold text-3xl">{filmData.title}</h1>
            {filmData.genre && <h3 className='font-bold text-2xl'>Género: {filmData.genre.name}</h3>}
          </div>
          <div className="flex flex-col items-center gap-12 md:justify-between md:flex-row md:items-start">
            <Image
              src={filmData.coverImage}
              alt={filmData.title}
              width={400}
              height={500}
            />
            <div className="md:max-w-[60%]">
              <div className="bg-slate-900 rounded-md px-6 py-4 flex flex-col gap-6 items-center">
                <h2 className="font-bold text-2xl">Sinopsis</h2>
                <p className="md:text-lg">{filmData.synopsis}</p>
              </div>
              <div className="bg-slate-900 rounded-md px-6 py-10 flex flex-col gap-6 items-center mt-10">
                <h2 className="font-bold text-2xl">Detalles</h2>
                <div className="flex flex-col gap-4">
                  {filmData.director && (
                    <p>
                      <span className="font-bold">Director:</span>{' '}
                      {filmData.director.name}
                    </p>
                  )}
                  {filmData.producer && (
                    <p>
                      <span className="font-bold">Productor:</span>{' '}
                      {filmData.producer.name}
                    </p>
                  )}

                  {filmData.type && (
                    <p>
                      <span className="font-bold">Tipo:</span>{' '}
                      {filmData.type.name}
                    </p>
                  )}
                  <p>
                    <span className="font-bold">Fecha de lanzamiento: </span>
                    {dateToString(filmData.releaseYear)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FilmDetail;
