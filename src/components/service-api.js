/**
 * Created by dingll on 2017/6/26.
 */
import ajax from '../../ajax/ajax-api'

/**
 * SIM卡信息查询
 * @param param
 * @returns {*|AxiosPromise}
 */
const querySimcardInfoByCondition = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResSimCardQueryCSV_querySimcardInfoByCondition&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * SIM卡入库撤销查询
 * @param {Object} param
 */
const querySimcardSeg = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResSimCardQueryCSV_querySimcardSeg&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * SIM卡入库撤销
 * @param {Object} param
 */
const deleteSimCard = function(param) {
	let url = 'service?csfAction=resource_IResSimCardOperateCSV_deleteSimCard'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * SIM卡信息修改
 * @param {Object} param
 */
const modifySimCard = function(param) {
	let url = 'service?csfAction=resource_IResSimCardOperateCSV_modifySimCard'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询资源状态
 * @param {Object} param
 */
const queryResStateByCond = function(param) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryResStateByCond'
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * 查询归属仓库
 * @param {Object} param
 */
const queryResStoreInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryResStoreInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询归属县区
 * @param {Object} param
 */
const getCountryInfos = function(param) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_getCountryInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询归属组织
 * @param {Object} param
 */
const queryResSecOrganizeInfos = function(param) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryResSecOrganizeInfos'
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * 查询归属员工
 * @param {Object} param
 */
const querySecOperaterInfos = function(param) {
	let url = 'service?csfAction=sec_ISecOperatorCSV_querySecOperaterInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询资源的下拉菜单
 * @param {Object} param
 */
const queryResStaticDataById = function(param) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryResStaticDataById'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询下拉菜单
 * @param 参数   {"input":{"codeType":"具体的值"}} 
 */
const querybsStaticData = function(param) {
	let url = 'http://10.21.20.165:8888/crmweb/service?action=bsStaticData'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * SIM卡入库
 * @param {Object} param
 */
const importSimCard = function(param) {
	let url = 'service?csfAction=resource_IResSimCardOperateCSV_importSimCard'
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * SIM卡下发
 * @param {Object} param
 */
const assignSimCard = function(param) {
	let url = 'service?csfAction=resource_IResSimCardOperateCSV_assignSimCard'
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * 查询白卡信息
 * @param {Object} param
 */
const querySnCardInfo = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResSnCardQueryCSV_querySnCardInfo&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * 白卡入库连号
 * @param {Object} param
 */
const importSnCardByCond = function(param) {
	let url = 'service?csfAction=resource_IResSnCardOperateCSV_importSnCardByCond'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 白卡KI维护 
 * @param {Object} param
 */
const importSnCardByFile = function(param) {
	let url = 'service?csfAction=resource_IResSnCardOperateCSV_importSnCardByFile'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 资源规格查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryCbResSkuInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryCbResSkuInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询资源大类
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryCbSpecInfos = function(param) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryCbSpecInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询资源价格
 * @param {Object} param
 */
const queryResPriceInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryResPriceInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 资源价格新增修改接口
 * @param {Object} param
 */
const saveResPrice = function(param) {
	let url = 'service?csfAction=resource_IResBaseOperateCSV_saveResPrice'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 删除资源价格
 * @param {Object} param
 */
const deleteResPrice = function(param) {
	let url = 'service?csfAction=resource_IResBaseOperateCSV_deleteResPrice'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询IMSI与网元关系
 * @param {Object} param
 */
const queryImsiNumsegRelInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryImsiNumsegRelInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 保存IMSI与网元关系
 * @param {Object} param
 */
const saveImsiNumsegRel = function(param) {
	let url = 'service?csfAction=resource_IResBaseOperateCSV_saveImsiNumsegRel'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 删除IMSI与网元关系
 * @param {Object} param
 */
const deleteImsiNumsegRel = function(param) {
	let url = 'service?csfAction=resource_IResBaseOperateCSV_deleteImsiNumsegRel'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 根据操作员的地市信息获取网元编号下拉菜单
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const getResHlrInfosByDistrict = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_getResHlrInfosByDistrict&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 查询号段与网元对应关系
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryNumsegHlrInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryNumsegHlrInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码池查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryNumPool = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryNumPool&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码池新增
 * @param {Object} param
 */
const addNumPool = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addNumPool'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码池修改
 * @param {Object} param
 */
const modNumPool = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modNumPool'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码池删除
 * @param {Object} param
 */
const delNumPool = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delNumPool'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码共享管理查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryNumPoolDepart = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryNumPoolDepart&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码共享管理新增
 * @param {Object} param
 */
const addNumPoolDepart = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addNumPoolDepart'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码共享管理导入
 * @param {Object} param
 */
const addNumPoolDepartByFile = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addNumPoolDepartByFile'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码共享管理修改
 * @param {Object} param
 */
const modNumPoolDepart = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modNumPoolDepart'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码共享管理删除
 * @param {Object} param
 */
const delNumPoolDepart = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delNumPoolDepart'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 根据组织查询归属号池
 * @param {Object} param
 */
const queryResNumPoolByOrgId = function(param) {
	let url = 'service?csfAction=resource_IResBaseQueryCSV_queryResNumPoolByOrgId'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码模式规则查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryModeDefInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryModeDefInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码模式规则修改
 * @param {Object} param
 */
const modResModeDefInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modResModeDefInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码模式规则新增
 * @param {Object} param
 */
const addResModeDefInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addResModeDefInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码模式规则删除
 * @param {Object} param
 */
const delResModeDefInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delResModeDefInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * SIM卡明细日志查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const querySimCardLogs = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResSimCardQueryCSV_querySimCardLogs&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号费用查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryResModePriceInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryResModePriceInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号费用新增
 * @param {Object} param
 */
const addResModePriceInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addResModePriceInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号费用修改
 * @param {Object} param
 */
const modResModePriceInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modResModePriceInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号费用删除
 * @param {Object} param
 */
const delResModePriceInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delResModePriceInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号模式查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryResModeSelPriceInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryResModeSelPriceInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/***
 * 号码选号模式添加
 * @param {Object} param
 */
const addResModeSelPriceInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addResModeSelPriceInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号模式修改
 * @param {Object} param
 */
const modResModeSelPriceInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modResModeSelPriceInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码选号模式删除
 * @param {Object} param
 */
const delResModeSelPriceInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delResModeSelPriceInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码档次维护查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryModeClassInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryModeClassInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码档次维护修改
 * @param {Object} param
 */
const modModeClassInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modModeClassInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码档次维护新增
 * @param {Object} param
 */
const addModeClassInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addModeClassInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码档次维护删除
 * @param {Object} param
 */
const delModeClassInfos = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delModeClassInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 白卡下发
 * @param {Object} param
 */
const assignSnCard = function(param) {
	let url = 'service?csfAction=resource_IResSnCardOperateCSV_assignSnCard'
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * 白卡信息查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const querySnCardSeg = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResSnCardQueryCSV_querySnCardSeg&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码自动回收查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryNumRecycleCfg = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryNumRecycleCfg&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码自动回收新增
 * @param {Object} param
 */
const addNumRecycleCfg = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_addNumRecycleCfg'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码自动回收修改
 * @param {Object} param
 */
const modNumRecycleCfg = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_modNumRecycleCfg'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码自动回收删除
 * @param {Object} param
 */
const delNumRecycleCfg = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_delNumRecycleCfg'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码入库撤销查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const commonQryNumInfos = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_commonQryNumInfos&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码入库取消，删除未用表号码数据
 * @param {Object} param
 */
const deleteNum = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_deleteNum'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 业务类型查询
 * @param {Object} param
 */
const queryResBusinessByCond = function(param) {
	let url = 'service?csfAction=resource_IResPageQueryCSV_queryResBusinessByCond'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码下发查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryModeDefForOpen = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResNumberQueryCSV_queryModeDefForOpen&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码分配/回退/回收：号码下发给下级组织
 * @param {Object} param
 */
const allocateNum = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_allocateNum'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 台账查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryStockLog = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResStockQueryCSV_queryStockLog&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 自拥有资源查询查询
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryStockInfo = function(param, currentPage, pagesize) {
	let url = 'service?csfAction=resource_IResStockQueryCSV_queryStockInfo&currentPage=' + currentPage + "&pageSize=" + pagesize
	return ajax.post({
		url: url,
		data: param
	})
}
/**
 * 交接查询 【查询交接班登记表】
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryResHandoverInfos = function(param) {
	let url = 'service?csfAction=resource_IResBusiHallQueryCSV_queryResHandoverInfos'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 交接 确认
 * @param {Object} param
 */
const resHandoverConfirm = function(param) {
	let url = 'service?csfAction=resource_IResBusiHallOperateCSV_resHandoverConfirm'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 交接查询 【查询交接班登记表】与【资源交接资源一览表】
 * @param {Object} param
 * @param {Object} currentPage
 * @param {Object} pagesize
 */
const queryResHandover = function(param) {
	let url = 'service?csfAction=resource_IResBusiHallQueryCSV_queryResHandover'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 发起交接
 * @param {Object} param
 */
const resHandover = function(param) {
	let url = 'service?csfAction=resource_IResBusiHallOperateCSV_resHandover'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码回收
 * @param {Object} param
 */
const callBackNum = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_callBackNum'
	return ajax.post({
		url: url,
		data: param
	})
}

/**
 * 号码回收回退
 * @param {Object} param
 */
const cancelNumRecycle = function(param) {
	let url = 'service?csfAction=resource_IResNumberOperateCSV_cancelNumRecycle'
	return ajax.post({
		url: url,
		data: param
	})
}

export {
	querySimcardInfoByCondition,
	querySimcardSeg,
	queryResStateByCond,
	queryResStoreInfos,
	getDistrictInfos,
	queryCbResSkuInfos,
	getCountryInfos,
	queryResSecOrganizeInfos,
	queryResStaticDataById,
	querySecOperaterInfos,
	deleteSimCard,
	importSimCard,
	querybsStaticData,
	querySimcardInfo,
	queryResPriceInfos,
	queryImsiNumsegRelInfos,
	getResHlrInfosByDistrict,
	queryCbSpecInfos,
	queryNumsegHlrInfos,
	saveResPrice,
	deleteResPrice,
	saveImsiNumsegRel,
	deleteImsiNumsegRel,
	modifySimCard,
	queryNumPool,
	addNumPool,
	modNumPool,
	delNumPool,
	importSnCardByFile,
	importSnCardByCond,
	querySnCardInfo,
	assignSimCard,
	queryNumPoolDepart,
	addNumPoolDepart,
	addNumPoolDepartByFile,
	modNumPoolDepart,
	delNumPoolDepart,
	queryResNumPoolByOrgId,
	queryModeDefInfos,
	modResModeDefInfos,
	addResModeDefInfos,
	delResModeDefInfos,
	querySimCardLogs,
	queryResModePriceInfos,
	addResModePriceInfos,
	modResModePriceInfos,
	delResModePriceInfos,
	queryResModeSelPriceInfos,
	addResModeSelPriceInfos,
	modResModeSelPriceInfos,
	delResModeSelPriceInfos,
	queryModeClassInfos,
	modModeClassInfos,
	addModeClassInfos,
	delModeClassInfos,
	assignSnCard,
	querySnCardSeg,
	queryNumRecycleCfg,
	addNumRecycleCfg,
	modNumRecycleCfg,
	delNumRecycleCfg,
	commonQryNumInfos,
	deleteNum,
	queryResBusinessByCond,
	queryModeDefForOpen,
	queryStockLog,
	queryStockInfo,
	queryResHandoverInfos,
	resHandoverConfirm,
	resHandover,
	queryResHandover,
	allocateNum,
	callBackNum,
	cancelNumRecycle
}