import React from 'react'

interface Props {
    children: React.ReactNode;
    name: string;
    value: string;
}

export const Radio = ({ children, name, value }: Props) => {
    return (
        <label>
            <input type="radio" name={name} value={value} />
            {children}
        </label>
    );
};
