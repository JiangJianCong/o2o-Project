import {get} from '../get'

/**
 * 获取广告
 */
export function getAdData() {
    const result = get('/api/homead')
    return result
}