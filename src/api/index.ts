import { FilterItem } from '@shared/api/types/Filter'
import axios from 'axios'

export interface FilterResponse {
	filterItems: FilterItem[]
}

export const fetchFilters = async (): Promise<FilterResponse> => {
	const { data } = await axios.get<FilterResponse>('/temp/filterData.json')
	return data
}
