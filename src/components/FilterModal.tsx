import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterData } from '@hooks/useFilterDats'
import {
	SearchRequestFilter,
	SearchRequestOptions
} from '@shared/api/types/SearchRequest/SearchRequestFilter'

import { FilterChooseOption, FilterItem, FilterType } from '@api/types/Filter'

import CloseIcon from './../images/Modal/close.svg'
import { useFilterStore } from './../store/filterStore'
import ConfirmModal from './ConfirmModal'
import OpenBtn from './openBtn'

const FilterModal = () => {
	const {
		closeModal,
		openConfirm,
		isOpenConfrim,
		pendingFilters,
		selectedFilters,
		setPendingFilters
	} = useFilterStore()
	const { t } = useTranslation()

	const { data: filterData } = useFilterData()

	useEffect(() => {
		setPendingFilters([...selectedFilters])
	}, [])

	const handleCheckboxChange = (filterId: string, optionId: string) => {
		const prev = pendingFilters

		const filterIndex = prev.findIndex(
			(prevFilter: SearchRequestOptions) => prevFilter.id === filterId
		)
		let updated: SearchRequestFilter

		if (filterIndex >= 0) {
			updated = [...prev]
			const optionIndex = updated[filterIndex].optionsIds.indexOf(optionId)

			if (optionIndex >= 0) {
				updated[filterIndex].optionsIds.splice(optionIndex, 1)
				if (updated[filterIndex].optionsIds.length === 0) {
					updated.splice(filterIndex, 1)
				}
			} else {
				updated[filterIndex].optionsIds.push(optionId)
			}
		} else {
			updated = [
				...prev,
				{
					id: filterId,
					type: FilterType.OPTION,
					optionsIds: [optionId]
				}
			]
		}

		setPendingFilters(updated)
	}

	return (
		<>
			<div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md" />
			<section
				className="absolute top-0 right-0 left-0 z-40 flex items-center justify-center backdrop-blur-md py-[80px]"
				role="dialog"
				aria-modal="true"
				aria-labelledby="filter-modal-title"
			>
				<div className="relative w-full max-w-[1220px] bg-white rounded-2xl [box-shadow:0_0_15px_-3px_rgb(0_0_0_/_0.1),_0_0_6px_-4px_rgb(0_0_0_/_0.1)] flex flex-col pt-[32px] pb-[40px] px-[33px]">
					<div className="flex items-center">
						<h2 className="font-inter text-[40px] text-center flex-1">
							{t('filter:filterTitle')}
						</h2>
						<button
							onClick={closeModal}
							className="w-[24px] h-[24px] cursor-pointer"
							aria-label={'Close modal'}
						>
							<CloseIcon />
						</button>
					</div>
					<hr className="w-full h-[2px] border-0 bg-[#B4B4B4] mt-[25px]"></hr>

					<div className="flex-1 overflow-y-auto pt-5 space-y-8">
						{filterData?.filterItems.map((filter: FilterItem) => (
							<div key={filter.id}>
								<h3 className="text-2xl font-medium text-[#31393C] mb-[24px]">
									{t(`filter:filter.${filter.id}.name`)}
								</h3>
								<div className="grid grid-cols-3 gap-2">
									{filter.options.map((option: FilterChooseOption) => (
										<>
											<div className="flex w-full items-center gap-[16-px]">
												<input
													type="checkbox"
													className="mr-[16px] w-4 h-4 border-2 border-[#31393C] rounded accent-orange-500"
													checked={pendingFilters.some(
														pendingFilter =>
															pendingFilter.id === filter.id &&
															pendingFilter.optionsIds.includes(option.id)
													)}
													onChange={() =>
														handleCheckboxChange(filter.id, option.id)
													}
												/>
												<label
													key={option.id}
													className="flex w-full max-w-[250px] items-center gap-2 cursor-pointer"
												>
													{t(`filter:filter.${filter.id}.${option.id}`)}
												</label>
											</div>
										</>
									))}
								</div>
								<hr className="w-full h-[2px] border-0 bg-[#B4B4B4] mt-[25px]"></hr>
							</div>
						))}
					</div>

					<div className="flex items-center pt-[32px] ">
						<OpenBtn
							text={t('filter:apply')}
							onClick={openConfirm}
							className="cursor-pointer translate-x-[50%] mx-auto px-8 py-[18px] bg-[#FF5F00] text-white rounded-[16px] font-medium hover:bg-orange-600 transition grow max-w-[184px]"
							ariaLabel={'Apply selected filters'}
						></OpenBtn>
						<button
							onClick={() => setPendingFilters([])}
							className="cursor-pointer text-base underline text-[#078691] hover:text-gray-700"
							aria-label={'Reset all filters to default'}
						>
							{t('filter:resetFilters')}
						</button>
					</div>
				</div>
				{isOpenConfrim && <ConfirmModal />}
			</section>
		</>
	)
}

export default FilterModal
