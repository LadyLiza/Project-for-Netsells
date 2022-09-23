import ProgressBar from '../../common/ProgressBar/ProgressBar';
import './ApplicationStepInfo.sass';

const ApplicationStepInfo = (props) => {
	const filingPercentage = props.filingPercentage;
	const isCompleted = props.isCompleted;
	const title = props.title;
	const subtitle = props.subtitle;
	const details = props.details;
	const onClick = props.onClick;

	const actionText = isCompleted ? 'DONE' : 'COMPLETE';

	return (
		<div className="application-step-info">
			<div className="application-step-info__wrapper">
				<ProgressBar className="application-step-info__progress-bar" progress={filingPercentage} />

				<div className="application-step-info__title">{title}</div>

				<div className="application-step-info__subtitle">{subtitle}</div>

				<div className="application-step-info__details">{details}</div>
			</div>

			<div className="application-step-info__action" onClick={onClick}>
				<div className="application-step-info__action">
					<div className="application-step-info__action-text">{actionText}</div>
					{isCompleted ? null : <div className="application-step-info__action_arrow-icon" />}
				</div>
			</div>
		</div>
	);
};

export default ApplicationStepInfo;
