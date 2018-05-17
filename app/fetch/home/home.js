import {get} from '../get'

/**
 * 获取广告
 */
export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city,page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
    
}