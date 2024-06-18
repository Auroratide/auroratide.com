#!/bin/bash

magick cover.png cover.webp
mv cover.svg cover-o.svg
mv colorscape.svg colorscape-o.svg
svgo -i cover-o.svg -o cover.svg
svgo -i colorscape-o.svg -o colorscape.svg
rm cover-o.svg colorscape-o.svg cover.png
