import moon from '../../images/moon.svg';
import sun from '../../images/sun.svg';
import './SchemeSwitcher.sass';
import Badge from '@mui/material/Badge';

const SchemeSwitcher = (props) => {
	const isDarkMode = props.isDarkMode;
	const changeScheme = props.changeScheme;

	const darkSchemeAlt = '';
	const lightSchemeAlt = '';

	function onMoonClick() {
		if (isDarkMode) {
			return;
		}

		changeScheme();
	}

	function onSunClick() {
		if (!isDarkMode) {
			return;
		}

		changeScheme();
	}

	return (
		<div className="scheme-switcher">
			<div className="scheme-switcher__icon-wrapper" onClick={onMoonClick}>
				<div className="scheme-switcher__icon">
					{isDarkMode ? (
						<Badge className="scheme-switcher__icon-moon-badge" color="secondary" variant="dot">
							<img src={moon} alt={darkSchemeAlt} />
						</Badge>
					) : (
						<img src={moon} alt={darkSchemeAlt} />
					)}
				</div>
			</div>

			<div className="scheme-switcher__icon-wrapper" onClick={onSunClick}>
				<div className="scheme-switcher__icon">
					{isDarkMode ? (
						<img src={sun} alt={lightSchemeAlt} />
					) : (
						<Badge className="scheme-switcher__icon-sun-badge" color="secondary" variant="dot">
							<img src={sun} alt={lightSchemeAlt} />
						</Badge>
					)}
				</div>
			</div>
		</div>
	);
};

export default SchemeSwitcher;
