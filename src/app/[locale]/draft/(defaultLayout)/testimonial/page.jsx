import BreadCumb from '@/app/draft/Components/Common/BreadCumb';
import Cta1 from '@/app/draft/Components/Cta/Cta1';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import Testimonial5 from '@/app/draft/Components/Testimonial/Testimonial5';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Testimonial"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Testimonial5></Testimonial5>
            <Cta1></Cta1>
        </div>
    );
};

export default page;