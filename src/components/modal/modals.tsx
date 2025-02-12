import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import checkIcon from '/img/check_icon.png'
import errorIcon from '/img/error_icon.png'

interface CustomModalProps {
    handleClose: () => void;
    show: boolean;
    send: boolean;
}

function CustomModal({handleClose, show, send} : CustomModalProps) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Libro de reclamaciones</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    {send ? (
                        <>
                            <img src={checkIcon} alt="check" height={100} />
                            <h2 className="mt-4 text-success">Información enviada</h2>
                        </>
                    ): (
                        <>
                            <img src={errorIcon} alt="error" height={100} />
                            <h2 className="mt-4 text-danger">Error al enviar</h2>
                            <p>No se pudo enviar el reclamo. Inténtalo nuevamente.
                                Si el problema persiste, envie un correo al jesusreparador2024@gmail.com
                            </p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomModal;