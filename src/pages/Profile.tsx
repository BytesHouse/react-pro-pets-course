import React, {useEffect} from 'react';
import NewPostArticle from "../components/NewPostArticle/NewPostArticle";
import Posts from "../components/Posts/Posts";

const Profile = () => {
    useEffect(() => {
        fetch("http://localhost:5001")
            .then(response => response.text())
            .then(data => console.log(data))
    },[])
    return (
        <div className="flex flex-col gap-[16px]">
            <NewPostArticle/>
            <Posts/>
        </div>
    );
};

export default Profile;