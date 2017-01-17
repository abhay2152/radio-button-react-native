# radio-button-react-native
> Simple Radio Button component for React Native

## Demo

![alt tag](https://weypfw.dm2302.livefilestore.com/y3mQXiarK9IVK5OSw1p7S_iWnsE_zZMqBNt65BEWyWjqGZrI3St04Njirj5EzNnfyFzI_V0CGFbfhYDZszshbz_gyL_upRuMm63IsLg00DsNh1cIB-cW_vJEe4jTDFAr6nTPDYleDAaOLIsvDUneCk1QicdlXs3UYMSeO1lJr0t0oc?width=153&height=138&cropmode=none)

## Installation

in Cli

```sh
npm i radio-button-react-native --save
```


# Getting started

```js
import RadioButton from 'radio-button-react-native';

export default class Example extends Component {
constructor (props){
    super(props)
      this.state = {
            value: 0
        }
    
}


handleOnPress(value){
    this.setState({value:value})
}

render(){
    return(
        <View>
        <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}/>
         <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}/>
         <RadioButton currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}/>
        </View>
    );
}

```

Basic
---

```js
<RadioForm
currentValue={this.state.value}
 value={0}
 onPress={this.handleOnPress.bind(this)}
 outerCircleColor:'gray'
 outerCircleSize:{24}
 outerCircleWidth:{2}
 innerCircleColor:'red'
 innerCircleSize:{12}
/>
```
assign a unique value to each radio button in 'value'


# Props

## RadioButton Component
### outerCircleSize[Default:{24}]
give the size of outer Circle of Button.

### outerCircleWidth[Default:{2}]
give the width of outer Circle of Button.

### outerCircleColor[Default:'#9eacb4']
give the color of outer Circle of Button.

### innerCircleSize[Default:{12}]
give the size of inner Circle of Button

### innerCircleColor[Default:'#ff6624']
give the color of inner Circle.
