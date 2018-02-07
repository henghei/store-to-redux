import React from 'react';
import PostBody from './PostBody';
import CommentBody from './CommentBody';
import './post.css'
class Post extends React.Component{
	render(){
	let {id}=this.props.match.params
	console.log(this.props)
		
		return(
			<div className='post'>
				<div className='upper'>
					<PostBody postId={id} />
				</div>
				<div className='bottom'>
					<CommentBody postId={id} />
				</div>
			</div>
			)
	}
}
export default Post;
