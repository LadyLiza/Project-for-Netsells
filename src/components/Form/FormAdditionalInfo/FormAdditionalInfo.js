import TheButton from '../../common/TheButton/TheButton';
import StepHeader from '../StepHeader/StepHeader';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './FormAdditionalInfo.sass';

const FormAdditionalInfo = (props) => {
	const additionalInfo = props.data;

	const [liveInUk, setLiveInUk] = useState(additionalInfo.liveInUk);
	const [githubProfile, setGithubProfile] = useState(additionalInfo.githubProfile);
	const [aboutYou, setAdoutYou] = useState(additionalInfo.aboutYou);

	function canSumbit() {
		if (liveInUk === '') {
			return false;
		}

		if (!githubProfile) {
			return false;
		}

		if (!aboutYou) {
			return false;
		}

		return true;
	}

	function onSubmit() {
		if (!canSumbit()) {
			return false;
		}

		const additionalInfo = {
			liveInUk,
			githubProfile,
			aboutYou,
		};

		props.onSubmit(additionalInfo);
	}

	return (
		<div className="form-additional-info">
			<StepHeader className="form-additional-info__header" title="More About You" />

			<div className="form-additional-info__field">
				<div className="form-additional-info__field-title required">
					<label htmlhtmlFor="liveInUk">Do you live in the UK?</label>
				</div>

				<Select
					id="liveInUk"
					type="text"
					value={liveInUk}
					onChange={(event) => setLiveInUk(event.target.value)}
				>
					<MenuItem value={true}>Yes</MenuItem>
					<MenuItem value={false}>No</MenuItem>
				</Select>
			</div>

			<div className="form-additional-info__field">
				<div className="form-additional-info__field-title required">
					<label htmlFor="githubProfile">Your Github Profile</label>
				</div>

				<TextField
					id="githubProfile"
					type="text"
					value={githubProfile}
					onChange={(event) => setGithubProfile(event.target.value)}
				/>
			</div>

			<div className="form-additional-info__field">
				<div className="form-additional-info__field-title required">
					<label htmlFor="adoutYou">About You</label>
				</div>

				<TextField
					id="aboutYou"
					type="text"
					value={aboutYou}
					multiline
					rows={9}
					placeholder="Let us know more about you. What are you in to?"
					onChange={(event) => setAdoutYou(event.target.value)}
				/>
			</div>

			<div className="form-additional-info__actions">
				<TheButton width="115" text="NEXT" onClick={onSubmit} />
			</div>
		</div>
	);
};

export default FormAdditionalInfo;
