/**
 * Author: JCloudYu
 * Create Date: 2020/09/08
**/
import {UniqueId} from "jsboost/unique-id.esm.js";


export default function(path) {
	const unique_id = UniqueId.from().toString(32);
	const module_id = `m_${unique_id}`;
	return `
<div id="${module_id}">
	<label>留言板</label>
	<div id="${module_id}_msg_zone"></div>
	<!--
	<div class='record'>
		<div class='info'><span class='name'>Anonymous</span><span> - </span><span class='time'>2020/09/08 02:46</span></div>
		<div class='content'>
			<div class='title'>我不想理你！</div>
			<div class='message'>我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你我不想理你！</div>
		</div>
	</div>
	-->
	<div id="${module_id}_msg_info">
		<div class='record input-region'>
			<div><label>稱呼：</label> <input id="${module_id}_name" type="text" /></div>
			<div><label>標題：</label> <input id="${module_id}_title" type="text" /></div>
			<div><label>內容：</label> <textarea id="${module_id}_message"></textarea></div>
			<div><div></div><button id="${module_id}_btn_leave_msg">留言</button></div>
		</div>
	</div>
</div>
<style>
	#${module_id} { display:block; width:800px; margin:0 auto; }
		#${module_id} > label { font-size:1.5em; font-weight:bolder; }
		#${module_id} .record { position:relative; margin-bottom:10px; border:1px solid #0D7496; border-radius:10px; padding:22px 12px 10px; overflow:hidden; }
		#${module_id} .record.input-region { margin-top:10px; padding:10px 12px; }
		#${module_id} .record:last-child { margin-bottom:0; }
			#${module_id} .record .info { min-width:200px; text-align:right; font-size:0.9em; position:absolute; top:0; right:0; padding:2px 10px; background:#0D7496; color:#FFF; border-bottom-left-radius:10px; }
			#${module_id} .record .content {}
				#${module_id} .record .content .title { font-size:1.2em; font-weight:bolder; }
			
		#${module_id} .record.input-region { }
			#${module_id} .record.input-region > div { display:grid; grid-template-columns:4em 1fr; margin-bottom:5px; }
			#${module_id} .record.input-region > div:last-child { margin-bottom:0; justify-content:flex-end; }
				#${module_id} .record.input-region label { font-weight:bolder;}
				#${module_id} .record.input-region input { width:400px; }
				#${module_id} .record.input-region textarea { width:100%; min-height:150px; border-radius:5px; }
				#${module_id} .record.input-region button { cursor:pointer; border:none; outline:none; border-radius:5px; overflow:hidden; background:#0D7496; color:#FFF; font-size:1.2em; font-weight:bolder; padding:5px 10px; }
</style>
<script type="application/javascript">(()=>{
	"use strict";
	
	const _path = ${JSON.stringify(path)};
	const msg_zone = document.querySelector('#${module_id}_msg_zone');
	const button = document.querySelector('#${module_id}_btn_leave_msg');
	const inputs = \{
		name: document.querySelector('#${module_id}_name'),
		title: document.querySelector('#${module_id}_title'),
		message: document.querySelector('#${module_id}_message')
	};
	
	button.addEventListener('click', ()=>{
		const name		= inputs.name.value.trim();
		const title		= inputs.title.value.trim();
		const message	= inputs.message.value.trim();
		
		const errors = [];
		if ( name === "" ) errors.push("請輸入稱呼");
		if ( title === "" ) errors.push("請輸入標題");
		if ( message === "" ) errors.push("請輸入內容");
		if ( errors.length > 0 ) {
			alert(errors.join("\\n"));
			return;
		}
		LeaveMsg(_path, name, title, message).then(()=>window.location.reload()).catch((e)=>alert(e.message));
	});
	
	
	
	
	FetchMsgList(_path).then((result)=>{
		const {records} = result;
		msg_zone.innerHTML = '';
		for(const record of records) {
			const item = document.createElement('div');
			item.classList.add('record');
			
			const info = item.appendChild(document.createElement('div'));
			info.classList.add('info');
			
			const content = item.appendChild(document.createElement('div'));
			content.classList.add('content');
			
			const name = info.appendChild(document.createElement('span'));
			name.classList.add('name');
			
			const divider = info.appendChild(document.createElement('span'));
			divider.textContent = ' - ';
			
			const time = info.appendChild(document.createElement('span'));
			time.classList.add('time');
			
			const title = content.appendChild(document.createElement('div'));
			title.classList.add('title');
			
			const message = content.appendChild(document.createElement('div'));
			message.classList.add('message');
			
			
			const msg_time = new Date(record.create_time * 1000);
				console.log(records);
			name.textContent = record.nick_name;
			time.textContent = \`\${msg_time.getFullYear()}/\${Padding(msg_time.getMonth()+1)}/\${msg_time.getDate()} \${Padding(msg_time.getHours())}:\${Padding(msg_time.getMinutes())}\`
			title.textContent = record.title||'';
			message.textContent = record.message;
			
			msg_zone.appendChild(item);
		}
	})
	.catch((e)=>{alert(e.message)});
	
	
	
	
	function Padding(str, length=2) {
		str = ''+str;
		const count = length - str.length;
		return '0'.repeat(count<0?0:count) + str;
	}
	function FetchMsgList(path) {
		const param = new URLSearchParams();
		param.set('_e', path);
		return fetch('/api/board/?' + param.toString(), {method:'GET', mode:'no-cors', credentials:"same-origin"}).then(async(res)=>{
			const result = await res.json();
			return ( !res.ok )?Promise.reject(result) : result;
		});
	}
	function LeaveMsg(path, name, title, message) {
		return fetch("./api/board/", {
			method:'POST', cors:'no-cors', credentials:"same-origin",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify({
				endpoint: path,
				name, title, message
			})
		}).then(async(res)=>{
			const result = await res.json();
			return ( !res.ok )?Promise.reject(result) : result;
		});
	}
})()</script>
`;
}
