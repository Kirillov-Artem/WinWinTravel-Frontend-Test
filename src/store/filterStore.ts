import { SearchRequestFilter } from '@shared/api/types/SearchRequest/SearchRequestFilter'
import { create } from 'zustand'

interface FilterStore {
	isOpenModal: boolean
	isOpenConfrim: boolean
	selectedFilters: SearchRequestFilter
	pendingFilters: SearchRequestFilter

	openModal: () => void
	closeModal: () => void
	openConfirm: () => void
	closeConfirm: () => void
	setSelectedFilters: (filters: SearchRequestFilter) => void
	setPendingFilters: (filters: SearchRequestFilter) => void
}

export const useFilterStore = create<FilterStore>(set => ({
	isOpenModal: false,
	isOpenConfrim: false,
	selectedFilters: [],
	pendingFilters: [],

	openModal: () => set({ isOpenModal: true }),
	closeModal: () => set({ isOpenModal: false }),
	openConfirm: () => set({ isOpenConfrim: true }),
	closeConfirm: () => set({ isOpenConfrim: false }),
	setSelectedFilters: filters => set({ selectedFilters: filters }),
	setPendingFilters: filters => set({ pendingFilters: filters })
}))
