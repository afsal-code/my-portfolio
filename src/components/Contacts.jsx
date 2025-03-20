import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

//  emailjs.init('BqrcyIOV4NTe4iY1x');   

const Contacts = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_49mypxb', 'template_uf2yd5v', form.current)
  //     .then((result) => {
  //       console.log('Email sent!', result.text);
  //       alert('Message sent successfully!');
  //       form.current.reset();
  //     })
  //     .catch((error) => {
  //       console.error('Email send error:', error.text);
  //       alert('Failed to send message. Please try again.');
  //     });
  // };

  return (
    <div id="contacts" className="w-full h-screen bg-[#0f1a17] text-white p-10 flex items-center justify-center">
      <div className="w-full max-w-6xl h-[600px] bg-[#15231f] border border-[#2e4a44] rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-md">
        
        {/* Left Panel - Let's Connect */}
        <div className="bg-[#457b74] p-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-white mb-6">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'd love to hear from you!
          </p>
          <div className="flex gap-6 text-white text-2xl">
            <a href="mailto:afsalhub@gmail.com" className="hover:text-gray-300 transition"><i className="fas fa-envelope"></i></a>
            <a href="tel:+1234567890" className="hover:text-gray-300 transition"><i className="fas fa-phone"></i></a>
            <a href="https://www.linkedin.com/in/mohammed-afsal1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Panel - Message Form */}
        <div className="p-10 bg-[#0f1a17] text-white flex flex-col justify-center border-l border-[#2e4a44]">
          <h2 className="text-2xl font-bold mb-6">Write A Message</h2>
          {/* ref={form} onSubmit={sendEmail}  */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-[#1e2b26] border border-[#2e4a44] text-white focus:outline-none focus:ring-2 focus:ring-[#3e645d]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-[#1e2b26] border border-[#2e4a44] text-white focus:outline-none focus:ring-2 focus:ring-[#3e645d]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded-md bg-[#1e2b26] border border-[#2e4a44] text-white focus:outline-none focus:ring-2 focus:ring-[#3e645d]"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-[#2e4a44] hover:bg-[#3e645d] text-white py-2 rounded-full transition flex items-center justify-center gap-2"
            >
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
