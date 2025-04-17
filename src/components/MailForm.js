import React, { useEffect, useState, useRef } from 'react';
import {useFormik} from "formik"
import * as Yup from "yup"
import './MailFormStyle.scss';
import { send } from 'emailjs-com';
const MailForm = () => {
    var iform = useRef();
    var[success,setSuccess] = useState(false);
    var[error,setError] = useState(false);
    const schema = Yup.object({
        from_name: Yup.string().required("Required"),
        from_email: Yup.string().required("Required").email(),
        message: Yup.string().required("Required")
    });

    const{
        handleChange,
        handleSubmit,
        touched,
        values,
        errors
    } = useFormik({
        initialValues: {
            to_name:'Intercambios Transorganicos',
            from_name:'',
            from_email:'',
            message:''
        },
        validationSchema: schema,
        onSubmit:(values)=>{
            console.log("submit");
            //setError(true);
            send(
                'service_0aoyxrp',
                'template_mw3vi4h',
                values,
                '-4X4w2puMzWmxQ0P3'
            ).then((response)=>{
                console.log(response);
                setError(false);
                setSuccess(true);
                iform.current.reset();
            }).catch((err)=>{
                console.log(err);
                setSuccess(false);
                setError(true);
                iform.current.reset();
            })
        }
    })

    return (
        <form 
        ref={elem=>{iform.current = elem}}
        onSubmit={handleSubmit}
        className='mailForm col-12 row p-0 justify-content-center'
        >
           
            <div style={{
                display:success?"flex":"none"
            }}
            className="myAlert alert alert-success" 
            role="alert">
                Mensaje Enviado! Pronto nos pondremos en contacto.
            </div>

            <div style={{
                display:error?"flex":"none"
            }}
            className="myAlert alert alert-danger" 
            role="alert">
                Error! Intentelo mas tarde.
            </div>

            <h3 className='tituloForm mt-4 mb-2'>¿Querés decirnos algo?</h3>

            <label className='col-12 lab mt-5 mb-1 p-0'>Tu nombre:</label>
            <input className='col-12 inp' 
            style={{
                borderColor:touched&&errors.from_name?"red":"green"
            }}
            name="from_name"
            id="from_name"
            onChange={handleChange} 
            value={values.from_name}
            type="text"></input>

            <label className='col-12 lab mt-5 mb-1 p-0'>Tu email:</label>
            <input className='col-12 inp' 
            style={{
                borderColor:touched&&errors.from_email?"red":"green"
            }}
            name="from_email"
            id="from_email"
            onChange={handleChange} 
            value={values.from_email}
            type="email"></input>

            <label className='col-12 lab mt-5 mb-1 p-0'>Tu mensaje:</label>
            <textarea 
            className="col-12 inp inpMSJ" 
            style={{
                borderColor:touched&&errors.message?"red":"green"
            }}
            name="message"
            id="message"
            onChange={handleChange} 
            value={values.message}
            ></textarea>

            <div className='col-12 my-4 p-0 d-flex justify-content-end'>
            <button type="submit" className="enviar">Enviar</button>
            </div>
        </form>
    )
}

export default MailForm;