export default function DirectorForm() {

import { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Checkbox,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from '@nextui-org/react';
import { toast } from 'react-toastify';

import DeleteIcon from '../../components/icons/DeleteIcon';
import EditIcon from '../../components/icons/EditIcon';
import { Directors } from '../../types/Director';
import {
  getAllDirectors,
  createDirector,
  deleteDirector,
  updateDirector,
} from '../../services/directorService';

export default function DirectorForm (){
  const [directors, setDirectors] = useState<Directors[]>([] as Directors[]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentDirector, setCurrentDirector] = useState<Directors>({
    name: '',
    status: 'inactivo',
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchDirectors();
  }, []);

  const fetchDirectors = async () => {
    const data = await getAllDirectors();
    setDirectors(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      const updated = await updateDirector(currentDirector);
      setDirectors(directors.map((d) => (d._id === updated._id ? updated : d)));
      toast.warn('Director Actualizado', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      const created = await createDirector(currentDirector);
      setDirectors([...directors, created]);
      toast.info('Director creado', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    setIsModalOpen(false);
    setCurrentDirector({ name: '', status: 'inactivo' });
    setIsEditing(false);
  };

  const handleEdit = (director: Directors) => {
    setCurrentDirector(director);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    await deleteDirector(id);
    setDirectors(directors.filter((d) => d._id !== id));
    toast.success('Director eliminado correctamente', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div>
      <h1>DirectorForm</h1>
    </div>
  );
}
