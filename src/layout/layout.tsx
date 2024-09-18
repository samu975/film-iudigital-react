import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}