import React from 'react';

const ErrorMessage = ({ message }) => <pre>{JSON.stringify(message, null, 2)}</pre>;

export default ErrorMessage;
