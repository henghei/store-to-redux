let comments=[
	{
		text:'nice git1',
		post:111
	},
	{
		text:'nice git2',
		post:222
	},
	{
		text:'nice git3',
		post:333
	}
]
export default function momentReducer(state=comments,action){
	switch(action.type){
		case 'ADD_COMMENT':
			return [...state,{text:action.text,post:action.postId}]
		default:
			return state
	}
}