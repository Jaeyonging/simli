import React from 'react'

interface Props {
    children: React.ReactNode;
}

export const Radio = ({ children }: Props) => {
    return (
        <label>
            <input type="radio" name="radio" />
            {children}
        </label>
    );
};
