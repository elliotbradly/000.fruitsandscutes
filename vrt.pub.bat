node publish
cd..
cd pub
cd 000.bee-show
git add -A && git commit -m committing
wrangler publish
node open
TIMEOUT 11
taskkill /F /IM vrt.dpy.bat