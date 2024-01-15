import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    // console.log(params);
    return (
        <div>
            <h1> This is Dynamic Page: {params.id}</h1>
            <h2> Search By:  {searchParams.catagory}</h2>
        </div>
    );
};

export default DynamicPage;