import './ProgressBar.sass';

const ProgressBar = (props) => {
	const progress = props.progress;
	const className = props.className;

	function getFilledWidth(progress) {
		let fixedProgress = progress;

		if (progress < 0) {
			fixedProgress = 0;
		}

		if (progress > 100) {
			fixedProgress = 100;
		}

		return `${fixedProgress}%`;
	}

	const filledWidth = getFilledWidth(progress);

	return (
		<div className={`progress-bar ${className}`}>
			<div className="progress-bar__empty" />
			<div className="progress-bar__filled" style={{ width: `${filledWidth}` }} />
		</div>
	);
};

export default ProgressBar;
