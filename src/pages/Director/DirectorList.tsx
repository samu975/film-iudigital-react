import { useState, useEffect } from 'react'
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
  Tooltip
} from "@nextui-org/react"
import { toast } from 'react-toastify'

import DeleteIcon from '../../components/icons/DeleteIcon'
import EditIcon from '../../components/icons/EditIcon'
import { Directors } from '../../types/Director'
import { getAllDirectors, createDirector, deleteDirector, updateDirector } from '../../services/directorService'

export default function DirectorList() {
  const [directors, setDirectors] = useState<Directors[]>([] as Directors[])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentDirector, setCurrentDirector] = useState<Directors>({ name: '', status: 'inactivo' })
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    fetchDirectors()
  }, [])

  const fetchDirectors = async (): Promise<void> => {
    const data = await getAllDirectors()
    setDirectors(data)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEditing) {
      const updated: Directors = await updateDirector(currentDirector)
      setDirectors(directors.map(d => d._id === updated._id ? updated : d))
      toast.warn('Director Actualizado', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    } else {
      const created: Directors = await createDirector(currentDirector)
      setDirectors([...directors, created])
      toast.info('Director creado', {
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
    setIsModalOpen(false)
    setCurrentDirector({ name: '', status: 'inactivo' })
    setIsEditing(false)
  }

  const handleEdit = (director: Directors) => {
    setCurrentDirector(director)
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    await deleteDirector(id)
    setDirectors(directors.filter(d => d._id !== id))
    toast.success('Director eliminado correctamente', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
  }

  return (
    <div className="bg-gradient-to-r from-gray-600 to-blue-950 text-white p-8 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Manejo Directores</h1>
      <Button
        onPress={() => {
          setCurrentDirector({ name: '', status: 'inactivo' })
          setIsEditing(false)
          setIsModalOpen(true)
        }}
        className="mb-4 bg-gray-700 text-white max-w-48"
      >
        Agregar Director
      </Button>

      <div className="">
        <Table isHeaderSticky  color='primary' aria-label="Directors table" className="max-h-[600px] max-w-[600] overflow-scroll">
          <TableHeader>
            <TableColumn>NOMBRE</TableColumn>
            <TableColumn>ESTADO</TableColumn>
            <TableColumn>FECHA CREACION</TableColumn>
            <TableColumn>FECHA ACTUALIZACION</TableColumn>
            <TableColumn>ACCION</TableColumn>
          </TableHeader>
          <TableBody>
            {directors.map((director) => (
              <TableRow key={director._id} className='py-4 hover:bg-gray-700'>
                <TableCell>{director.name}</TableCell>
                <TableCell>{director.status}</TableCell>
                <TableCell>{director?.createdAt ? new Date(director.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell>{director?.updatedAt ? new Date(director.updatedAt).toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell className="relative flex items-center gap-2">
                  <Tooltip content="Editar Director">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon onClick={() => handleEdit(director)} />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Eliminar Director">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon onClick={() => director._id && handleDelete(director._id)} />
                    </span>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="bg-gray-800 text-white">
        <ModalContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <ModalHeader>{isEditing ? 'Editar Director' : 'Agregar Director'}</ModalHeader>
            <ModalBody>
              <Input
                label="Nombre"
                value={currentDirector.name}
                onChange={(e) => setCurrentDirector({ ...currentDirector, name: e.target.value })}
                required
                className="bg-gray-700 text-white"
              />
              <Checkbox
                isSelected={currentDirector.status.toLowerCase() === 'activo' ? true : false}
                onValueChange={(value) => setCurrentDirector({ ...currentDirector, status: value ? 'Activo' : 'Inactivo' })}
                className="text-white"
              >
                <span className="text-white">Activo</span>
              </Checkbox>
            </ModalBody>
            <ModalFooter>
              <Button onPress={() => setIsModalOpen(false)} className="bg-danger-400">
                Cancelar
              </Button>
              <Button type="submit" className="bg-blue-600 text-white">
                {isEditing ? 'Actualizar' : 'Crear'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  )
}
