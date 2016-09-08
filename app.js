var piexif = require("piexifjs");
var fs = require('fs');
var glob = require("glob");
var path = require('path');

var dir = 'sample'
var src = path.join('.', dir, 'exif'), dest = path.join('.', dir, 'no-exif');


glob(src + "**/*.+(jpg|JPG)", function (err, files) {
    if (err) {
        return;
    }
    else {
        files.forEach(function (file) {
            var exif = readExif(file);
            var dest = getDestFile(file);
            saveExif(dest, exif);
        });
        console.log('Done');
    }
})

function getDestFile(file){
    var filename = path.basename(file)
    var destFile= path.join('.', dest, filename);
    return destFile;
}

function readExif(file) {
    var jpeg = fs.readFileSync(file);
    var jpegData = jpeg.toString("binary");
    console.log('.');
    return piexif.load(jpegData);
    
}

function saveExif(file, exif) {
    var jpeg = fs.readFileSync(file);
    var jpegData = jpeg.toString("binary");

    var exifBytes = piexif.dump(exif);

    var newData = piexif.insert(exifBytes, jpegData);
    var newJpeg = new Buffer(newData, "binary");

    fs.writeFileSync(file, newJpeg);
    console.log('.');
}
