import TheButton from '../common/TheButton/TheButton';
import './StartPage.sass';

const StartPage = (props) => {
	const onStart = props.onStart;

	return (
		<div className="start-page">
			<div className="start-page__title">Welcome</div>

			<div className="start-page__subtitle">We’re excited to see what you can do!</div>

			<div className="start-page__actions">
				<TheButton
					paddingTop="24"
					paddingBottom="29"
					width="160"
					borderRadius="0"
					text="BEGIN"
					onClick={onStart}
				/>
			</div>
		</div>
	);
};

export default StartPage;
