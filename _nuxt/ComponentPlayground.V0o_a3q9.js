import{u as m}from"./asyncData.GvnJKN8y.js";import{L as c,H as p,d as i,ac as l,r as u,M as e,l as d}from"./entry.Y7-es2RQ.js";import f from"./Ellipsis.fsz9bx6T.js";import y from"./ComponentPlaygroundData.0japZ4HN.js";import"./TabsHeader.IzmVhSZJ.js";import"./ComponentPlaygroundProps.T5_GWvhc.js";import"./ProseH4.zH0WkWde.js";import"./ProseCodeInline.oLCNDAvf.js";import"./Badge.xg4EFa8u.js";import"./MDCSlot.0w2gDxyh.js";import"./slot.-JzHpwag.js";import"./ProseP.izGllSOt.js";import"./index.cubvx8oK.js";import"./ComponentPlaygroundSlots.vue.3H_yYEwD.js";import"./ComponentPlaygroundTokens.vue.KqZZTFib.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=d(h,[["__scopeId","data-v-8134fc35"]]);export{E as default};
