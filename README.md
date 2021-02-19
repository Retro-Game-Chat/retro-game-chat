# Retro Game w/ Chat

Retro game chat is game being built on stream at [twitch.tv/lukeocodes](https://twitch.tv/lukeocodes), and is based on [our earlier hackathon app](https://github.com/Retro-Game-Chat/pok--chat). 

It uses (so far) Vue components for game assets, TailwindCSS, Express as a server, Auth0 for authentication and API authorization.

## Explaining the Monorepo

It contains the server and  the client. Depending on the environment, it runs slightly differently. In dev, both Express and Vue (webpack) run servers. In production, Vue is built and hosted by Express. In both environments, Express API routes are available at `/api(/*.+)?`.

## Development

### Clone the Project

`git clone https://github.com/Retro-Game-Chat/retro-game-chat.git` or download the `.zip`.

### Install Dependencies

`npm install` (this will also run `npm install` for the `/client` directory).

### Run the Servers 

`npm run dev` (this will also run `npm run dev` for the `/client` directory, side by side).

### Local URLs Explained

[http://localhost:8080](http://localhost:8080) is the Vue.js webpack server.
[http://localhost:3000](http://localhost:3000) is the Express server.

Vue.js proxies requests to `/api(/*.+)?` through to the Express server. So all routes (Express and Vue.js), are accessible at [http://localhost:8080](http://localhost:8080).

## Production and Deployment

### Clone the Project

`git clone https://github.com/Retro-Game-Chat/retro-game-chat.git` or download the `.zip`.

### Install Dependencies

`npm install` (this will also run `npm install` for the `/client` directory).

### Build and Run the Server

`npm start` (this will also run `npm run build` for the `/client` directory, and host it from the `/` route of Express).

### Production URLs Explained

[http://localhost:3000](http://localhost:3000) is the Express server, hosting a build of the Vue.js app and serving as an API.

Vue.js proxies are disabled.
