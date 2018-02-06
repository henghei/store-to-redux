import React from 'react';
import './post-body.css'
import {connect} from 'react-redux'
class PostBody extends React.Component{
	render(){
		return(
			<div className='post-body'>
				<div className='comment-no'>
					{this.props.comments.length}评论
				</div>
			</div>	
			)
	}
}
const mapStateToProps=(state)=>({
	comments:state
})
export default connect(mapStateToProps)(PostBody);
