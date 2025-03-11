import parse from 'html-react-parser';
import React from 'react';

const SectionTitle = ({Title,SubTitle, style={}}) => {
    return (
        <div>
            {SubTitle && <span className="span"><img src="/assets/images/shared/icons/span1.png" alt="" /> {parse(SubTitle)}</span>}
            <h2 className="title tg-element-title" style={style}>{parse(Title)}</h2>
        </div>
    );
};

export default SectionTitle;