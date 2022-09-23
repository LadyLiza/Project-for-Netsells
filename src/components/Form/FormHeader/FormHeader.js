import FormStep from './FormStep/FormStep';
import './FormHeader.sass';
import { Steps } from 'types';

const FormHeader = (props) => {
	const firstStepProgress = props.firstStepProgress;
	const secondStepProgress = props.secondStepProgress;
	const thirdStepProgress = props.thirdStepProgress;
	const currentStep = props.currentStep;

	const isPersonalDetailsSelected = Steps.PERSONAL_DETAILS === currentStep;
	const isAdditionalDetailsSelected = Steps.ADDITIONAL_INFORMATION === currentStep;
	const isAdditionalFilesSelected = Steps.ADDITIONAL_FILES === currentStep;

	return (
		<div className="form-header">
			<FormStep title="STEP 1" selected={isPersonalDetailsSelected} progress={firstStepProgress} />
			<FormStep title="STEP 2" selected={isAdditionalDetailsSelected} progress={secondStepProgress} />
			<FormStep title="STEP 3" selected={isAdditionalFilesSelected} progress={thirdStepProgress} />
		</div>
	);
};

export default FormHeader;
