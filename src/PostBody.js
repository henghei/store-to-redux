import React from 'react';
import './post-body.css'
import {connect} from 'react-redux'
class PostBody extends React.Component{
	render(){
		let thisComments=this.props.comments.filter(item=>
			item.post==this.props.postId)
		return(
			<div className='post-body'>
				<div className='comment-no'>
					{thisComments.length}评论
				</div>
			</div>	
			)
	}
}
const mapStateToProps=(state)=>({
	comments:state.comment
})
export default connect(mapStateToProps)(PostBody);
