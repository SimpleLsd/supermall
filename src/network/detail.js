import { request } from "./request"

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}