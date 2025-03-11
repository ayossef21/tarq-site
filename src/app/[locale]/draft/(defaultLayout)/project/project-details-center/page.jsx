import BreadCumb from '@/app/draft/Components/Common/BreadCumb';
import Cta1 from '@/app/draft/Components/Cta/Cta1';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import ProjectDetailsCenter1 from '@/app/draft/Components/ProjectDetails/ProjectDetailsCenter1';
import Service7 from '@/app/draft/Components/Services/Service7';
import React from 'react';

const page = () => {
    return (
        <div>
             <BreadCumb Title="Project Detail Center"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ProjectDetailsCenter1></ProjectDetailsCenter1>
            <Service7></Service7>
            <Cta1></Cta1>
        </div>
    );
};

export default page;