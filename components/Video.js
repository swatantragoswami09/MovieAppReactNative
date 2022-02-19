import {View, Text, Dimensions, BackHandler, Platform} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Video = ({onClose}) => {
  return (
    <WebView
      mediaPlaybackRequiresUserAction={true}
      androidLayerType="hardware"
      mixedContentMode="always"
      allowsBackForwardNavigationGestures={true}
      automaticallyAdjustContentInsets
      allowsFullscreenVideo={true}
      style={{
        height: height,
        width: width,
        alignSelf: 'center',
        alignContent: 'center',
      }}
      javaScriptEnabled={true}
      source={{
        uri: 'https://vjs.zencdn.net/v/oceans.mp4',
      }}
    />
  );
};

export default Video;
