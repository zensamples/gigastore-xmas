import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso'
import './app.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'

export function App() {
  return <LocationProvider>
    <Navbar />
    <ErrorBoundary>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </ErrorBoundary>
  </LocationProvider>
}
