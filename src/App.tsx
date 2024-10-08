import React from 'react';
import { ConfigProvider } from 'antd';
import MyApp from './MyApp';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <MyApp />
  </ConfigProvider>
);

export default App;