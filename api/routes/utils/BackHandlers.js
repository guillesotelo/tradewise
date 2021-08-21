const filterData = data => {
    let res = {}
    for(let prop in data) {
        if(data[prop]) res[prop] = data[prop]
    }
    return res
  }

  module.exports = filterData