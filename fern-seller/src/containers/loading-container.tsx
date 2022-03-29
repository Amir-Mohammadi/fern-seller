import { observer } from 'mobx-react';
import React, { Component } from 'react';
import LoadingScreen from '../components/screens/loading';

@observer
class LoadingContainer extends Component {
  render() {
    return <LoadingScreen />;
  }
}

export default LoadingContainer as any;
