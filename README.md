# React Native RTMP Stream Example

#### Example application with React Native for RTMP live streaming to server

---

## 📖 Libraries

- [React Native Starter Kit](https://github.com/mcnamee/react-native-starter-kit/)
- [React Native Node Media Client](https://github.com/NodeMedia/react-native-nodemediaclient)
- [Node Media Server](https://github.com/illuspas/Node-Media-Server)

---

## 🚀 Getting Started

#### Clone and Install

```bash
# Clone the repo
git clone https://github.com/statickidz/react-native-rtmp-stream-example.git

# Install dependencies
cd rtmp-client && yarn && cd ../rtmp-server && yarn && cd ..
```

#### Run the _RTMP_ Server

```bash
# Start the RTMP Server
cd rtmp-server && yarn start
```
Go [http://localhost:3000/api/streams](http://localhost:3000/api/streams) to view RTMP publishers and subscribers.

#### Run the _React Native_ App

Change in [src/native/components/Stream.js](/src/native/components/Stream.js) your server ip address in your local network.

```bash
# Start the React Native packager
cd rtmp-client
yarn start
```

```bash
# Run Android
yarn android-bundle
yarn android
```

```bash
# Run iOS
yarn ios-bundle
yarn ios
```

#### Change your server IP
I'm using Genymotion default PC IP, customize yours
rtmp-client\src\native\components\Stream.js
```
...
outputUrl = {"rtmp://10.0.3.2/live/TESTING"}
...
```

#### Open stream in _VLC_ or similar

rtmp://127.0.0.1/live/TESTING

![running](https://i.gyazo.com/14ed0f771e966d6163b3ffe8b8628deb.png)
![vlc](https://i.gyazo.com/23fff81b65894c5485dc94b0ec505ad4.png)