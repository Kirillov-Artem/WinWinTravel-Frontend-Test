import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import CloseIcon from './../images/Modal/close.svg'
import { useFilterStore } from './../store/filterStore'

const ConfirmModal = () => {
	const { closeConfirm, closeModal, pendingFilters, setSelectedFilters } =
		useFilterStore()
	const { t } = useTranslation()

	useEffect(() => {
		window.scrollTo({
			top: 80,
			behavior: 'smooth'
		})
	}, [])

	const handleConfirm = () => {
		setSelectedFilters(pendingFilters)
		closeConfirm()
		closeModal()
	}

	const handleCancel = () => {
		closeConfirm()
		closeModal()
	}
	return (
		<section
			className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 backdrop-blur-md w-full h-full"
			role="dialog"
			aria-modal="true"
			aria-labelledby="confirm-modal-title"
			aria-describedby="confirm-modal-description"
		>
			<div className="fixed top-[280px] left-1/2 transform -translate-x-1/2 bg-white w-full p-[32px] rounded-lg shadow-lg overflow-hidden max-w-[1220px]">
				<div className="flex items-center">
					<h2 className="text-[42px] text-center flex-1 text-gray-800">
						{t('filter:confirmApplyMessage')}
					</h2>
					<button
						onClick={closeConfirm}
						className="w-[24px] h-[24px] cursor-pointer"
						aria-label={'Close confirmation modal'}
					>
						<CloseIcon />
					</button>
				</div>

				<div className="flex justify-center gap-[32px] mt-[120px]">
					<button
						onClick={handleCancel}
						className="px-[94px] py-[19px] border border-gray-400 rounded-[16px] text-gray-700 hover:bg-gray-100 transition"
						aria-label={t('filter:no') || 'No, cancel changes'}
					>
						{t('filter:no')}
					</button>

					<button
						onClick={handleConfirm}
						className="px-[94px] py-[19px] bg-orange-500 text-white rounded-[16px] hover:bg-orange-600 transition"
						aria-label={t('filter:yes') || 'Yes, apply changes'}
					>
						{t('filter:yes')}
					</button>
				</div>
			</div>
		</section>
	)
}

export default ConfirmModal
