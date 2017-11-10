import createBrowserHistory from "history/createBrowserHistory";

const IPFS = window.Ipfs;

export const customHistory = createBrowserHistory();

export const repo = "diffy-13234234"

export const ipfsNode = new IPFS({ repo });
