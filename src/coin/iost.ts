import type { Coin } from "../types.js";
import { base58DecodeNoCheck, base58EncodeNoCheck } from "../utils/base58.js";

const name = "iost";
const coinType = 291;

export const encodeIostAddress = base58EncodeNoCheck;
export const decodeIostAddress = base58DecodeNoCheck;

export const iost = {
  name,
  coinType,
  encode: encodeIostAddress,
  decode: decodeIostAddress,
} as const satisfies Coin;
