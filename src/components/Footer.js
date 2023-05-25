import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="footer text-center p-3">
        &copy; {new Date().getFullYear()} Typing Timing. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer