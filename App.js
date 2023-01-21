import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroARCamera
} from '@viro-community/react-viro';


// import React, { Component } from 'react';

// import {StyleSheet, View} from 'react-native';


const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  ViroARTrackingTargets.createTargets({
    ben : {
      source : require('./assets/target.jpg'),
      orientation : "Up",
      physicalWidth : 0.08 // real world width in meters
    },
  })

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return(
    <View>
        <ViroARScene>
      {/* <ViroARCamera> */}
          <ViroAmbientLight color="#ffffff" intensity={200}/> 

        <ViroARImageMarker target={ViroARTrackingTargets.ben}>
            <ViroText text={"Hello World"} scale={[.2, .2, .2]}
            position={[0, .1, 0]} rotation={[-90, 0, 0]} style={styles.helloWorldTextStyle} />
        </ViroARImageMarker>

      {/* </ViroARCamera> */}
      

    </ViroARScene>
    </View>
    
    );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});


// 'use strict';


// const TestImageRecognition = () => {
//     ViroARTrackingTargets.createTargets({
//         ben : {
//           source : require('./assets/target.jpg'),
//           orientation : "Up",
//           physicalWidth : 0.08 // real world width in meters
//         },
//       })

      
//     return(
//         <View>
//             <ViroARScene >
//           {/* <ViroARCamera> */}
//               <ViroAmbientLight color="#ffffff" intensity={200}/> 
  
//             <ViroARImageMarker target={"ben"}>
//                 <ViroText text={"Hello World"} scale={[.2, .2, .2]}
//                 position={[0, .1, 0]} rotation={[-90, 0, 0]} style={styles.helloWorldTextStyle} />
//             </ViroARImageMarker>
  
//           {/* </ViroARCamera> */}
          
  
//         </ViroARScene>
//         </View>
        
//         );
// }
// var styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     fontFamily: 'Arial',
//     fontSize: 30,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',  
//   },
// });


// export {TestImageRecognition}
