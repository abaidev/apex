import {Form, Button, Col, Row, Alert} from "react-bootstrap";
import {useState} from 'react';

const validateInput = (validationItem, len)=>{
    if (validationItem.value.length < len) return null;
    const regexp = `([0-9]){${len},${len}}`;
    let result = validationItem.value.match(regexp);
    return result;
}

const ProfileForm = ({api}) => {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({formPhone: '', formTin: ''});
    const [isError, setIsError] = useState(false);
    const [statusCode, setStatusCode] = useState(350);

    const profile_create = async (data = {}) => {
        await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data),
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        let formPhone = validateInput(form["formPhone"], 10);
        let formTin = validateInput(form["formTin"], 14);

        if (form.checkValidity() === false || formPhone === null || formTin === null) {
            event.preventDefault();
            event.stopPropagation();

            setIsError(true);
            setErrors({
                formPhone: "Необходимо заполнить в формате 0555111333",
                formTin: "Необхомо заполнить в формате 12345678901234"
            });
        }

        profile_create({
            fullname: form["formName"].value,
            phone_number: form["formPhone"].value,
            address: form["formAddress"].value,
            tin: form["formTin"].value,
        });

        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm="1">Ф.И.О.:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Ваше полное имя" required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formAddress">
                    <Form.Label column sm="1">Адрес:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Ваш адрес" required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formTin">
                    <Form.Label column sm="1">ИНН:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Ваш персональный номер" required/>
                        {isError ?
                            <Form.Text className="text-muted dangerous">
                                {errors.formTin}
                            </Form.Text>
                            : null
                        }
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPhone">
                    <Form.Label column sm="1">Телефон:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Введите номер Телефона (0 555 111 333)" required/>
                        {isError ?
                            <Form.Text className="text-muted dangerous">
                                {errors.formPhone}
                            </Form.Text>
                            : null
                        }
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm="1">&nbsp;</Form.Label>
                    <Col sm="10">
                        <Button variant="primary" type="submit">
                            Зарегистрировать
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}


export default ProfileForm;