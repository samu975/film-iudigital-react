import React, { useState, useEffect } from 'react'
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
  ModalFooter
} from "@nextui-org/react"
import { DirectorType } from '../../types/Director'
import { getAllDirectors } from '../../services/directorService'

const mockCreateDirector = async (director: DirectorType) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { ...director, _id: Date.now().toString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
}

const mockUpdateDirector = async (director: DirectorType) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return { ...director, updatedAt: new Date().toISOString() }
}

const mockDeleteDirector = async (id: string) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return true
}

export default function DirectorCRUD() {
  const [directors, setDirectors] = useState<DirectorType[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentDirector, setCurrentDirector] = useState<DirectorType>({ name: '', status: false })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetchDirectors()
  }, [])

  const fetchDirectors = async () => {
    const data = await getAllDirectors()
    setDirectors(data)
  }

  const handleSubmit = async (e: HTMLFormElement) => {
    e.preventDefault()
    if (isEditing) {
      const updated = await mockUpdateDirector(currentDirector)
      setDirectors(directors.map(d => d._id === updated._id ? updated : d))
    } else {
      const created = await mockCreateDirector(currentDirector)
      setDirectors([...directors, created])
    }
    setIsModalOpen(false)
    setCurrentDirector({ name: '', status: false })
    setIsEditing(false)
  }

  const handleEdit = (director: DirectorType) => {
    setCurrentDirector(director)
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    await mockDeleteDirector(id)
    setDirectors(directors.filter(d => d._id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Director Management</h1>
      <Button
        onPress={() => {
          setCurrentDirector({ name: '', status: false })
          setIsEditing(false)
          setIsModalOpen(true)
        }}
        className="mb-4 bg-gray-700 text-white"
      >
        Add New Director
      </Button>

      <Table aria-label="Directors table" className="bg-gray-800">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
          <TableColumn>UPDATED AT</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {directors.map((director) => (
            <TableRow key={director._id}>
              <TableCell>{director.name}</TableCell>
              <TableCell>{director.status ? 'Active' : 'Inactive'}</TableCell>
              <TableCell>{new Date(director?.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(director.updatedAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button onPress={() => handleEdit(director)} className="mr-2 bg-gray-600 text-white">
                  Edit
                </Button>
                <Button onPress={() => handleDelete(director._id)} className="bg-red-600 text-white">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="bg-gray-800 text-white">
        <ModalContent>
          <ModalHeader>{isEditing ? 'Edit Director' : 'Add New Director'}</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                value={currentDirector.name}
                onChange={(e) => setCurrentDirector({ ...currentDirector, name: e.target.value })}
                required
                className="bg-gray-700 text-white"
              />
              <Checkbox
                isSelected={currentDirector.status}
                onValueChange={(value) => setCurrentDirector({ ...currentDirector, status: value })}
                className="text-white"
              >
                Active
              </Checkbox>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setIsModalOpen(false)} className="bg-gray-600 text-white">
              Cancel
            </Button>
            <Button onPress={handleSubmit} className="bg-blue-600 text-white">
              {isEditing ? 'Update' : 'Create'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}