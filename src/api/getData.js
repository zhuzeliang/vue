import axios from 'axios'

//获取token
let token = localStorage.getItem("token");
token = JSON.parse(token);
let productPk = token.productPk;
let loginCode = token.loginCode;
let companyPk = token.companyPk;

// 退出登录
export const quit = () => axios.get('/api/pc/layout/?loginCode='+loginCode);

//渠道列表
export const getchannelList = (pageNo, pageSize) => axios.get('/api/channel/getListPage?productPk='+productPk+'&loginCode='+loginCode+'&companyPk='+companyPk+'&pageNo='+pageNo+'&pageSize='+pageSize);

//渠道新增

export const channelAddEdit = (params) => axios.post('/api/channel/save?loginCode='+loginCode, params);

//渠道删除

export const channelDel = (pk) => axios.get('/api/channel/delete?loginCode='+loginCode+'&companyPk='+companyPk, { params: { channelPk: pk } });


//渠道详情

export const channelDeatil = (pk) => axios.get('/api/channel/form?loginCode='+loginCode+'&channelPk='+pk+'&companyPk='+companyPk);

//菜单列表

export const menuList = () => axios.post('/api/menu/getList?loginCode='+loginCode,{companyPk:companyPk,productPk:productPk,loginCode:loginCode});

//保存图标设置

export const savePicSetting = (params) => axios.post('/api/channel/savePicSetting?loginCode='+loginCode,params);

//查询机器人设置详情

export const robotGet = (pk) => axios.get('/api/robot/form?loginCode='+loginCode+'&channelPk='+pk);

//保存机器人设置详情

export const robotSave = (params) => axios.post('/api/robot/save?loginCode='+loginCode,params);

//查询基本设置详情

export const basicGet = (pk) => axios.get('/api/basic/form?loginCode='+loginCode+'&channelPk='+pk+'&companyPk='+companyPk);

//查询基本设置详情

export const basicSave = (params) => axios.post('/api/basic/save?loginCode='+loginCode,params);

//保存对话窗口设置
export const chatWindowSave = (params) => axios.post('/api/chatWindow/save?loginCode='+loginCode,params);

//获取对话窗口设置
export const chatWindowGet = (pk,type) => axios.get('/api/chatWindow/form?loginCode='+loginCode+'&channelPk='+pk+'&clientType='+type);

//保存留言设置
export const messageSave = (params) => axios.post('/api/message/save?loginCode='+loginCode,params);

//查询留言设置
export const messageGet = (pk) => axios.get('/api/message/form?loginCode='+loginCode+'&channelPk='+pk);


//查询提示设置
export const hintGet = (pk) => axios.get('/api/hint/form?loginCode='+loginCode+'&channelPk='+pk);


//保存提示设置
export const hintSave = (params) => axios.post('/api/hint/save?loginCode='+loginCode,params);


//保存提示设置
export const categorySave = (params) => axios.post('/api/message/saveCategory?loginCode='+loginCode,params);


//查询留言分类列表

export const categoryGet = (channelPk,pageNo,pageSize) => axios.get('/api/message/getCategoryPage?loginCode='+loginCode+'&channelPk='+channelPk+'&pageNo='+pageNo+'&pageSize='+pageSize);

//删除留言分类

export const categoryDel = (pk) => axios.post('/api//message/deleteCategory?loginCode='+loginCode+'&categoryPk='+pk);