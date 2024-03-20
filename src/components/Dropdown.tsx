import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configureStore';
import { SetQtype } from '../store/qtypeSlice';

export const DropDown = () => {
    const qtypeState = useSelector((state: RootState) => state.qType);
    const dispatch = useDispatch<AppDispatch>();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (eventKey: any) => {
        setSelectedItem(eventKey);
        dispatch(SetQtype(eventKey))
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedItem ? (<>{selectedItem}</>) : (
                    <>선택하세요</>
                )}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="진로흥미탐색">진로흥미탐색</Dropdown.Item>
                <Dropdown.Item eventKey="진로개발준비도검사">진로개발준비도검사</Dropdown.Item>
                <Dropdown.Item eventKey="이공계전공적합도검사">이공계전공적합도검사</Dropdown.Item>
                <Dropdown.Item eventKey="주요능력효능감검사">주요능력효능감검사</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
