import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Name"
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Your Name.
            </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Your Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Your Eamil"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Select aria-label="Default select example">
      <option>Select State</option>
      <option value="Andaman & Nicobar Islands" >Andaman & Nicobar Islands</option>
				<option value="Andhra Pradesh" >Andhra Pradesh</option>
				<option value="Arunachal Pradesh" >Arunachal Pradesh</option>
				<option value="Assam" >Assam</option>
				<option value="Bihar" >Bihar</option>
				<option value="Chandigarh" >Chandigarh</option>
				<option value="Chhattisgarh" >Chhattisgarh</option>
				<option value="Dadra & Nagar Haveli" >Dadra & Nagar Haveli</option>
				<option value="Delhi" >Delhi</option>
				<option value="Daman & Diu" >Daman & Diu</option>
				<option value="Goa" >Goa</option>
				<option value="Gujarat" >Gujarat</option>
				<option value="Haryana" >Haryana</option>
				<option value="Himachal Pradesh" >Himachal Pradesh</option>
				<option value="Jammu & Kashmir" >Jammu & Kashmir</option>
				<option value="Jharkhand" >Jharkhand</option>
				<option value="Karnataka" >Karnataka</option>
				<option value="Kerala" >Kerala</option>
				<option value="Ladakh" >Ladakh</option>
				<option value="Lakshadweep Islands" >Lakshadweep Islands</option>
				<option value="Madhya Pradesh" >Madhya Pradesh</option>
				<option value="Maharashtra" >Maharashtra</option>
				<option value="Manipur" >Manipur</option>
				<option value="Meghalaya" >Meghalaya</option>
				<option value="Mizoram" >Mizoram</option>
				<option value="Nagaland" >Nagaland</option>
				<option value="Odisha" >Odisha</option>
				<option value="Pondicherry" >Pondicherry</option>
				<option value="Punjab" >Punjab</option>
				<option value="Rajasthan" >Rajasthan</option>
				<option value="Sikkim" >Sikkim</option>
				<option value="Tamil Nadu" >Tamil Nadu</option>
				<option value="Telangana" >Telangana</option>
				<option value="Tripura" >Tripura</option>
				<option value="Uttar Pradesh" >Uttar Pradesh</option>
				<option value="Uttarakhand" >Uttarakhand</option>
				<option value="West Bengal" >West Bengal</option>
    </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    <div>
    <iframe title='Mhe-movers' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8221972719747!2d77.47848236954536!3d13.017272705848077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c8526a0017b%3A0x1986975b14433dc9!2s2F8H%2BRJC%2C%20Thigalarapalya%20Main%20Rd%2C%20Peenya%202nd%20Stage%2C%20Vaddarapalya%2C%20Ragavendra%20Industrial%20Estate%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1700226222906!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    </>
  );
}

export default FormExample;