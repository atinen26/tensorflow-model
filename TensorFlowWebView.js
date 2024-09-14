import React from 'react';
import { WebView } from 'react-native-webview';

const TensorFlowWebView = () => {
  return (
    <WebView
      source={{ uri: 'index.html' }}
      style={{ flex: 1 }}
    />
  );
};

export default TensorFlowWebView;
