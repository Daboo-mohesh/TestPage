function writeInDB(){
    const fs = require('fs')
    var pathToDB = "https://github.com/Daboo-mohesh/TestPage/blob/4ad595ef5dfeae867c40ad6daf42f8e202d67666/dbx.txt";
    const content = 'this is what i want to write to file'

    fs.writeFile(pathToDB, content, err => {
    if (err) {
        console.error(err)
        return
    }
    })
}

writeInDB();