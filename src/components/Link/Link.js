import React from 'react';

const Link = ({route}) => {
    return (
        <div className='px-4 pt-8 relative flex font-semibold text-lg text-sky-500'>
        <li>
            <a href={route.path}>{route.name}</a>
        </li>
        </div>
    );
};

export default Link;