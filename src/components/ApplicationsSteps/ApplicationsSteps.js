import ApplicationStepInfo from './ApplicationStepInfo/ApplicationStepInfo';
import { Phases } from '../../types';
import {
	getPercentageForPersonalInfo,
	getPercentageForAdditionalInfo,
	getPercentageForAdditionalFiles,
} from 'components/types';
import TheButton from '../common/TheButton/TheButton';
import './ApplicationsSteps.sass';
import { Steps } from '../../types';

const ApplicationsSteps = (props) => {
	const changePhase = props.changePhase;
	const changeStep = props.changeStep;
	const personalInfo = props.personalInfo;
	const additionalInfo = props.additionalInfo;
	const additionalFiles = props.additionalFiles;

	const personalInfoFilingPercentage = getPercentageForPersonalInfo(personalInfo);
	const additionalInfoFilingPercentage = getPercentageForAdditionalInfo(additionalInfo);
	const additionalFilesFilingPercentage = getPercentageForAdditionalFiles(additionalFiles);

	function onClick(step) {
		changeStep(step);
		changePhase(Phases.FORM_FILING);
	}

	function checkRequiredFiedls() {
		if (!personalInfo.firstName) {
			return false;
		}

		if (!personalInfo.email) {
			return false;
		}

		if (additionalInfo.liveInUk === '') {
			return false;
		}

		if (!additionalInfo.githubProfile) {
			return false;
		}

		if (!additionalInfo.aboutYou) {
			return false;
		}

		if (!additionalFiles.cv) {
			return false;
		}

		return true;
	}

	const canSubmit = checkRequiredFiedls();

	return (
		<div className="applications_steps">
			<div className="applications_steps__header">
				<div className="applications_steps__title">Applications Steps</div>

				<div className="applications_steps__subtitle">Select the step you wish to complete.</div>
			</div>

			<div class="applications_steps__steps">
				<ApplicationStepInfo
					filingPercentage={personalInfoFilingPercentage}
					isCompleted={personalInfoFilingPercentage === 100}
					title="STEP 1"
					subtitle="Personal Details"
					details="Please complete your personal details section by clicking complete."
					onClick={() => onClick(Steps.PERSONAL_DETAILS)}
				/>

				<ApplicationStepInfo
					filingPercentage={additionalInfoFilingPercentage}
					isCompleted={additionalInfoFilingPercentage === 100}
					title="STEP 2"
					subtitle="More About You"
					details="Please complete this section by clicking complete."
					onClick={() => onClick(Steps.ADDITIONAL_INFORMATION)}
				/>

				<ApplicationStepInfo
					filingPercentage={additionalFilesFilingPercentage}
					isCompleted={additionalFilesFilingPercentage === 100}
					title="STEP 3"
					subtitle="Files Upload"
					details="Just upload your cover letter to complete this section."
					onClick={() => onClick(Steps.ADDITIONAL_FILES)}
				/>
			</div>

			{canSubmit ? (
				<div className="applications_steps__actions">
					<TheButton
						text="SUBMIT APPLICATION"
						padding-top="24"
						padding-bottom="29"
						width="220"
						border-radius="0"
						onClick={() => changePhase(Phases.SUCCESS)}
					/>
				</div>
			) : null}
		</div>
	);
};

export default ApplicationsSteps;
