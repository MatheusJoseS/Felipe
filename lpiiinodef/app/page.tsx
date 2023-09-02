import Image from 'next/image'
import { Navbar } from '../shared/components/navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <button id="cs" className='botao' >Configuração do Sos</button>
      <button id='md' className='botao'>Meu Diario</button>
      <button id='r' className='botao'>Robo</button>
      <button id='d' className='botao'>Dicas</button>
    </main>
  )
}

