import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {dropMarker, checkMarkers} from '../../../actions/demo.actions.js'
import {bindActionCreators} from 'redux'

import DemoPage from '../../../components/Demo/Demo.js'

class DemoContainer extends React.Component {
	render() {
		const {
			grid,
			markers,
			droppedMarkers,
			disabledColors,
			ready,
			checked,
			valid,

			dropMarker,
			checkMarkers
		} = this.props;

		return (
			<DemoPage
				grid={grid}
				markers={markers}
				droppedMarkers={droppedMarkers}
				disabledColors={disabledColors}
				ready={ready}
				checked={checked}
				valid={valid}
				dropMarker={dropMarker}
				checkMarkers={checkMarkers}
			/>
		);
	}
}

DemoContainer.propTypes = {
	grid: PropTypes.object,
	markers: PropTypes.array,
	droppedMarkers: PropTypes.array,
	disabledColors: PropTypes.array,
	ready: PropTypes.bool,
	checked: PropTypes.bool,
	valid: PropTypes.bool
};

const mapStateToProps = (state) => ({
	grid: state.demo.grid,
	markers: state.demo.markers,
	droppedMarkers: state.demo.droppedMarkers,
	disabledColors: state.demo.disabledColors,
	ready: state.demo.ready,
	checked: state.demo.checked,
	valid: state.demo.valid
});

const mapDispatchToProps = (dispatch) => {
	return {
		dropMarker: bindActionCreators(dropMarker, dispatch),
		checkMarkers: bindActionCreators(checkMarkers, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer)
