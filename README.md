# portfolio
Portfolio website that showcases photography services and web development projects

## Details
name of proxy_pass is determined by docker --name
docker run -d -p 80:80 -p 443:443  --net expressnet     -v /etc/letsencrypt:/etc/letsencrypt     -v /usr/share/nginx/html:/usr/share/nginx/html     expressnginx

### Stack Overflow Reference
https://stackoverflow.com/questions/39846649/how-to-use-lets-encrypt-with-docker-container-based-on-the-node-js-image/40114717
