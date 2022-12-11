import React from 'react';
import { useGetAllCommentsQuery, useGetAllPostsQuery } from '../features/API/apiSlice';

const Data = () => {
    // const selector = useSelector(state => state.count.value /* this is from store.js */);
    
    const posts = useGetAllPostsQuery();
    const comments = useGetAllCommentsQuery();

    return (
        <>
            <h1>Posts: {posts.data ? posts.data.length : 0}</h1>
            <h1>Comments: {comments.data ? comments.data.length : 0}</h1>
        </>
    );
};

export default Data;