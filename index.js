import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class RadioButton extends Component {
    
    render(){
        return(
            <View style={this.props.wrapperStyle}>
              <TouchableWithoutFeedback onPress={() => this.props.onPress(this.props.value)}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[{
                    height: this.props.outerCircleSize || 24,
                    width: this.props.outerCircleSize || 24,
                    borderRadius: this.props.outerCircleSize/2 || 12,
                    borderWidth: this.props.outerCircleWidth || 2,
                    borderColor: this.props.outerCircleColor || '#9eacb4',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }]}>
                    {
                    this.props.value===this.props.currentValue ?
                    <View style={{
                      height: this.props.innerCircleSize || 12,
                      width: this.props.innerCircleSize || 12,
                      borderRadius: this.props.innerCircleSize/2 || 6,
                      backgroundColor: this.props.innerCircleColor || '#ff6624',
                    }}/>
                    : null
                    }
                    </View>
                       {this.props.children}
                    </View>
               </TouchableWithoutFeedback>
            </View>
        );
    }
}
RadioButton.defaultProps = {
    wrapperStyle: {}
}
