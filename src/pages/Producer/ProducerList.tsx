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
import { ProducerType, StatusEnum } from '../../types/Producer'
import { getAllProducers, createProducer, deleteProducer, updateProducer } from '../../services/producerService'

export default function ProducerList() {
  const initialProducer: ProducerType = {
    name: '',
    status: StatusEnum.INACTIVE,
    slogan: '',
    description: ''
  }
  const [producers, setProducers] = useState<ProducerType[]>([] as ProducerType[])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentProducer, setCurrentProducer] = useState<ProducerType>(initialProducer)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    fetchDirectors()
  }, [])

  const fetchDirectors = async (): Promise<void> => {
    const data = await getAllProducers()
    setProducers(data)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEditing) {
      const updated: ProducerType = await updateProducer(currentProducer)
      setProducers(producers.map(d => d._id === updated._id ? updated : d))
      toast.warn('Productora Actualizado', {
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
      const created: ProducerType = await createProducer(currentProducer)
      setProducers([...producers, created])
      toast.info('Productora creado', {
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
    setCurrentProducer(initialProducer)
    setIsEditing(false)
  }

  const handleEdit = (director: ProducerType) => {
    setCurrentProducer(director)
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    await deleteProducer(id)
    setProducers(producers.filter(d => d._id !== id))
    toast.success('Productora eliminada correctamente', {
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
    <div className="bg-gradient-to-r from-blue-950 to-gray-600 text-white p-8 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Manejo Productoras</h1>
      <Button
        onPress={() => {
          setCurrentProducer(initialProducer)
          setIsEditing(false)
          setIsModalOpen(true)
        }}
        className="mb-4 bg-gray-700 text-white max-w-48"
      >
        Agregar Productora
      </Button>

      <Table isHeaderSticky aria-label="Directors table" className="max-h-[600px] max-w-[600] overflow-scroll">
        <TableHeader>
          <TableColumn>NOMBRE</TableColumn>
          <TableColumn>ESTADO</TableColumn>
          <TableColumn>ESLOGAN</TableColumn>
          <TableColumn>DESCRIPCION</TableColumn>
          <TableColumn>ACCION</TableColumn>
        </TableHeader>
        <TableBody>
          {producers.map((director) => (
            <TableRow key={director._id} className='py-4 hover:bg-gray-700'>
              <TableCell>{director.name}</TableCell>
              <TableCell>{director.status}</TableCell>
              <TableCell>{director.slogan}</TableCell>
              <TableCell>{director.description}</TableCell>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="bg-gray-800 text-white">
        <ModalContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <ModalHeader>{isEditing ? 'Editar Productora' : 'Agregar Productora'}</ModalHeader>
            <ModalBody>
              <Input
                label="Nombre"
                value={currentProducer.name}
                onChange={(e) => setCurrentProducer({ ...currentProducer, name: e.target.value })}
                required
                className="bg-gray-700 text-white"
              />
              <Input
                label="Eslogan"
                value={currentProducer.slogan}
                onChange={(e) => setCurrentProducer({ ...currentProducer, slogan: e.target.value })}
                required
                className="bg-gray-700 text-white"
              />
              <Input
                label="Descripcion"
                value={currentProducer.description}
                onChange={(e) => setCurrentProducer({ ...currentProducer, description: e.target.value })}
                required
                className="bg-gray-700 text-white"
              />
              <Checkbox
                isSelected={currentProducer.status.toLowerCase() === 'activo' ? true : false}
                onValueChange={(value) => setCurrentProducer({ ...currentProducer, status: value ? StatusEnum.ACTIVE : StatusEnum.INACTIVE })}
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