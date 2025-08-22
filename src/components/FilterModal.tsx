import { useTranslation } from 'react-i18next'

import { useQuery } from '@tanstack/react-query'

import { FilterResponse, fetchFilters } from '@api'
import { FilterChooseOption } from '@api/types/Filter'

import { useFilterStore } from '@store/filterStore'

import CloseIcon from './../images/Modal/close.svg'

const FilterModal = () => {
	const { closeModal } = useFilterStore()
	const { t } = useTranslation()

	const { data: filterData } = useQuery<FilterResponse>({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})

	return (
		<div className="fixed inset-0 bg-black/25 flex items-center justify-center z-10 px-20">
			<div className="w-full bg-white rounded-lg overflow-y-auto p-10 pr-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
				<div className="flex items-center justify-between">
					<h2 className="font-inter font-medium text-[40px] text-center flex-1">
						{t('filter:filterTitle')}
					</h2>
					<button
						onClick={closeModal}
						className="w-[24px] h-[24px] cursor-pointer"
					>
						<CloseIcon />
					</button>
				</div>
				<div className="w-full h-[2px] bg-[#B4B4B4] mt-[25px]"></div>
				{filterData?.filterItems.map(filter => (
					<div key={filter.id}>
						<h3>{t(`filter:filter.${filter.id}.name`)}</h3>
						{filter.options.map((option: FilterChooseOption) => (
							<label key={option.id}>
								<input type="checkbox" />
								{t(`filter:filter.${filter.id}.${option.id}`)}
							</label>
						))}
						<div className="w-full h-[2px] bg-[#B4B4B4] mt-[25px]"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FilterModal
