import Choose2 from '@/app/draft/Components/Choose/Choose2';
import BreadCumb2 from '@/app/draft/Components/Common/BreadCumb2';
import Cta2 from '@/app/draft/Components/Cta/Cta2';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import Service6 from '@/app/draft/Components/Services/Service6';
import React from 'react';

const page = () => {
    return (
        <div className='service-page-dark'>
            <BreadCumb2 Title="Our Services"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <Service6></Service6>
            <Choose2></Choose2>
            <Cta2></Cta2>
        </div>
    );
};

export default page;