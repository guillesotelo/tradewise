//HELPER FUNCTIONS FOR THE FRONT-END

export const check = x => x ? x.target ? x.target.value ? true : false : false : false

export const handleInputs = data => {
  if(!data.name || !data.email || !data.password || !data.password2) return true
  if(data.password !== data.password2) return true
  return false
}

export const handleInputsUpdate = data => {
  if(!data) return true
  if(data.password !== data.password2) return true
  return false
}

export const filterData = data => {
  let res = {}
  for(let prop in data) {
    if(data[prop]) res[prop] = data[prop]
  }
  return res
}