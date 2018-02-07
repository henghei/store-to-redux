import React from 'react';
import './comment-box.css';
import store from './redux/store';
import {connect} from 'react-redux'
class CommentBody extends React.Component{
	// state={
	// 	comments:[
	// 	'hello1',
	// 	'hello2'
	// 	]
	// }
	handleClick=(e)=>{
		e.preventDefault()
		// let comments=this.state.comments.slice()
		let text=this.commentInput.value
		let {postId}=this.props
		store.dispatch({type:'ADD_COMMENT',text,postId})
		// comments.push(content)
		// this.setState({
		// 	comments
		// })
		this.commentInput.value=''
		console.log('handleClick',store.getState())
	}
	render(){
		let {postId}=this.props
		let thisComments=this.props.comments.filter(item=>
			item.post==postId)
		let commentList=thisComments.reverse().map((item,i)=>
			<li key={i}>{item.text}</li>
			)
		let commentForm=<form className='form' onSubmit={this.handleClick}>
				<input type='text' ref={value=>this.commentInput=value} />
				<button type='submit'>提交</button>
			</form>
		return(
			<div className='comment-box'>
				{commentForm}
				<ul className='comment-list'>
					{commentList}
				</ul>
			</div>	
			)
	}
}
const mapStateToProps=(state)=>({
	comments:state.comment
})
export default connect(mapStateToProps)(CommentBody);
