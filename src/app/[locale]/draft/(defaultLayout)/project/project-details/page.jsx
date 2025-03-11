import BreadCumb from '@/app/draft/Components/Common/BreadCumb';
import Cta1 from '@/app/draft/Components/Cta/Cta1';
import MarqueeText from '@/app/draft/Components/MarqueeText/MarqueeText';
import ProjectDetailsLeft1 from '@/app/draft/Components/ProjectDetails/ProjectDetailsLeft1';
import Service7 from '@/app/draft/Components/Services/Service7';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Project Details Left"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ProjectDetailsLeft1></ProjectDetailsLeft1>
            <Service7></Service7>
            <Cta1></Cta1>
        </div>
    );
};

export default page;