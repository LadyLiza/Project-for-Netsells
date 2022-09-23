import './TheButton.sass';

const TheButton = (props) => {
	const disabled = props.disabled || false;
	const borderRadius = props.borderRadius || 1;
	const width = props.width || 100;
	const height = props.height || 0;
	const paddingTop = props.paddingTop || 14;
	const paddingBottom = props.paddingBottom || 19;
	const fontSize = props.fontSize || 20;
	const text = props.text;
	const onClick = props.onClick;

	const styleObject = {
		borderRadius: `${borderRadius}px`,
		width: `${width}px`,
		paddingTop: `${paddingTop}px`,
		paddingBottom: `${paddingBottom}px`,
		fontSize: `${fontSize}px`,
	};

	if (height !== 0) {
		styleObject.height = `${height}px`;
	}

	return (
		<div className="the-button" style={styleObject} onClick={() => (disabled ? () => {} : onClick())}>
			{text}
		</div>
	);
};

export default TheButton;
