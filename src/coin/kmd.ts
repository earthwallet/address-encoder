import type { Coin } from "../types.js";
import {
  createBase58WithCheckDecoder,
  createBase58WithCheckEncoder,
} from "../utils/base58.js";

const name = "kmd";
const coinType = 141;

const p2pkhVersions = [new Uint8Array([0x3c])];
const p2shVersions = [new Uint8Array([0x55])];

export const encodeKmdAddress = createBase58WithCheckEncoder(
  p2pkhVersions[0],
  p2shVersions[0]
);
export const decodeKmdAddress = createBase58WithCheckDecoder(
  p2pkhVersions,
  p2shVersions
);

export const kmd = {
  name,
  coinType,
  encode: encodeKmdAddress,
  decode: decodeKmdAddress,
} as const satisfies Coin;
