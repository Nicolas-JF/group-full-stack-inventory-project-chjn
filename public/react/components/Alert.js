import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Alert = ({showAlert, setShowAlert, alertValues, setAlertValues}) =>{
    const handleClose = () =>{
        setShowAlert(false);
        setAlertValues({
            content: '',
            info: 'info'
        });
    }
    return(
        <Alert onClose={()=>handleClose} show={showAlert} variant={alertValues.status}>
            <Alert.Heading>
                {alertValues.status === 'success' && (
                   <> Action Success </>
                )}
                {alertValues.status === 'danger' && (
                    <> Action Fail </>
                )}
            </Alert.Heading>
            <p> {alertValues.content} </p>
        </Alert>
    )
}