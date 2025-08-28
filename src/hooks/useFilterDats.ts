import { FilterItem } from '@shared/api/types/Filter'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface FilterResponse {
	filterItems: FilterItem[]
}

export const fetchFilters = async (): Promise<FilterResponse> => {
	const { data } = await axios.get<FilterResponse>('/temp/filterData.json')
	return data
}
export const useFilterData = () => {
	return useQuery<FilterResponse>({
		queryKey: ['filterData'],
		queryFn: async () => {
			const { data } = await axios.get<FilterResponse>('/temp/filterData.json')
			return data
		}
	})
}
