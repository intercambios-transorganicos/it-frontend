import React from 'react';

import './MailFormStyle.scss';

const MailForm = () => {
    return (
        <form className='mailForm col-12 row p-0 justify-content-center'>
            <label className='col-9 lab mt-5 mb-1 p-0'>Tu nombre:</label>
            <input className='col-9 inp' type="text"></input>

            <label className='col-9 lab mt-5 mb-1 p-0'>Tu email:</label>
            <input className='col-9 inp' type="email"></input>

            <label className='col-9 lab mt-5 mb-1 p-0'>Mensaje:</label>
            <textarea className="col-9 inp inpMSJ"></textarea>

            <div className='col-9 my-4 p-0 d-flex justify-content-end'>
                <button type="submit" className="enviar">Enviar</button>
            </div>
        </form>
    )
}

export default MailForm