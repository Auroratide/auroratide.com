#!/bin/bash

TARGET=$1

magick "$TARGET" cover-1.webp
magick cover-1.webp -resize 800 cover-2.webp
magick cover-2.webp -crop 800x450+0+0 cover.webp
