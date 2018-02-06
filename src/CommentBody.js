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
		let comment=this.commentInput.value
		store.dispatch({type:'ADD_COMMENT',comment})
		// comments.push(content)
		// this.setState({
		// 	comments
		// })
		this.commentInput.value=''
		console.log('handleClick',store.getState())
	}
	render(){
		console.log()
		let commentList=this.props.comments.slice().reverse().map((item,i)=>
			<li key={i}>{item}</li>
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
	comments:state
})
export default connect(mapStateToProps)(CommentBody);
