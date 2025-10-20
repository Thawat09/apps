# apps

1. sudo apt-get update -y
2. sudo apt-get install -y nodejs npm
3. cd /srv/apps/node-app
4. npm install
5. sudo apt-get update -y
6. sudo apt-get install -y python3-pip
7. cd /srv/apps/apps/py-app
8. python3 -m venv .venv
9. source .venv/bin/activate
10. pip install -U pip
11. pip3 install -r requirements.txt
12. sudo apt-get update -y
13. sudo apt-get install -y golang-go
14. cd /srv/apps/go-app
15. go run main.go
16. sudo apt-get update -y
17. sudo apt-get install -y openjdk-17-jdk maven
18. cd /srv/apps/java-app
19. mvn -B -q clean package
20. sudo npm install -g pm2
21. cd /srv/apps
22. pm2 start ecosystem.config.js
23. pm2 save
24. pm2 startup systemd
25. pm2 status
26. sudo apt-get update -y
27. sudo apt-get install -y nginx
28. sudo ufw allow 'Nginx Full' || true
29. sudo ln -s /etc/nginx/sites-available/apps.conf /etc/nginx/sites-enabled/
30. sudo nginx -t
31. sudo systemctl reload nginx
32. sudo apt-get install -y certbot python3-certbot-nginx
33. sudo certbot --nginx -d app1.example.com -d app2.example.com -d app3.example.com