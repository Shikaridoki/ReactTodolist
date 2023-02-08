import React, {useContext} from 'react';
import {CustomContext} from "../../../Utils/Context";
import './homeContent.scss'
import ContentCategory from "../../../Components/ContentCategory/ContentCategory";



const HomeContent = () => {
    const {status,user} = useContext(CustomContext)
    return (
        <div className='content'>
            {
                status === 'all' ? user.categories.length === 0 ?<h2>задачи отсутсвуют</h2>:user.categories.map((item)=> <ContentCategory key={item.id} statusContent={item.categoryName}/>
                ) : <ContentCategory statusContent={status}/>
            }
        </div>
    );
};

export default HomeContent;