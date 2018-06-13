import App from '../app'

export default [{
	path: '/',
	component: App,
	children: [{
		path: '/',
		component: resolve => require(['../view/index'], resolve)
	},
	{
		name: 'detail',
		path: '/detail',
		component: resolve => require(['../view/detail'], resolve)
	}]
}]