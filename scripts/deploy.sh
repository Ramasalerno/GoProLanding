cd ..
git pull
npm i

npm run build
cd .next
sudo rsync -aP . /var/www/gopro/frontend/

pm2 reload /var/www/gopro/server.config.js
