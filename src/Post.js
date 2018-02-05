import React from 'react';
import PostBody from './PostBody';
import CommentBody from './CommentBody';
import './post.css'
class Post extends React.Component{
	render(){
		return(
			<div className='post'>
				<div className='upper'>
					<PostBody />
				</div>
				<div className='bottom'>
				<CommentBody />
				</div>
			</div>
			)
	}
}
export default Post;
