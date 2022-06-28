import React from 'react'

import ReactDOM from 'react-dom'

import { useGetWalletBalance, useInactiveListener } from 'hooks'
import 'react-toastify/dist/ReactToastify.css'
import { ToastWrapper } from 'styles/components'
import GlobalStyles from 'styles/globalStyles'
import { useMintPhaseStatus } from 'views/Home/hooks'

import App from './App'
import './index.scss'
import { Providers } from './Providers'
import reportWebVitals from './reportWebVitals'

const GlobalHooks = () => {
  useInactiveListener()
  useMintPhaseStatus()
  useGetWalletBalance() // We need to check wallet eth balance real-time?

  return null
}

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalHooks />
      <GlobalStyles />
      <ToastWrapper
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
