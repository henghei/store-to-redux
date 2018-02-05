import React from 'react';
import './comment-box.css'
class CommentBody extends React.Component{
	state={
		comments:[
		'hello1',
		'hello2'
		]
	}
	handleClick=(e)=>{
		e.preventDefault()
		let comments=this.state.comments.slice()
		let content=this.commentInput.value
		comments.push(content)
		this.setState({
			comments
		})
		this.commentInput.value=''
	}
	render(){
		let commentList=this.state.comments.slice().reverse().map((item,i)=>
			<li key={i} >{item}</li>
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
export default CommentBody;
