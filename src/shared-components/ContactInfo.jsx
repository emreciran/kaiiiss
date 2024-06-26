import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

// Component to display contact information based on 'contact' prop
const ContactInfo = ({ contact }) => {
  return (
    <>
      {/* Display address if available */}
      {contact?.address !== undefined ? (
        <div className="mt-10">
          <div className="flex gap-2 items-center">
            <BiHomeAlt className="text-xl" />
            <p className="text-white font-medium">Address</p>
          </div>
          <h4 className="mt-4">{contact?.address}</h4>
        </div>
      ) : (
        ""
      )}

      {/* Display email if available */}
      {contact?.email !== undefined ? (
        <div className="mt-10">
          <div className="flex gap-2 items-center">
            <HiOutlineMail className="text-xl" />
            <p className="text-white font-medium">Email</p>
          </div>
          <a
            className="mt-4 inline-block underline"
            href={`mailto:${contact?.email}`}
          >
            {contact?.email}
          </a>
        </div>
      ) : (
        ""
      )}

      {/* Display phone number if available */}
      {contact?.phone !== undefined ? (
        <div className="mt-10">
          <div className="flex gap-2 items-center">
            <AiOutlinePhone className="text-xl" />
            <p className="text-white font-medium">Phone</p>
          </div>
          <h4 className="mt-4">{contact?.phone}</h4>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ContactInfo;
