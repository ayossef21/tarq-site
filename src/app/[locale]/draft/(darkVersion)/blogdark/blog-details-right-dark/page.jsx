import BlogDetailsRight1 from '@/app/draft/Components/BlogDetails/BlogDetailsRight1';
import BreadCumb2 from '@/app/draft/Components/Common/BreadCumb2';
import Cta2 from '@/app/draft/Components/Cta/Cta2';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb2 Title="Blog Details Right"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <BlogDetailsRight1></BlogDetailsRight1>
            <Cta2></Cta2>
        </div>
    );
};

export default page;