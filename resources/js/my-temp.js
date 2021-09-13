import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const requireContext = require.context('./modules', false, /.*\.js$/);

const modules = reequireContext.keys()
	.map(file=>
			[file.replace()]
		)
	.reduce((modules, [name, module])=>{
		if(module.namespaced === undefined)
			module.namespaced = true;
		return { ...modules, [name]: module }
	}, {})

export default new Vuex.store({
	modules
});

const requireCotext = require.context("./modules", false, /.*\.js/);

const modules = requireContext.keys()
					.map(file=> [file.replace()])
					.reduce((modules, [name, module])=>{
						if(module.namespaced === undefined)
							module.namespaced = true;
						return { ...modules, [name]: module }
					}, { })

export deafult new Vuex.stroe({
	modules
})