import React from 'react'
import Marker from '../Marker'
import classes from './Sidebar.scss'

export const Sidebar = (props) => {
	const { markers, disabledColors, ready } = props;
	let markersView = markers.map((marker, i) => {
		const disabled = disabledColors.indexOf(marker.color) > -1;

		return (
			<Marker
				key={i}
				x={marker.x}
				y={marker.y}
				color={marker.color}
				ready={ready}
				disabled={disabled}
			/>
		);
	});

	return (
		<ul className={classes.sidebar}>
			{markersView}
		</ul>
	);
};

Sidebar.propTypes = {
	markers: React.PropTypes.array.isRequired,
	ready: React.PropTypes.bool.isRequired
};

export default Sidebar
