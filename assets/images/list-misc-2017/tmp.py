import os
import glob

for infile in glob.glob('../list-misc-2013/*.png'):
	cmd = "magick convert {} -strip -resize 300x300 -alpha Remove {}".format(infile, infile)
	# print cmd
	os.system(cmd)
