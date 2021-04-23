import '../styles/globals.css'
import Nav from '../Components/Nav/Nav'

function MyApp({ Component, pageProps }) {
  return (
  		<>
	  		<Nav />
	  		<Component {...pageProps} />
  		</>
  	)
}

export default MyApp
