(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(72)},34:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){e.exports=n.p+"static/media/maisema_EevaHelle_IMG_9089.3be67a88.jpg"},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(26),i=n.n(s),l=n(27),o=n(3),c=n(4),u=n(6),m=n(5),d=n(9),p=n(7),h=(n(34),n(12)),v=n.n(h),f=n(1),E=(n(48),n(49),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="Tag";return this.props.selected&&(e+=" Tag-selected"),r.a.createElement("div",{className:e,onClick:this.props.onClick},r.a.createElement("span",{className:"Tag--text"},this.props.text))}}]),t}(a.Component)),g={Tutustu:"#f0e105",Perehdy:"#f0a01e",Syvenny:"#f04150"},b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={expanded:!1},n.toggleExpanded=n.toggleExpanded.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggleExpanded",value:function(e){e.preventDefault(),this.setState({expanded:!this.state.expanded})}},{key:"renderTags",value:function(e){return e.map(function(e){return r.a.createElement(E,{key:e,text:e})})}},{key:"render",value:function(){var e=this.props.event,t=this.state.expanded?e.description:e.description.slice(0,150)+"...";return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"Event-color",style:{backgroundColor:g[e.level]}}),r.a.createElement("div",{className:"Event-contents"},r.a.createElement("h2",{className:"Event-title"},e.name," "),r.a.createElement("p",{className:"Event-host"},e.host),r.a.createElement("p",{className:"Event-time"},"Kello: ",e.time),r.a.createElement("p",{className:"Event-description"},t,r.a.createElement("br",null),r.a.createElement("span",{className:"Event-expand",onClick:this.toggleExpanded},this.state.expanded?"N\xe4yt\xe4 v\xe4hemm\xe4n":"Lis\xe4\xe4")),r.a.createElement("div",{className:"Event-tags"},this.renderTags(e.tags))))}}]),t}(a.Component),j=(n(50),{TIMES:{morning:"11:00-12:30",afternoon_long:"14:15-16:45",afternoon_short:"14:15-15:45",afternoon_keynote:"16:00-16:45"},LEVEL_MAPPING:{Tutustu:1,Perehdy:2,Syvenny:3},filter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e.filter(function(e){if(t.length>0&&0===t.filter(function(t){return e.level===t}).length)return!1;if(n.length>0&&0===n.filter(function(t){return-1!==e.tags.indexOf(t)}).length)return!1;if(a.length>0&&-1===(e.name+"|"+e.description+"|"+e.host).toLowerCase().indexOf(a.toLowerCase()))return!1;return!0})},getEventsForTime:function(e,t){return e.filter(function(e){return e.time===t})},getEventsForTimes:function(e,t){return e.filter(function(e){return-1!==t.indexOf(e.time)})},getTags:function(e){var t=[];return e.forEach(function(e){e.tags.forEach(function(e){-1===t.indexOf(e)&&t.push(e)})}),t},getLevels:function(e){var t=[];return e.forEach(function(e){-1===t.indexOf(e.level)&&t.push(e.level)}),v.a.sortBy(t,function(e){return j.LEVEL_MAPPING[e]||0})}}),y=j,C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderEvents",value:function(){var e=this.props,t=e.events,n=e.times,a=y.getEventsForTimes(t,n);return 0===a.length?r.a.createElement("div",{className:"EventColumn--empty"},r.a.createElement("p",{className:"EventColumn--empty__text"},"0 hakukriteerej\xe4 vastaavaa ty\xf6pajaa")):a.map(function(e){return r.a.createElement(b,{key:e.name+e.host,event:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"EventColumn"},r.a.createElement("h2",{className:"EventColumn--title"},this.props.title," ",r.a.createElement("br",null),r.a.createElement("span",null,this.props.times.join(" & "))),r.a.createElement("div",{className:"EventColumn--events"},this.renderEvents()))}}]),t}(a.Component),O=(n(51),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderButtons",value:function(){var e=this;return this.props.options.map(function(t){return r.a.createElement(E,{key:t,text:t,selected:-1!==e.props.selected.indexOf(t),onClick:function(){return e.props.onChange(t)}})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Filters"},r.a.createElement("h4",{className:"Filters--title"},this.props.title),this.renderButtons())}}]),t}(a.Component)),k=(n(52),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HeroImage"},r.a.createElement("img",{className:"HeroImage--img",src:n(53)}),r.a.createElement("h1",{className:"HeroImage--title"},"Ty\xf6pajaty\xf6kalu"),r.a.createElement("div",{className:"App--photographer"},r.a.createElement("p",{className:"App--photographer__text"},"Kuva: Eeva Helle")))}}]),t}(a.Component)),x=n(28),N=n.n(x),T={getEvents:function(){return N.a.get("https://www.partio.fi/wp-json/tyopajat/data.json").then(function(e){return e.data})}},w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={selectedLevels:[],selectedTags:[],filtered:[],events:[],searchText:"",loading:!0,error:!1},n.handleLevelsChange=n.handleSelectChange("selectedLevels").bind(Object(d.a)(n)),n.handleTagsChange=n.handleSelectChange("selectedTags").bind(Object(d.a)(n)),n.handleSearchChange=n.handleSearchChange.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.getEvents().then(function(t){e.setState({events:v.a.sortBy(t,"name"),loading:!1})}).catch(function(t){e.setState({error:!0,loading:!1})})}},{key:"handleSearchChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"handleSelectChange",value:function(e){var t=this;return function(n){var a=t.state[e].slice();-1===a.indexOf(n)?a.push(n):a=a.filter(function(e){return e!==n}),t.setState(Object(l.a)({},e,a))}}},{key:"renderEvents",value:function(e){return e.map(function(e){return r.a.createElement(b,{event:e})})}},{key:"render",value:function(){var e=this.state,t=e.selectedLevels,n=e.selectedTags,a=e.searchText,s=e.events,i=y.getLevels(s),l=y.getTags(s),o=y.filter(s,t,n,a);return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(f.Container,null,r.a.createElement(f.Row,null,r.a.createElement(f.Col,{sm:12},r.a.createElement("div",{className:"App--description"},r.a.createElement("p",{className:"App--description__text"},'"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."')))),this.state.loading?r.a.createElement(f.Row,null,r.a.createElement(f.Col,null,r.a.createElement("p",{className:"App--loading"},"Ladataan ty\xf6pajoja..."))):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.Row,null,r.a.createElement(f.Col,{sm:12},r.a.createElement(O,{title:"Valitse kategoriat: ",options:l.sort(),selected:this.state.selectedTags,onChange:this.handleTagsChange})),r.a.createElement(f.Col,{sm:12,md:6},r.a.createElement(O,{title:"Valitse tasot: ",options:i,selected:this.state.selectedLevels,onChange:this.handleLevelsChange})),r.a.createElement(f.Col,{sm:12,md:6},r.a.createElement("h4",null,"Vapaa haku: "),r.a.createElement("input",{className:"App--searchbox",value:this.state.searchText,onChange:this.handleSearchChange,placeholder:"Hae ty\xf6pajan nimell\xe4, vet\xe4j\xe4ll\xe4 tai kuvauksella"})),r.a.createElement(f.Col,{sm:12},r.a.createElement("h4",null,"N\xe4ytet\xe4\xe4n ",o.length," tapahtumaa"))),r.a.createElement(f.Row,null,r.a.createElement(f.Col,{sm:12,md:4},r.a.createElement(C,{title:"Aamup\xe4iv\xe4",times:[y.TIMES.morning],events:o})),r.a.createElement(f.Col,{sm:12,md:4},r.a.createElement(C,{title:"Iltap\xe4iv\xe4",times:[y.TIMES.afternoon_short,y.TIMES.afternoon_long],events:o})),r.a.createElement(f.Col,{sm:12,md:4},r.a.createElement(C,{title:"Keynote",times:[y.TIMES.afternoon_keynote],events:o}))))),r.a.createElement("div",{style:{height:"100px"}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(71);i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.4bc229f1.chunk.js.map