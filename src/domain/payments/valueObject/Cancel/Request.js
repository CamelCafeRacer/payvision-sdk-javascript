const pv_CancelRequestBody = require('../Cancel/RequestBody')
const pv_RequestHeader = require('../Request/Header')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_Request extends ValueObject {
  constructor({
    body,
    header,
  } = {},
  isResponse) {
    super()
    this.body = body instanceof pv_CancelRequestBody ? body : new pv_CancelRequestBody(body, isResponse)
    this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse)
  }
  
  getBody() {
    return this.body
  }
  
  getHeader() {
    return this.header
  }
  

}

module.exports = pv_Request
