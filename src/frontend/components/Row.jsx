import React from 'react';
import '../assets/styles/components/Row.scss';

const Row = ({ children }) => (
    <tr>
        { children }
    </tr>
);

export default Row;