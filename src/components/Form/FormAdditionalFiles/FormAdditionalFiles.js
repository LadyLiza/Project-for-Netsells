import TheButton from '../../common/TheButton/TheButton';
import { useState } from 'react';
import StepHeader from '../StepHeader/StepHeader';
import Button from '@mui/material/Button';
import './FormAdditionalFiles.sass';

const FormAdditionalFiles = (props) => {
	const additionalFiles = props.data;

	const [cv, setCv] = useState(additionalFiles.cv);
	const [coverLetter, setCoverLetter] = useState(additionalFiles.coverLetter);

	const cvEmptyTitle = 'Upload your CV file';
	const coverLetterEmptyTitle = 'Upload Your Cover Letter';
	const cvUploadedTitle = 'Reupload a new file';
	const coverLetterUploadedTitle = 'Reupload a new file';
	const uploadLinkText = 'HERE';
	const reuploadLinkText = ' here';

	const cvUploaded = !!cv;
	const coverLetterUploaded = !!coverLetter;
	const cvName = cvUploaded ? cv.name : '';
	const coverLetterName = coverLetterUploaded ? coverLetter.name : '';

	function onCvUploaded(event) {
		const files = event.target.files || [];

		if (!files.length) {
			return;
		}

		const file = files[0];
		setCv(file);
	}

	function onCoverLetterUploaded(event) {
		const files = event.target.files || [];

		if (!files.length) {
			return;
		}

		const file = files[0];
		setCoverLetter(file);
	}

	function canSubmit() {
		if (!cv) {
			return;
		}

		return true;
	}

	function onSubmit() {
		if (!canSubmit()) {
			return;
		}

		const additionalFiles = {
			cv,
			coverLetter,
		};

		props.onSubmit(additionalFiles);
	}

	return (
		<div className="form-additional-files">
			<StepHeader className="form-additional-files__header" title="Files Upload" />

			<div className="form-additional-files__field">
				<Button variant="contained" component="label" className="form-additional-files__upload-button">
					{cvUploaded ? (
						<div className="form-additional-files__field_uploaded">
							<div className="form-additional-files__field-title-wrapper">
								<div className="form-additional-files__field-icon" />
								<div className="form-additional-files__field-title" title={cvName}>
									{cvName}
								</div>
							</div>

							<div className="form-additional-files__field-subtitle">
								<span>{cvUploadedTitle}</span>
								<span className="form-additional-files__field-upload-link">{reuploadLinkText}</span>
							</div>
						</div>
					) : (
						<div className="form-additional-files__field_empty">
							<div className="form-additional-files__field-icon required" />
							<div className="form-additional-files__field-title">{cvEmptyTitle}</div>
							<div className="form-additional-files__field-subtitle">
								<span className="form-additional-files__field-upload-link">{uploadLinkText}</span>
							</div>
						</div>
					)}

					<input hidden accept="*" type="file" onChange={onCvUploaded} />
				</Button>
			</div>

			<div className="form-additional-files__field">
				<Button variant="contained" component="label" className="form-additional-files__upload-button">
					{coverLetterUploaded ? (
						<div className="form-additional-files__field_uploaded">
							<div className="form-additional-files__field-title-wrapper">
								<div className="form-additional-files__field-icon" />
								<div className="form-additional-files__field-title" title={coverLetterName}>
									{coverLetterName}
								</div>
							</div>

							<div className="form-additional-files__field-subtitle">
								<span>{coverLetterUploadedTitle}</span>
								<span className="form-additional-files__field-upload-link">{reuploadLinkText}</span>
							</div>
						</div>
					) : (
						<div className="form-additional-files__field_empty">
							<div className="form-additional-files__field-icon" />
							<div className="form-additional-files__field-title">{coverLetterEmptyTitle}</div>
							<div className="form-additional-files__field-subtitle">
								<span className="form-additional-files__field-upload-link">{uploadLinkText}</span>
							</div>
						</div>
					)}

					<input hidden accept="*" type="file" onChange={onCoverLetterUploaded} />
				</Button>
			</div>

			<div className="form-additional-files__actions">
				<TheButton width="115" text="NEXT" onClick={onSubmit} />
			</div>
		</div>
	);
};

export default FormAdditionalFiles;
