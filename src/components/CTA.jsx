import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Você tem algum projeto em mente? <br className='sm:block hidden' />
            Vamos construí-lo juntos!!
        </p>
        <Link to='/contact' className='btn'>Contato</Link>
    </section>
  )
}

export default CTA