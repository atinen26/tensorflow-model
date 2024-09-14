import React from 'react';
import { WebView } from 'react-native-webview';

const TensorFlowWebView = () => {
  return (
    <WebView
      source={{ uri: 'https://your-github-username.github.io/tensorflow-model/' }}
      style={{ flex: 1 }}
    />
  );
};

export default TensorFlowWebView;
