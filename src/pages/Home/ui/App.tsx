import { useTranslation } from 'react-i18next'

import FilterModal from '../../../components/FilterModal'
import ApplyBtn from './../../../components/applyBtn'
import { useFilterStore } from './../../../store/filterStore'

export const App = () => {
	const { isOpenModal } = useFilterStore()
	const { t } = useTranslation()

	return (
		<section className="w-full h-dvh flex items-center justify-center">
			<ApplyBtn text={t('filter:openFilters')} />
			{isOpenModal && <FilterModal />}
		</section>
	)
}
