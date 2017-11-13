import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  Pano,
  Scene,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class react_vr_practice extends React.Component {
  constructor() {
    super()
    this.state = {
      translateX: 0,
      translateY: 0,
      translateZ: 0,
    }
  }
  render() {
    textStyle = {
      backgroundColor: '#777879',
      fontSize: 0.8,
      fontWeight: '400',
      paddingLeft: 0.2,
      paddingRight: 0.2,
      margin: 0.2,
      textAlign: 'center',
      textAlignVertical: 'center',
    }
    const styles = StyleSheet.create({
	    text: textStyle,
      button: Object.assign({}, textStyle, {
        width: 3,
        height: 1,
      }),
      textView: {
        flexDirection: 'row',
        layoutOrigin: [0.5, 0.5],
        alignSelf: 'center',
        alignItems: 'center',
      },
    })
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Scene style={{
          transform: [
            {translate:
             [this.state.translateX, this.state.translateY, this.state.translateZ]}
          ]
        }} />
        <Image
          style={{
            width: 1,
            height: 1,
            transform: [
              {translate: [-0.5, 0, -4]}
            ]
          }}
          source={asset('halake_logo.png')} />
        <View style={{
          transform: [
            {translate: [this.state.translateX, this.state.translateY + 2, this.state.translateZ - 6]}
          ]
        }}>
          <View style={styles.textView}>
            <VrButton onClick={()=>{ this.setState({translateX: this.state.translateX - 1}) }}>
              <Text style={styles.button}>
                Left
              </Text>
            </VrButton>
            <VrButton onClick={()=>{ this.setState({translateX: this.state.translateX + 1}) }}>
              <Text style={styles.button}>
                Right
              </Text>
            </VrButton>
          </View>
          <View style={styles.textView}>
            <VrButton onClick={()=>{ this.setState({translateZ: this.state.translateZ - 1}) }}>
              <Text style={styles.button}>
                Forward
              </Text>
            </VrButton>
            <VrButton onClick={()=>{ this.setState({translateZ: this.state.translateZ + 1}) }}>
              <Text style={styles.button}>
                Back
              </Text>
            </VrButton>
          </View>
          <View style={styles.textView}>
            <VrButton onClick={()=>{ this.setState({translateY: this.state.translateY + 1}) }}>
              <Text style={styles.button}>
                Up
              </Text>
            </VrButton>
            <VrButton onClick={()=>{ this.setState({translateY: this.state.translateY - 1}) }}>
              <Text style={styles.button}>
                Down
              </Text>
            </VrButton>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>
              Current: ({ this.state.translateX }, { this.state.translateZ }, { this.state.translateY })
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_practice', () => react_vr_practice);
