#!/bin/bash

sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose -y
sudo systemctl enable --now docker
sudo apt install nginx
sudo touch /etc/nginx/sites-available/comments.auroratide.com.conf
sudo ln -s /etc/nginx/sites-available/comments.auroratide.com.conf /etc/nginx/sites-enabled/
sudo mkdir -p /srv/remark42/css
sudo mkdir -p /srv/remark42/data
sudo chmod -R 755 /srv/remark42/css
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d comments.auroratide.com

sudo systemctl reload nginx

sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22
sudo ufw enable