import React from 'react';

import PostListItem from '../post-list-item/'

import './post-list.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        if ( typeof item === 'object' ){ 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <PostListItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                    />
                </li>
            )
        }

        return console.error('С сервера были переданы неправильные данные')
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList