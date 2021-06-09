import React from 'react';

const SearchInputContainerReusable: React.FunctionComponent = () => {
    return (
        <div className="searchInputReusable">
            <form>
                <input type="text" placeholder="Search" />
                <div className="goButton">Go</div>
            </form>
        </div>
    );
};

export default SearchInputContainerReusable;
