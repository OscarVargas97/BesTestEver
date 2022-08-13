const ArrayUriToQueryArray = (uri, totalpages) => {
  return Array(totalpages).fill('').map((item, i) => {
    return (
      {
        query: uri + '?page=' + (i + 1)
      }
    )
  })
}

// Create Array with querry from uri array and total pages
const ArrayQuery = async (uriarray, arraytotalpages) => {
  return uriarray.map((item, i) => ArrayUriToQueryArray(item, arraytotalpages[i]))
}

// Obtain Pages and obtain pages from array
const CreateObjQuery = (uri, arraytype) => {
  return arraytype.map(item => {
    return {
      type: item,
      query: String(uri + item)
    }
  })
}

module.exports = {
  ArrayUriToQueryArray,
  ArrayQuery,
  CreateObjQuery

}
