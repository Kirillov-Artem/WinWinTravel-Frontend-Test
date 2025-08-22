import { useFilterStore } from './../store/filterStore'

interface ApplyBtnProps {
	text: string
}

const ApplyBtn: React.FC<ApplyBtnProps> = ({ text }) => {
	const { openModal } = useFilterStore()
	return (
		<button
			onClick={openModal}
			className="w-[184px] h-[64px] bg-[#FF5F00] text-white cursor-pointer rounded-2xl"
		>
			{text}
		</button>
	)
}

export default ApplyBtn
