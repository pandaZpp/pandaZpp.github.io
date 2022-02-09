# Express部署到腾讯云服务器

1. 将本地的`express`项目上传至`github`；
2. 云服务器上安装`git`，拉取项目至指定目录
3. 安装`node`，与本地的版本最好保持一致，避免出现问题
4. 安装`nrm`管理镜像源

```bash
# 全局安装nrm,使用nrm管理镜像
npm install -g nrm
# 列出所有镜像
nrm ls
  #npm ---------- https://registry.npmjs.org/
  #yarn --------- https://registry.yarnpkg.com/
  #tencent ------ https://mirrors.cloud.tencent.com/npm/
  #cnpm --------- https://r.cnpmjs.org/
  #taobao ------- https://registry.npmmirror.com/
  #npmMirror ---- https://skimdb.npmjs.com/registry/
nrm use taobao

# 自定义镜像
nrm add taobao1 https://registry.npm.taobao.org/
nrm use taobao1

# 查看当前npm所有配置
npm config ls -l
# 查看npm当前镜像
npm get registry
```

5. 进入项目目录，执行`npm install`安装依赖
6. `node app.js`尝试启动，无误后继续，有错误请排查
7. 使用宝塔面板，傻瓜式操作，安装`pm2`管理器，`Nginx`反向代理，`PM2`添加启动项目，配置映射指向一个已经配置过`DNS`解析的域名（需要在云服务器控制台`DNSPod`中进行配置），可以:fire:申请一个免费的`SSL`证书，到期后重新申请，就可以使用`HTTPS`进行安全访问了
8. 浏览器中输入步骤7中配置的域名，**不需要输入端口**，就可以进行正常访问了

## nginx:star:

不需要输入端口的原理

* `HTTP`默认`80`端口，`HTTPS`默认`443`端口，这两个端口在服务器的防火墙中是默认放开的，即如果你想访问服务器的某个端口，需要在防火墙中将其放开
* `Nginx`反向代理，监听`80 443`端口，`server_name`就是浏览器中要访问的域名，在`nginx`中使用`include`引入了这里的配置`include /www/server/panel/vhost/nginx/*.conf;`

```
server
{
    listen 80;
	listen 443 ssl http2;
    server_name qg-blog-api.blairq.top;
    index index.php index.html index.htm default.php default.htm default.html;
    root /home/qg-blog/Blog/blog-api;
    
    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    ssl_certificate    /www/server/panel/vhost/cert/qg-blog-api.blairq.top/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/qg-blog-api.blairq.top/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;

    #SSL-END
    
    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END
    
    #PHP-INFO-START  PHP引用配置，可以注释或修改
    #清理缓存规则

    location ~ /purge(/.*) {
        proxy_cache_purge cache_one $host$1$is_args$args;
        #access_log  /www/wwwlogs/qg-blog-api.blairq.top_purge_cache.log;
    }
	#引用反向代理规则，注释后配置的反向代理将无效
	include /www/server/panel/vhost/nginx/proxy/qg-blog-api.blairq.top/*.conf;

	include enable-php-00.conf;
    #PHP-INFO-END
    
    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/qg-blog-api.blairq.top.conf;
    #REWRITE-END
    
    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }
    
    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }
    
    access_log  /www/wwwlogs/qg-blog-api.blairq.top.log;
    error_log  /www/wwwlogs/qg-blog-api.blairq.top.error.log;
}
```



* 引用代理规则`include /www/server/panel/vhost/nginx/proxy/qg-blog-api.blairq.top/*.conf;`
* 反向代理配置，这里指向本地项目启动所指向的端口`3000`，:star:如果改动了此配置文件，需要重启`Nginx`才能生效

```
#PROXY-START/
location  ~* \.(gif|png|jpg|css|js|woff|woff2)$
{
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    expires 12h;
}
location /
{
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    
    add_header X-Cache $upstream_cache_status;
    
    #Set Nginx Cache
    
    	add_header Cache-Control no-cache;
}

#PROXY-END/
```















