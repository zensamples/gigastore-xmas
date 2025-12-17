import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso'
import './app.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Categories } from './pages/Categories'
import { Offers } from './pages/Offers'

export function App() {
  return <LocationProvider>
    <Navbar />
    <ErrorBoundary>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/offers" component={Offers} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </ErrorBoundary>
  </LocationProvider>
}
