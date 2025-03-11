import BreadCumb from '@/app/draft/Components/Common/BreadCumb';
import Cta1 from '@/app/draft/Components/Cta/Cta1';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import Team4 from '@/app/draft/Components/Team/Team4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Our Team"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Team4></Team4>
            <Cta1></Cta1>
        </div>
    );
};

export default page;