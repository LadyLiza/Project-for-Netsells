import { Steps } from 'types';
import FormHeader from './FormHeader/FormHeader';
import FormPersonalInfo from './FormPersonalInfo/FormPersonalInfo';
import FormAdditionalInfo from './FormAdditionalInfo/FormAdditionalInfo';
import FormAdditionalFiles from './FormAdditionalFiles/FormAdditionalFiles';
import {
	getPercentageForPersonalInfo,
	getPercentageForAdditionalInfo,
	getPercentageForAdditionalFiles,
} from 'components/types';
import './Form.sass';

const Form = (props) => {
	const currentStep = props.currentStep;
	const setStep = props.setStep;
	const onFill = props.onFill;
	const formData = props.formData;

	function onPersonalInfoSubmit(personalInfo) {
		formData.setPersonalInfo(personalInfo);
		setStep(Steps.ADDITIONAL_INFORMATION);
	}

	function onAdditionalInfoSubmit(additionalInfo) {
		formData.setAdditionalInfo(additionalInfo);
		setStep(Steps.ADDITIONAL_FILES);
	}

	function onAdditionalFilesSubmit(additionalFiles) {
		formData.setAdditionalFiles(additionalFiles);
		onFill();
	}

	function getCurrentForm() {
		switch (currentStep) {
			case Steps.PERSONAL_DETAILS: {
				return (
					<FormPersonalInfo
						data={formData.personalInfo}
						onSubmit={(personalInfo) => onPersonalInfoSubmit(personalInfo)}
					></FormPersonalInfo>
				);
			}
			case Steps.ADDITIONAL_INFORMATION: {
				return (
					<FormAdditionalInfo
						data={formData.additionalInfo}
						onSubmit={(additionalInfo) => onAdditionalInfoSubmit(additionalInfo)}
					></FormAdditionalInfo>
				);
			}
			case Steps.ADDITIONAL_FILES: {
				return (
					<FormAdditionalFiles
						data={formData.additionalFiles}
						onSubmit={(additionalFiles) => onAdditionalFilesSubmit(additionalFiles)}
					></FormAdditionalFiles>
				);
			}
		}
	}

	const currentForm = getCurrentForm();

	const personalInfoFilingPercentage = getPercentageForPersonalInfo(formData.personalInfo);
	const additionalInfoFilingPercentage = getPercentageForAdditionalInfo(formData.additionalInfo);
	const additionalFilesFilingPercentage = getPercentageForAdditionalFiles(formData.additionalFiles);

	return (
		<div className="form">
			<FormHeader
				currentStep={currentStep}
				firstStepProgress={personalInfoFilingPercentage}
				secondStepProgress={additionalInfoFilingPercentage}
				thirdStepProgress={additionalFilesFilingPercentage}
			></FormHeader>

			{currentForm}
		</div>
	);
};

export default Form;
