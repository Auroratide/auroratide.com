# VPS Setup

I don't have an idempotent script to run right now, since I'm figuring this all out.

For now:

1. Log in to the box: `ssh root@comments.auroratide.com`
2. If first-time setup, run all the commands in `setup.sh`.
3. Copy and paste the contents of `docker-compose.yml` into `/srv/remark42/docker-compose.yml`. Include the env variables from the `.env` file.
4. Copy and paste the contents of the `nginx/css/remark.css` file into `/srv/remark42/css/remark.css`.
5. Copy and paste the contents of `nginx.conf` into `/etc/nginx/sites-available/comments.auroratide.com.conf`.
6. Restart the docker doohicker. `cd /srv/remark42/` then `sudo docker-compose down && sudo docker-compose up -d`
