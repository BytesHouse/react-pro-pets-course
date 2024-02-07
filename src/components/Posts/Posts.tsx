import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";

const Posts = () => {
    const [posts, setPosts] = useState([{id: 0}]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <ul className="bg-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] flex flex-col gap-[15px] p-[10px] rounded-[10px]">
            {posts.map(item => <PostItem item={item} key={item.id}/>)}
        </ul>
    );
};

export default Posts;