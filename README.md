# Tweetable JS

### validateACN

Validate the given Australian Company Number (ACN)

```js
const validateACN = acn => {
  if (acn.length != 9 || isNaN(parseInt(acn))) return false
  const w = [8,7,6,5,4,3,2,1].reduce((acc,itm,idx) => acc + (parseInt(acn.charAt(idx)) * itm),0)
  const cd = (10 - (w % 10)) == 10 ? 0 : 10 - (w % 10)
  return cd === parseInt(acn[8])
}
```
```js
validateACN('004085616')
```

### validateABN

Validate the given Australian Business Number (ABN)

```js
const validateABN = abn => {
  if (abn.length != 11 || isNaN(parseInt(abn))) return false
  const w = [10,1,3,5,7,9,11,13,15,17,19].reduce((acc,itm,idx) => acc + (idx===0 ? (parseInt(abn.charAt(idx))-1)*itm : parseInt(abn.charAt(idx))*itm),0)
  return (w % 89) === 0
}
```
```js
validateABN('51824753556')
```

### validateMod10v01

Validate the given number with Mod10V01 (Luhn's alogorithm)

```js
const validateMod10v01 = inp => {
  if (inp.length>20||isNaN(parseInt(inp))) return false
  let w = [...inp].reduceRight((acc,itm,idx) => {
    let num = parseInt(itm) * ((idx+1) % 2 == 0 ? 2 : 1)
    return acc + (num < 10 ? num : num - 9)
  },0)
  return (w % 10) === 0
}
```
```js
validateMod10v01('79927398713')
```
