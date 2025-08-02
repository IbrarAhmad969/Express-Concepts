#  Express App with Handlebars, PM2 & Load Balancing

Welcome to my full-stack Node.js Express application! This project uses:

- Handlebars (hbs) for server-side templating
-  PM2 for production-grade process management
-  Load balancing using round-robin strategy
-  Zero-downtime deployments with PM2

---

##  Tech Stack

- **Express.js** – Web framework for Node.js
- **Handlebars** – Templating engine for dynamic HTML
- **PM2** – Production process manager
- **Node Cluster / Round Robin** – For load balancing across CPU cores

---

##  PM2 Commands Cheat Sheet


| Command                          | What It Does                                            |
|----------------------------------|---------------------------------------------------------|
| `pm2 start server.js`            | Starts your app using PM2                              |
| `pm2 stop server.js`             | Stops the app                                           |
| `pm2 restart server.js`          | Restarts the app                                        |
| `pm2 reload server.js`           | Reloads the app (zero downtime!)                       |
| `pm2 reload all`                 | Reloads all apps without downtime                      |
| `pm2 list`                       | Shows all processes managed by PM2                     |
| `pm2 logs`                       | Shows real-time logs of all apps                       |
| `pm2 logs server`                | Shows logs of your specific app                        |
| `pm2 monit`                      | Live monitoring dashboard (super useful!)              |
| `pm2 delete server.js`           | Removes the app from PM2 list                          |
| `pm2 save`                       | Saves the PM2 process list to auto-restart on reboot   |
| `pm2 startup`                    | Generates startup script for auto-launch on boot       |
| `pm2 start server.js -i max`     | Starts app in cluster mode using all CPU cores         |
| `pm2 start server.js -i 4`       | Starts app in cluster mode with 4 instances            |

>  **Zero Downtime Tip:**  
Cluster mode lets you reload your app with no downtime using:
```bash
pm2 reload all



##  Setup

Clone the repo and install the dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install


