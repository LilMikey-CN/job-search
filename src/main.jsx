//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ConfigProvider, DatePicker, message } from 'antd';

import 'dayjs/locale/zh-cn';

import zhCN from 'antd/locale/zh_CN';

createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
