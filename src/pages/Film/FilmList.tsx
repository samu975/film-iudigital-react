import { useState, useEffect, useCallback } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip
} from "@nextui-org/react"
import { toast } from 'react-toastify'
import DeleteIcon from '../../components/icons/DeleteIcon'
import EditIcon from '../../components/icons/EditIcon'
import { Film } from '../../types/Film'
import { GetFilms, DeleteFilm } from '../../services/filmService'
import { useNavigate } from 'react-router-dom'

const FilmList = () => {

  const navigate = useNavigate()
  const [films, setFilms] = useState<Film[]>([] as Film[])
  const fetchFilms = useCallback(async () => {
    const data = await GetFilms()
    setFilms(data)
  }, [])

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])

  const handleEdit = (film: Film) => {
    navigate(`/film/form/${film._id}`)
  }

  const handleDelete = async (id: string) => {
    await DeleteFilm(id)
    setFilms(films.filter(d => d._id !== id))
    toast.success('Film deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }

  useEffect(() => {
    console.log(films)
  }, [films])

  return (
    <>
      <div className="bg-slate-900  text-white p-8 flex flex-col">
        <div>

        <h1 className='text-3xl font-bold mb-6'>Manejo de Peliculas</h1>
        </div>
        <div className="">
        <Table isHeaderSticky aria-label="Films table" className="bg-gray-800 max-h-[600px] max-w-[600] overflow-scroll">
          <TableHeader>
            <TableColumn>TITULO</TableColumn>
            <TableColumn>SERIAL</TableColumn>
            <TableColumn>FECHA LANZAMIENTO</TableColumn>
            <TableColumn>URL</TableColumn>
            <TableColumn>DIRECTOR</TableColumn>
            <TableColumn>PRODUCTOR</TableColumn>
            <TableColumn> </TableColumn>
          </TableHeader>
          <TableBody>
            {films.map((film) => (
              <TableRow key={film._id} className='py-4 hover:bg-gray-700'>
                <TableCell>{film.title}</TableCell>
                <TableCell>{film.serial}</TableCell>
                <TableCell>{film?.releaseYear ? new Date(film.releaseYear).toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell className='max-w-80 overflow-hidden'>{film.url}</TableCell>
                <TableCell>{film.director?.name}</TableCell>
                <TableCell>{film.producer?.name}</TableCell>
                <TableCell className="relative flex items-center gap-2">
                  <Tooltip content="Editar film">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon onClick={() => handleEdit(film)} />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Eliminar Director">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon onClick={() => film._id && handleDelete(film._id)} />
                    </span>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
       </div> 
    </>
  );
};

export default FilmList;
