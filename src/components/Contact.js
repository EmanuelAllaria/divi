import React from 'react'
import '../css/Contact.css'

function Contact() {
  return (
    <section id='contact'>
        <div className='title-contact'>
            <h2>
                CONTACT
            </h2>
        </div>
        <form method='post' action=''>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="tel" className="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group">
                <span className="input-group-text">Message</span>
                <textarea className="form-control" aria-label="Message"></textarea>
            </div>

            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </form>
    </section>
  )
}

export default Contact