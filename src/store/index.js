/* eslint-disable */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const modules = {
}

const setCookie = function(cname, cvalue, exdays) {  
    var d = new Date();  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));  
    var expires = "expires="+d.toUTCString();  
    document.cookie = cname + "=" + cvalue + "; " + expires;  
}

const getCookie = function(c_name) {
  var c_start = document.cookie.indexOf(c_name + "=");　
  if(c_start != -1) {　　　　　　　　
    c_start = c_start + c_name.length + 1;
    var c_end = document.cookie.indexOf(";", c_start);
    if(c_end == -1) c_end = document.cookie.length　

    return unescape(document.cookie.substring(c_start, c_end));
  }　
}

const store = new Vuex.Store({
  state: {
    showLogin: '', // 是否显示操作员登录界面
    pageType: '', // 需进入的中心名称
    operatorInfo: {}, // 操作员信息
    orderUserInfo: {}, // 用户信息
    customerInfo: {} // 客户信息
  },
  mutations: {
    getLoginInfo(state) { // 获取操作员登录信息
      state.showLogin = getCookie('showLogin');
      state.pageType = getCookie('pageType');
      state.operatorInfo = JSON.parse(getCookie('operatorInfo'));
    },
    getOrderUserInfo(state) { // 获取用户信息
    		if (document.cookie.indexOf('orderUserInfo') == -1) {
    			return;
    		} else {
    			state.orderUserInfo = JSON.parse(getCookie('orderUserInfo'));
    		}
    },
    getCustomerInfo(state) { // 获取客户信息
    		if (document.cookie.indexOf('customerInfo') == -1) {
    			return;
    		} else {
    			state.customerInfo = JSON.parse(getCookie('customerInfo'));
    		}
    },
    signOutUser(state) { // 退出用户
    		// 删除用户信息
    		document.cookie = setCookie("orderUserInfo", "", -1); 
    		state.orderUserInfo = {};
    		
    		// 删除客户信息
    		document.cookie = setCookie("customerInfo", "", -1); 
    		state.customerInfo = {};
    }
  },
  modules
})

export default store