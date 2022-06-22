import React, { useEffect, useState } from "react";
import "./ContactPage.css";
import axios from "axios";
function ContactPage() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");
  const [error,setError]=useState({nameError:"",emailError:"",subjectError:"",messageError:""});
  const [pending,setPending]=useState(false);
  const [success,setSuccess]=useState("");

  useEffect(()=>{
    setSuccess("")
  },[name,message,email,subject])

  const validate=()=>{
    let err=false;
    if(name.trim().length===0){
        error.nameError="PLease enter the name";
        err=true;
    }
    if(email.trim().length===0){
      error.emailError="Please enter email address";
      err=true;
    }
    if(subject.trim().length===0){
      error.subjectError="Please enter subject";
      err=true;
    }
    if(message.trim().length===0){
      error.messageError="Please enter message";
      err=true;
    }

    if(err===true){
      setError({...error},error);
      return false;
    }else {
      return true;
    }

  }

  const sendMail=(data)=>{

    axios({
      method: "POST", 
      url:"https://amisha-sahu-backend.herokuapp.com/send", 
      data:  data
    }).then((response)=>{
      if (response.data.status === 'success'){
          console.log("Message Sent."); 
          setSuccess("Your message has been sent. Thank you!")
          setPending(false)
      }else if(response.data.status === 'fail'){
          console.log("Message failed to send.")
          setPending(false)
      }
    })
  }
  const resetForm=()=>{
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setError({...error},{nameError:"",emailError:"",subjectError:"",messageError:""})
  }
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(validate()===true){
     resetForm();
     const data={name:name,email:email,subject:subject,message:message}
     sendMail(data);
     setPending(true);
   }else {
     console.log("validation unsuccessful")
   }
  }  

  const onChangeName=(e)=>{
    setName(e.target.value);
    error.nameError="";
    setError({...error},error)
  }

  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
    error.emailError="";
    setError({...error},error)
  }
  const onChangeSubject=(e)=>{
    setSubject(e.target.value)
    error.subjectError="";
    setError({...error},error)
  }
  const onChangeMessage=(e)=>{
    setMessage(e.target.value)
    error.messageError="";
    setError({...error},error)
  }

return (
    <div>
      <div  class="contact">
          <div class="row" data-aos="fade-in">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="fa fa-map-marker"></i>
                  <h4>Location:</h4>
                  <p>Hyderbad, Telangana</p>
                </div>
                <div class="email">
                  <i class="fa fa-envelope-o "></i>
                  <h4>Email:</h4>
                  <p>amisha.sahu123@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="fa fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 7978612221</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.778690955063!2d78.37595280333899!3d17.43110124377707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1655641412665!5m2!1sen!2sin"
                  frameborder="0"
                  title="From"
                  style={{ border: "0", width: "100%", height: "290px" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                onSubmit={handleSubmit}
                class="php-email-form"
              >
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      value={name}
                      onChange={onChangeName}
                      placeholder="Your Name"
                    />
                    {error.nameError&& error.nameError!==""?
                    <div class="required"><span>{error.nameError}</span></div>
                    :null
                    }
                  </div>
                  <div class="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChangeEmail}
                      placeholder="Your Email"
                    />
                    {error.emailError && error.emailError!==""&&
                    <><div class="required"><span>{error.emailError}</span></div></>
                    }
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={onChangeSubject}
                    placeholder="Subject"
                  />
                  {error.subjectError && error.subjectError!==""&&
                    <><div class="required"><span>{error.subjectError}</span></div></>
                    }
                </div>
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="10"
                    value={message}
                    onChange={onChangeMessage}
                    placeholder="Message"
                  ></textarea>
                    {error.messageError && error.messageError!==""&&
                    <><div class="required"><span>{error.messageError}</span></div></>
                    }
                </div>
                <div class="my-3">
                  <div class={success!==""?"sent-message":""}>
                    <span>{success}</span>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" disabled={pending}>{pending?"Loading":"Send Message"}</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContactPage;
