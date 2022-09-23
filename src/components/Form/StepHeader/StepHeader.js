import './StepHeader.sass';

const StepHeader = (props) => {
	const title = props.title;
	const subtitle = 'Required fields are marked by an asterisk';

	return (
		<div className="step-header">
			<div className="step-header__title">{title}</div>

			<div className="step-header__subtitle">
				<span className="step-header__subtitle required"> {subtitle} </span>
			</div>
		</div>
	);
};

export default StepHeader;
