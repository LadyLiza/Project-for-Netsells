import './App.sass';
import { useState } from 'react';
import ApplicationHeader from './components/ApplicationHeader/ApplicationHeader';
import SchemeSwitcher from './components/SchemeSwitcher/SchemeSwitcher';
import StartPage from './components/StartPage/StartPage';
import ApplicationsSteps from './components/ApplicationsSteps/ApplicationsSteps';
import Form from './components/Form/Form';
import Success from './components/Success/Success';
import { Phases, Steps } from './types';

function App() {
	const [phase, setPhase] = useState(Phases.START);
	const [step, setStep] = useState(Steps.PERSONAL_DETAILS);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		secondName: '',
		email: '',
		phone: '',
	});
	const [additionalInfo, setAdditionalInfo] = useState({
		liveInUk: '',
		githubProfile: '',
		aboutYou: '',
	});
	const [additionalFiles, setAdditionalFiles] = useState({
		cv: null,
		coverLetter: null,
	});

	const formData = {
		personalInfo,
		additionalInfo,
		additionalFiles,
		setPersonalInfo,
		setAdditionalInfo,
		setAdditionalFiles,
	};

	function changeScheme() {
		setIsDarkMode((prev) => !prev);
	}

	function onStart() {
		setPhase(Phases.STEP_SELECTING);
	}

	function onReset() {
		resetData();
		setPhase(Phases.START);
	}

	function resetData() {
		setPersonalInfo({
			firstName: '',
			secondName: '',
			email: '',
			phone: '',
		});

		setAdditionalInfo({
			liveInUk: '',
			githubProfile: '',
			aboutYou: '',
		});

		setAdditionalFiles({
			cv: null,
			coverLetter: null,
		});
	}

	function getCurrentPage() {
		switch (phase) {
			case Phases.START: {
				return <StartPage onStart={onStart}></StartPage>;
			}
			case Phases.STEP_SELECTING: {
				return (
					<ApplicationsSteps
						changeStep={setStep}
						personalInfo={personalInfo}
						additionalInfo={additionalInfo}
						additionalFiles={additionalFiles}
						changePhase={setPhase}
					></ApplicationsSteps>
				);
			}
			case Phases.FORM_FILING: {
				return <Form currentStep={step} setStep={setStep} formData={formData} onFill={onStart}></Form>;
			}
			case Phases.SUCCESS: {
				return <Success onFinish={onReset}></Success>;
			}
		}
	}

	function getCurrentComponentMarginTop() {
		switch (phase) {
			case Phases.START: {
				return 220;
			}
			case Phases.STEP_SELECTING: {
				return 85;
			}
			case Phases.FORM_FILING: {
				return 80;
			}
			case Phases.SUCCESS: {
				return 300;
			}
		}
	}

	function getBackgroundClass() {
		switch (phase) {
			case Phases.START: {
				return 'start';
			}
			case Phases.STEP_SELECTING: {
				return 'common';
			}
			case Phases.FORM_FILING: {
				return 'common';
			}
			case Phases.SUCCESS: {
				return 'success';
			}
		}
	}

	const currentPage = getCurrentPage();
	const currentComponentMarginTop = getCurrentComponentMarginTop();
	const backgroundClass = getBackgroundClass();
	const schemeClass = isDarkMode ? 'dark' : 'light';

	return (
		<div className={`app ${schemeClass} ${backgroundClass}`}>
			<ApplicationHeader />

			<div className="app__component" style={{ marginTop: `${currentComponentMarginTop}px` }}>
				{currentPage}
			</div>

			<SchemeSwitcher isDarkMode={isDarkMode} changeScheme={changeScheme} />
		</div>
	);
}

export default App;
