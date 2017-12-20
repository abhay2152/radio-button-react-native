import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';


export default class RadioButton extends Component {

  getOuterCircleStyle() {
    const { outerCircleSize, outerCircleWidth, outerCircleColor } = this.props;
    return {
      height: outerCircleSize,
      width: outerCircleSize,
      borderRadius: outerCircleSize / 2,
      borderWidth: outerCircleWidth,
      borderColor: outerCircleColor,
    };
  }

  getInnerCircleStyle() {
    const { innerCircleSize, innerCircleColor } = this.props;
    return {
      height: innerCircleSize,
      width: innerCircleSize,
      borderRadius: innerCircleSize / 2,
      backgroundColor: innerCircleColor,
    };
  }

  render() {
    const { accessibilityLabel, onPress, value, currentValue, children } = this.props;
    return (
      <TouchableWithoutFeedback
        accessibilityLabel={accessibilityLabel}
        onPress={() => onPress(value)}
      >
        <View style={styles.circleContainer}>
          <View style={[styles.defaultOuterCircleStyle, this.getOuterCircleStyle()]}>
            { value === currentValue &&
              <View style={this.getInnerCircleStyle()} />
            }
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

RadioButton.propTypes = {
  accessibilityLabel: PropTypes.string,
  onPress: PropTypes.func,
  outerCircleSize: PropTypes.number,
  outerCircleWidth: PropTypes.number,
  innerCircleSize: PropTypes.number,
  outerCircleColor: PropTypes.string,
  innerCircleColor: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.any.isRequired,
  currentValue: PropTypes.any,
};

RadioButton.defaultProps = {
  onPress: () => {},
  outerCircleSize: 24,
  outerCircleWidth: 2,
  innerCircleSize: 12,
  outerCircleColor: '#9eacb4',
  innerCircleColor: '#ff6624',
};
