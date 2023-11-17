import { useState,useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

function FormExample() {
  const data =useRef()
  const [validated, setValidated] = useState(false);
  const [newobject, setnewobject] = useState({Fname:"",phone:"",email:"",state:"",city:"",desc:""})

  const handleChange= (e)=>{
    setnewobject({...newobject,[e.target.name]:e.target.value})
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      console.log("inside if",newobject);
    }
    setValidated(true);

    if(newobject.phone.length===10){
      emailjs.sendForm('service_1530ghh', 'template_u0kfsei', data.current, 'rO4W70Ykb56rINQBX')
      .then((result) => {
          setnewobject({Fname:"",phone:"",email:"",state:"",city:"",desc:""})
          alert("Submitted Successfully")
      }, (error) => {
          console.log(error.text);
      });
    }else{
      alert("enter valid Phone number")
    }
  };


  return (
    <>
    
    <Form ref={data} className='form-groups' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label className='mt-2'>Your Name</Form.Label>
          <Form.Control
            required
            type="text"
            name='Fname'
            value={newobject.Fname}
            onChange={handleChange} 
            placeholder="Enter Your Name"
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Your Name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label className='mt-2'>Phone Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
            <Form.Control
              type="number"
              onChange={handleChange} 
              placeholder="Enter Phone Number"
              aria-describedby="inputGroupPrepend"
              required
            value={newobject.phone}
              name='phone'
              maxLength={10}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Phone Number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label className='mt-2'>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              name='email'
            value={newobject.email}
              onChange={handleChange} 
              placeholder="Enter Email"
              aria-describedby="inputGroupPrepend"
            />
          </InputGroup>
        </Form.Group>
        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className='mt-2'>State</Form.Label>
          <Form.Select aria-label="Default select example" onChange={handleChange} value={newobject.state} name='state'>
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
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='mt-2'>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" name='city' value={newobject.city} onChange={handleChange}  />
        </Form.Group>  
        </Row>
      <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
        <Form.Label className='mt-2'>Describe Requirement</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} value={newobject.desc} name='desc'/>
      </Form.Group>
      <div className="banner-btn btn-margin w-100 text-center ">
      <button  type="submit"><span></span>Submit</button>
        </div>
    </Form>
    </>
  );
}

export default FormExample;