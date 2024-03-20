import React from 'react';

interface Props {
    children: React.ReactNode;
    name: string;
    value: string;
    setValue: (value: string) => void;
}

export const Radio = ({ children, name, value, setValue }: Props) => {
    return (
        <label>
            <input type="radio" name={name} value={value} onChange={() => setValue(value)} />
            {children}
        </label>
    );
};
