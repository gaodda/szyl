// 根目录下的状态
const state = {
    // 当前登登录的用户的基本信息
    currentUser: {},
    // 当前用户拥有的模块信息
    userModuleList: null,
    // 当前用户登陆的模块信息
    currentModule: null,
    // 当前用户权限
    currentUserPri: null,
    // 搜索结果存放数据 key:id  value: 点击的搜索结果对象
    searchResultMap: {},
    // 搜索字段分类 key:categoryCode value:分类信息对象  用于设置展示页组件加载
    searchCategoryMap: {},
    // 记录后台一级菜单展开状态
    adminOpenMenus: [],


    allfile: [],  //存储文件
    load:true,  //loading状态
};

export default state;
