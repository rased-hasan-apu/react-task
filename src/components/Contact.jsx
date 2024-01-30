import React from 'react';

const Contact = ({contact}) => {
   
    return (
        <>
        <li>
            <p>{contact?.phone}</p>
        </li>
        </>
    );
};

export default Contact;