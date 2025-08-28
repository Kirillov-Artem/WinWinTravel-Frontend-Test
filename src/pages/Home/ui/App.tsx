import { useTranslation } from 'react-i18next'

import OpenBtn from '@components/openBtn'

import FilterModal from '../../../components/FilterModal'
import { useFilterStore } from './../../../store/filterStore'

export const App = () => {
	const { openModal, isOpenModal, selectedFilters } = useFilterStore()
	const { t } = useTranslation()

	return (
		<section className="w-full min-h-dvh flex items-center justify-center">
			<div className="flex flex-col items-center gap-[20px] mt-[30px]">
				<OpenBtn
					text={t('filter:openFilters')}
					className="cursor-pointer px-8 py-[18px] bg-[#FF5F00] text-white rounded-[16px] font-medium hover:bg-orange-600 transition grow max-w-[184px]"
					onClick={openModal}
					ariaLabel={'Open filters'}
				/>
				<pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
			</div>
			{isOpenModal && <FilterModal />}
		</section>
	)
}
