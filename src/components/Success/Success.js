import TheButton from '../common/TheButton/TheButton';
import './Success.sass';

const Success = (props) => {
	const onFinish = props.onFinish;

	return (
		<div className="the-success">
			<div className="the-success__title">Success!</div>

			<div className="the-success__subtitle">Thank You</div>

			<div className="the-success__message">Our team will respond to you within the next 48h</div>

			<div className="the-success__actions">
				<TheButton width="115" text="HOME" onClick={onFinish} />
			</div>
		</div>
	);
};

export default Success;
