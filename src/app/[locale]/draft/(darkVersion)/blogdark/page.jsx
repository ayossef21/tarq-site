import Blog6 from "@/app/draft/Components/Blog/Blog6";
import BreadCumb2 from "@/app/draft/Components/Common/BreadCumb2";
import Cta2 from "@/app/draft/Components/Cta/Cta2";
import MarqueeText from "@/app/draft/Components/MarqueeText/MarqueeText";
import React from "react";

const page = () => {
    return (
        <div>
            <BreadCumb2 Title="Blog"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <Blog6></Blog6>
            <Cta2></Cta2>
        </div>
    );
};

export default page;