const str = `
010-1234-5678
the@google.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccdddd
`

// const regexp = new RegExp('the','gi')
// console.log(str.match(regexp))
// const regexp2 = /fox/gi
// console.log(regexp2.test(str))
// console.log(str.replace(regexp2, 'AAA'))
// console.log(str)
// str = str.replace(regexp2, 'AAA')
// console.log(str)
// console.log(str.match(/\.$/gi))
// console.log(
//   str.match(/^t/gim)
// )
// console.log(
//   str.match(/h..p/g)
// )
// console.log(
//   str.match(/fox|dog/g)
// )
// console.log(
//   str.match(/https?/g)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
// console.log(
//   str.match(/[0-9]{1,}/g)
// )
// console.log(
//   str.match(/[가-힣]/g)
// )
// console.log(
//   str.match(/\w/g)
// )
// console.log(
//   str.match(/\bf\w{1,}/g)
// )
// console.log(
//   str.match(/\d/g)
// )
// const h = `  the hello  world    !  

// `
// console.log(
//   h.replace(/\s/g, '')
// )

console.log(
  str.match(/.{1,}(?=\@)/g)
)
console.log(
  str.match(/(?<=\@).{1,}/g)
)


