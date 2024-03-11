import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/features/posts/postsService";

const News = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    dispatch(getPosts())
    return (
        <div>
            News
        </div>
    );
};

export default News;