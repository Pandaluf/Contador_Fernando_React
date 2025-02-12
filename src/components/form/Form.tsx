import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import './Form.css'
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import CustomModal from "../modal/modals.tsx";


function FormValidation() {
    const { Formik } = formik;

    const formRef = useRef(null);

    const [send, setSend] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = () => {
        if (!formRef.current) return;

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    setSend(true);
                    handleShow();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSend(false);
                    handleShow();
                }
            );
    };

    const schema = yup.object().shape({
        firstName: yup.string().required("Ingrese el nombre"),
        lastName: yup.string().required("Ingrese los apellidos"),
        email: yup.string().required("Ingrese un correo"),
        phone: yup.string().required("Ingrese un número de celular"),
        message: yup.string().required("Ingrese un mensaje"),
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={async (values, {resetForm}) => {
                    sendEmail();
                    console.log(values);
                    resetForm();
                }}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit} className="formCustom" ref={formRef}>

                        <Form.Group as={Col} md="4" controlId="validationFormik01" className="formCustom__group">
                            <Form.Label className="formCustom__group__label">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={!errors.firstName && touched.firstName}
                                isInvalid={!!errors.firstName && touched.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationFormik02" className="formCustom__group">
                            <Form.Label className="formCustom__group__label">Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                                isInvalid={!!errors.lastName && touched.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationFormik03" className="formCustom__group">
                            <Form.Label className="formCustom__group__label">Correo</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email && touched.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationFormik04" className="formCustom__group">
                            <Form.Label className="formCustom__group__label">Celular</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                isValid={touched.phone && !errors.phone}
                                isInvalid={!!errors.phone && touched.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationFormik05" className="formCustom__group">
                            <Form.Label className="formCustom__group__label">Mensaje</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                isValid={touched.message && !errors.message}
                                isInvalid={!!errors.message && touched.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>



                        <div className="formCustom__button">
                            <Button type="submit">ENVIAR</Button>
                        </div>
                    </Form>
                )}
            </Formik>

            <CustomModal handleClose={handleClose} show={show} send={send}/>
        </>
    );
}

export default FormValidation;