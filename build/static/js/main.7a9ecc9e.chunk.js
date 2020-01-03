(this["webpackJsonpdive-weather-kl"]=this["webpackJsonpdive-weather-kl"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=a(1),o=a(2),u=a(4),s=a(3),m=a(5),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("a",{className:"navbar-title",href:"/"},"What's the Weather?"," ",l.a.createElement("span",{role:"img","aria-label":"cloud emoji"},"\ud83c\udf26\ufe0f")),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item nav-about"},l.a.createElement("a",{className:"nav-link",href:"/about"},"ABOUT")))))}}]),t}(n.Component),h=(a(13),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState({zipCode:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.fetchWeather()},a.fetchWeather=function(){var e=a.state.zipCode;console.log(a.state.zipCode),fetch("http://api.weatherapi.com/v1/current.json?key=5b42e62dd43941e18fd195730191712&q=".concat(e)).then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,weather:e})}),(function(e){console.log(e)}))},a.state={error:null,isLoaded:!1,weather:[],zipCode:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.weather;return t?l.a.createElement("div",null,"Error: ",t.message):a?a&&n?l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"background-container"},l.a.createElement("div",{className:"content-container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"zipcode-form"},l.a.createElement("h2",null,"Enter a US zipcode here to get current weather conditions."),l.a.createElement("input",{className:"input-field",type:"text",value:this.state.zipCode,onChange:this.handleChange}),l.a.createElement("input",{className:"submit-btn",type:"submit",value:"Submit"})),l.a.createElement("div",{className:"results-box"},l.a.createElement("h2",null,"Here's what it's doing in ",n.location.name,","," ",n.location.region,":"),l.a.createElement("p",null,l.a.createElement("strong",null,"Temperature: "),n.current.temp_f,"\xb0F",l.a.createElement("br",null),l.a.createElement("strong",null,"Humidity: "),n.current.humidity,"%",l.a.createElement("br",null),l.a.createElement("strong",null,"Feels like: "),n.current.feelslike_f,"\xb0F",l.a.createElement("br",null),l.a.createElement("strong",null,"Wind speed: "),n.current.wind_mph," mph",l.a.createElement("br",null),l.a.createElement("strong",null,"Wind gust speed: "),n.current.gust_mph," mph",l.a.createElement("br",null),l.a.createElement("strong",null,"Wind direction: "),n.current.wind_dir,l.a.createElement("br",null),l.a.createElement("strong",null,"Cloud cover: "),n.current.cloud,"%",l.a.createElement("br",null),l.a.createElement("strong",null,"Precipitation: "),n.current.precip_in," inches"))))):l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("p",null,"Please enter a valid US zipcode."),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"US Zipcode:",l.a.createElement("input",{type:"text",value:this.state.zipCode,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))):l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"background-container"},l.a.createElement("div",{className:"content-container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"zipcode-form"},l.a.createElement("h2",null,"Enter a US zipcode here to get current weather conditions."),l.a.createElement("input",{className:"input-field",type:"text",value:this.state.zipCode,onChange:this.handleChange}),l.a.createElement("input",{className:"submit-btn",type:"submit",value:"Submit"})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7a9ecc9e.chunk.js.map