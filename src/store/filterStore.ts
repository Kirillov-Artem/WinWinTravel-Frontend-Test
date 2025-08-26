import { create } from 'zustand'

interface FilterStore {
	isOpenModal: boolean
	isOpenConfrim: boolean

	openModal: () => void
	closeModal: () => void
	openConfirm: () => void
	closeConfirm: () => void
}

export const useFilterStore = create<FilterStore>(set => ({
	isOpenModal: false,
	isOpenConfrim: false,

	openModal: () => set({ isOpenModal: true }),
	closeModal: () => set({ isOpenModal: false }),
	openConfirm: () => set({ isOpenConfrim: true }),
	closeConfirm: () => set({ isOpenConfrim: false })
}))
