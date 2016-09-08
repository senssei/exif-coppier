#exif-coppier

#User story

Photographer has 2 folders of identically named *JPG* files. In first called exif, he has set of pictures without any modification, with all *EXIF* tags in it. In the second called `no-exif`, he has same pictures, but slightly modified - different sizes/filters etc, but without EXIF.

He wants to copy all *EXIF* tags from each file in `exif` folder - 1:1 - to `no-exif` folder. Write a script to deliver this functionality.

#Requirements

As a user I want script to automatise EXIF tag coping from one folder to another.

##Acceptance criteria

1. User runs script
2. Each picture (*.jpg files) from `exif` dir is
  1. read,
  2. parsed (for *EXIF* tags),
  3. all *EXIF* tag are put into matching file (same name) from `no-exif` directory 

##Links and additional materials

* https://en.wikipedia.org/wiki/Exif
* https://www.npmjs.com/
* http://www.exiv2.org/sample.html
