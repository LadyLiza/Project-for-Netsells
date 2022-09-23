import StepHeader from '../StepHeader/StepHeader';
import { useState } from 'react';
import TheButton from '../../common/TheButton/TheButton';
import TextField from '@mui/material/TextField';
import './FormPersonalInfo.sass';

const FormPersonalInfo = (props) => {
	const data = props.data;

	const [firstName, setFirstName] = useState(data.firstName);
	const [secondName, setSecondName] = useState(data.secondName);
	const [email, setEmail] = useState(data.email);
	const [phone, setPhone] = useState(data.phone);

	function canSubmit() {
		if (!firstName) {
			return false;
		}

		if (!email) {
			return false;
		}

		return true;
	}

	function onSubmit() {
		if (!canSubmit()) {
			return;
		}

		const personalInfo = {
			firstName,
			secondName,
			email,
			phone,
		};

		props.onSubmit(personalInfo);
	}

	return (
		<div className="form-personal-info">
			<StepHeader className="form-personal-info__header" title="Personal Details" />

			<div className="form-personal-info__field">
				<div className="form-personal-info__field-title required">
					<label htmlhtmlFor="firstName">First Name</label>
				</div>

				<TextField
					id="firstName"
					type="text"
					value={firstName}
					onChange={(event) => setFirstName(event.target.value)}
				/>
			</div>

			<div className="form-personal-info__field">
				<div className="form-personal-info__field-title">
					<label htmlFor="secondName">Second Name</label>
				</div>

				<TextField
					id="secondName"
					type="text"
					value={secondName}
					onChange={(event) => setSecondName(event.target.value)}
				/>
			</div>

			<div className="form-personal-info__field">
				<div className="form-personal-info__field-title required">
					<label htmlFor="email">Email Address</label>
				</div>

				<TextField id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
			</div>

			<div className="form-personal-info__field">
				<div className="form-personal-info__field-title">
					<label htmlFor="phoneNumber">Phone Number</label>
				</div>

				<TextField id="phone" type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
			</div>

			<i class="el-icon-edit"></i>

			<div className="form-personal-info__actions">
				<TheButton width="115" text="NEXT" onClick={onSubmit} />
			</div>
		</div>
	);
};

export default FormPersonalInfo;
