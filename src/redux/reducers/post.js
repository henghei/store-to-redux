
		let posts=[
			{
				_id:'111',
				title:'hello git 1'
			},
			{
				_id:'222',
				title:'hello git 2'
			}
		]
		
export default function postReducer(state=posts,action){
	switch(action.type){
		case 'ADD_COMMENT':
			return [...state,action.comment]
		default:
			return state
	}
}