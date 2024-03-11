import React from 'react';
import {useSelector} from "react-redux";

const Maps = () => {
    // @ts-ignore
    const posts = useSelector(state => state.posts.posts)
    console.log(posts);
    return (
        <div>
            Maps
        </div>
    );
};

export default Maps;