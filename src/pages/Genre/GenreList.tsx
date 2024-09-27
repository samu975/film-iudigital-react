import { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tooltip,
} from '@nextui-org/react';
import { toast } from 'react-toastify';
import { getAllGenres, deleteGenre } from '../../services/genreService';
import GenreForm from './GenreForm';
import { GenreType } from '../../types/Genre';

export default function GenreList() {
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentGenre, setCurrentGenre] = useState<GenreType | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const data = await getAllGenres();
    setGenres(data);
  };

  const handleEdit = (genre: GenreType) => {
    setCurrentGenre(genre);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    await deleteGenre(id);
    setGenres(genres.filter((g) => g._id !== id));
    toast.success('Género eliminado correctamente');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentGenre(null);
    setIsEditing(false);
  };

  const handleSuccess = () => {
    fetchGenres();
    handleModalClose(); // Close modal after success
  };

  return (
    <div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
          setIsEditing(false);
          setCurrentGenre(null);
        }}
      >
        Agregar Género
      </Button>
      <Table aria-label="Tabla de géneros">
        <TableHeader>
          <TableColumn>NOMBRE</TableColumn>
          <TableColumn>ESTADO</TableColumn>
          <TableColumn>ACCIONES</TableColumn>
        </TableHeader>
        <TableBody>
          {genres.map((genre) => (
            <TableRow key={genre._id}>
              <TableCell>{genre.name}</TableCell>
              <TableCell>{genre.status}</TableCell>
              <TableCell>
                <Tooltip content="Editar Género">
                  <span onClick={() => handleEdit(genre)}>✏️</span>
                </Tooltip>
                <Tooltip content="Eliminar Género">
                  <span onClick={() => handleDelete(genre._id)}>🗑️</span>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isModalOpen && (
        <GenreForm
          currentGenre={currentGenre}
          isEditing={isEditing}
          onClose={handleModalClose}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}
