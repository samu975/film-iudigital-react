import { create } from 'zustand';
import { ProducerType as Producer } from '../types/Producer';

interface ProducerState {
  producers: Producer[];
  producersLenght: number;
  setProducers: (producers: Producer[]) => void;
}

export const useProducerStore = create<ProducerState>((set) => ({
  producers: [],
  producersLenght: 0,
  setProducers: (producers: Producer[]) =>
    set({ producers, producersLenght: producers.length }),
}));
