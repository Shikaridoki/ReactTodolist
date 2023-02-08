import React from 'react';

import ContentCategoryTitle from "./ContentCategoryTitle/ContentCategoryTitle";
import ContentMenu from "./ContentMenu/ContentMenu";
import ContentAdd from "./ContentAdd/ContentAdd";

const ContentCategory = ({statusContent}) => {









    return (
        <>
           <ContentCategoryTitle statusContent={statusContent}/>


            <ContentMenu statusContent={statusContent}/>

            <ContentAdd statusContent={statusContent}/>




















        </>
    );
};

export default ContentCategory;