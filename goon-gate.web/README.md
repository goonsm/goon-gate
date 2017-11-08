# goon-gate.web

🌈 🌈 Portal to rainbow factory 🌈 🌈

## GHETTO SETUP (SOON WILL CHANGE)

We're using a bundled version of IPFS for uglifyjs to work properly. Thus, the way to resolve this is to clone our folk of [js-ipfs](https://github.com/goonism/js-ipfs), and do the following:

```
npm i; npm run build; npm run babel; npm link;
```

Then, go back to `goon-gate.web` and do:

```
npm link ipfs
```

Voila
