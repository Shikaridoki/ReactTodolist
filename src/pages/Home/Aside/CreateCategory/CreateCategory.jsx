import React, {useState} from 'react';
import {dataColors} from "../../../../Utils/dataColors";
import CreatePopup from "./CreatePopup/CreatePopup";

const CreateCategory = () => {



    const [active,setActive] = useState(false)


    return (


        <div style={{position: 'relative'}}>
            <div className="aside__create" onClick={() => setActive(prev => !prev)}>
                    <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span>
                <span className='aside__text'>Добавить папку</span>
            </div>


            <CreatePopup active={active} setActive={setActive}/>
        </div>

    );
};

export default CreateCategory;