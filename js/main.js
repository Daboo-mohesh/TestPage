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


function writeToFile(){
    var f = "https://github.com/Daboo-mohesh/TestPage/blob/4ad595ef5dfeae867c40ad6daf42f8e202d67666/dbx.txt";

    var txtFile =new File(f);

    txtFile.writeln(f, "Spoon")
    txtFile.writeln(f, "Cheese monkey")
    txtFile.writeln(f, "Onion")

    txtFile.close();
}

writeToFile();