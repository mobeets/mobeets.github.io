import os
import sys
import glob

cdir = sys.argv[1]
print glob.glob(os.path.join(cdir, '*.png'))
for infile in glob.glob(os.path.join(cdir, '*.png')):
	cmd = "magick convert {} -strip -depth 8 -resize 300x300 -alpha Remove {}".format(infile, infile)
	print cmd
	# os.system(cmd)
