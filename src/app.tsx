import './app.css'
import { Container, ContainerFluid } from './components/Container'
import { Discount } from './components/Discount'
import { Footer } from './components/Footer'
import { MonthSelection } from './components/MonthSelection'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { XMasBanner } from './components/XMasBanner'

export function App() {
  return <>
    <Navbar />

    <main>
      <Container>
        <XMasBanner />
        <MonthSelection />
      </Container>

      <Container>
        <Services />
        <Discount />
      </Container>
    </main>

    <ContainerFluid additionalClasses={["bg-dark"]}>
      <Container additionalClasses={["pt-0"]}>
        <Footer />
      </Container>
    </ContainerFluid>
  </>
}
