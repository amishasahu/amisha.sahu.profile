import React from "react";
import "./ContactPage.css";
function ContactPage() {
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
                action=""
                method="post"
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
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      required
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContactPage;
