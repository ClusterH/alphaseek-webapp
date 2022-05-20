import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Loader from 'components/Loader'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./views/Home'))
const Faq = lazy(() => import('./views/Home/components/FAQ/FaqPage'))
const Footer = lazy(() => import('./components/Footer'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
