import React, { useEffect, useState } from 'react';

import './MailFormStyle.scss';

const MailForm = () => {

    const [goodForm, setGoodForm] = useState(false);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [msj, setMsj] = useState('');

    useEffect(() => {
        
        if(
            nombre !== '' &&
            email !== '' &&
            msj !== ''
        ){
            setGoodForm(true);
        } else{
            setGoodForm(false);
        }

    },[nombre, email, msj]);

    return (
        <form className='mailForm col-12 row p-0 justify-content-center'>

            <h3 className='tituloForm mt-4 mb-2'>¿Querés decirnos algo?</h3>

            <label className='col-12 lab mt-5 mb-1 p-0'>Tu nombre:</label>
            <input className='col-12 inp' onChange={e => setNombre(e.target.value)} type="text"></input>

            <label className='col-12 lab mt-5 mb-1 p-0'>Tu email:</label>
            <input className='col-12 inp' onChange={e => setEmail(e.target.value)} type="email"></input>

            <label className='col-12 lab mt-5 mb-1 p-0'>Tu mensaje:</label>
            <textarea className="col-12 inp inpMSJ" onChange={e => setMsj(e.target.value)}></textarea>

            <div className='col-12 my-4 p-0 d-flex justify-content-end'>
                {
                goodForm?
                    <button type="submit" className="enviar">Enviar</button>
                :
                    <button disabled type="submit" className="enviar">Enviar</button>
                }
            </div>
        </form>
    )
}

export default MailForm;