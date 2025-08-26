import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import CloseIcon from './../images/Modal/close.svg'
import { useFilterStore } from './../store/filterStore'

const ConfirmModal = () => {
	const { closeConfirm } = useFilterStore()
	const { t } = useTranslation()

	useEffect(() => {
		window.scrollTo({
			top: 80,
			behavior: 'smooth'
		})
	}, [])
	return (
		<div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 backdrop-blur-md w-full h-full">
			<div className="fixed top-[280px] left-1/2 transform -translate-x-1/2 bg-white w-full p-[32px] rounded-lg shadow-lg overflow-hidden max-w-[1220px]">
				<div className="flex items-center">
					<h2 className="text-[42px] text-center flex-1 text-gray-800">
						{t('filter:confirmApplyMessage')}
					</h2>
					<button
						onClick={closeConfirm}
						className="w-[24px] h-[24px] cursor-pointer"
					>
						<CloseIcon />
					</button>
				</div>

				<div className="flex justify-center gap-[32px] mt-[120px]">
					<button
						onClick={() => {
							closeConfirm()
						}}
						className="px-[94px] py-[19px] border border-gray-400 rounded-[16px] text-gray-700 hover:bg-gray-100 transition"
					>
						{t('filter:no')}
					</button>

					<button
						onClick={() => {
							closeConfirm()
						}}
						className="px-[94px] py-[19px] bg-orange-500 text-white rounded-[16px] hover:bg-orange-600 transition"
					>
						{t('filter:yes')}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ConfirmModal
