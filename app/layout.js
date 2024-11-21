import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
config.autoAddCss = false
import Header from './_components/Header'
import Footer from './_components/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Consult</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <script
          src="https://kit.fontawesome.com/c521e77e5d.js"
          crossOrigin="anonymous"
        ></script>
        <link 
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body> <Header />
    {children}  <Footer /></body>
    </html>
  )
} 