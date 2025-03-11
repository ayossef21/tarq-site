import Blog7 from '@/app/draft/Components/Blog/Blog7';
import BlogDetailsCenter1 from '@/app/draft/Components/BlogDetails/BlogDetailsCenter1';
import BreadCumb from '@/app/draft/Components/Common/BreadCumb';
import Cta1 from '@/app/draft/Components/Cta/Cta1';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Blog Details Center"></BreadCumb>
            <MarqueeText></MarqueeText>
            <BlogDetailsCenter1></BlogDetailsCenter1>
            <Blog7></Blog7>
            <Cta1></Cta1>
        </div>
    );
};

export default page;