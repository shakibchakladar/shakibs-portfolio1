import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div id="contact" className="pb-20 border-b border-neutral-900">
      <h2 className="my-10 text-4xl text-center">Get In Touch</h2>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="my-4 border-b border-blue-900 border-dotted border-spacing-2">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
