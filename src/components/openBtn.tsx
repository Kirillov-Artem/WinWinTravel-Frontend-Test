interface ApplyBtnProps {
	text: string
	onClick: () => void
	className: string
	ariaLabel: string
}

const OpenBtn: React.FC<ApplyBtnProps> = ({
	text,
	onClick,
	className,
	ariaLabel
}) => {
	return (
		<button
			onClick={onClick}
			className={className}
			aria-label={ariaLabel}
		>
			{text}
		</button>
	)
}

export default OpenBtn
