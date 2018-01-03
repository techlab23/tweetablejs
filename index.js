// Function to validate Australian Company Number
export const validateACN = acn => {
  if (acn.length != 9 || isNaN(parseInt(acn))) return false
  const w = [8,7,6,5,4,3,2,1].reduce((acc,itm,idx) => acc + (parseInt(acn.charAt(idx)) * itm),0)
  const cd = (10 - (w % 10)) == 10 ? 0 : 10 - (w % 10)
  return cd === parseInt(acn[8])
}

// Function to validate Australian Business Number
export const validateABN = abn => {
  if (abn.length != 11 || isNaN(parseInt(abn))) return false
  const w = [10,1,3,5,7,9,11,13,15,17,19].reduce((acc,itm,idx) => acc + (idx===0 ? (parseInt(abn.charAt(idx))-1)*itm : parseInt(abn.charAt(idx))*itm),0)
  return (w % 89) === 0
}