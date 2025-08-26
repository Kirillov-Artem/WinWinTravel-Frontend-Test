import { useTranslation } from 'react-i18next'

import { useQuery } from '@tanstack/react-query'

import { FilterChooseOption } from '@api/types/Filter'

import { FilterResponse, fetchFilters } from './../api'
import CloseIcon from './../images/Modal/close.svg'
import { useFilterStore } from './../store/filterStore'

const FilterModal = () => {
	const { closeModal } = useFilterStore()
	const { t } = useTranslation()

	const { data: filterData } = useQuery<FilterResponse>({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})

	return (
		<div className="absolute top-0 right-0 left-0 z-50 flex items-center justify-center backdrop-blur-md py-[80px]">
			<div className="relative w-full max-w-[1220px] bg-white rounded-2xl [box-shadow:0_0_15px_-3px_rgb(0_0_0_/_0.1),_0_0_6px_-4px_rgb(0_0_0_/_0.1)] flex flex-col pt-[32px] pb-[40px] px-[33px]">
				<div className="flex items-center">
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

				<div className="flex-1 overflow-y-auto pt-5 space-y-8">
					{filterData?.filterItems.map(filter => (
						<div key={filter.id}>
							<h3 className="text-2xl font-medium text-[#31393C] mb-[24px]">
								{t(`filter:filter.${filter.id}.name`)}
							</h3>
							<div className="grid grid-cols-3 gap-2">
								{filter.options.map((option: FilterChooseOption) => (
									<label
										key={option.id}
										className="flex items-center gap-2 cursor-pointer"
									>
										<input
											type="checkbox"
											className="mr-[16px] w-4 h-4 border-2 border-[#31393C] rounded accent-orange-500"
										/>
										{t(`filter:filter.${filter.id}.${option.id}`)}
									</label>
								))}
							</div>
							<div className="w-full h-[2px] bg-[#B4B4B4] mt-[25px]"></div>
						</div>
					))}
				</div>

				{/* Footer */}
				<div className="flex items-center justify-center pt-[32px]">
					<button className="cursor-pointer translate-x-[50%] mx-auto px-8 py-[18px] bg-[#FF5F00] text-white rounded-[16px] font-medium hover:bg-orange-600 transition grow max-w-[184px]">
						{t('filter:apply')}
					</button>
					<button className="cursor-pointer text-base underline text-[#078691] hover:text-gray-700">
						{t('filter:resetFilters')}
					</button>
				</div>
			</div>
		</div>
	)
}

export default FilterModal
