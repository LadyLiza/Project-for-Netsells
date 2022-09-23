import ProgressBar from '../../../common/ProgressBar/ProgressBar';
import './FormStep.sass';

const FormStep = (props) => {
	const selected = props.selected;
	const title = props.title;
	const progress = props.progress;

	const className = selected ? 'selected' : '';

	return (
		<div className={`form-step ${className}`}>
			<div className="form-step__title">{title}</div>

			<ProgressBar className="form-step__progress-bar" progress={progress} />
		</div>
	);
};

export default FormStep;
