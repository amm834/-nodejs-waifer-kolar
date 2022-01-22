let _dirname = __dirname.split('\\')
let dirname = _dirname[_dirname.length - 1]

console.log('Parent Directory', dirname)

let _filename = __filename.split('\\')
let filename = _filename[_filename.length - 1]
console.log('File Name', filename)