import { create } from 'zustand'

interface FilterStore {
	isOpenModal: boolean

	openModal: () => void
	closeModal: () => void
}

export const useFilterStore = create<FilterStore>(set => ({
	isOpenModal: false,

	openModal: () => set({ isOpenModal: true }),
	closeModal: () => set({ isOpenModal: false })
}))
