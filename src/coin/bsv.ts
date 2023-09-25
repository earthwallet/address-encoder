import { concatBytes } from "@noble/hashes/utils";
import type { Coin } from "../types.js";
import { base58Decode, base58Encode } from "../utils/base58.js";

const name = "bsv";
const coinType = 236;

export const encodeBsvAddress = (source: Uint8Array): string =>
  base58Encode(concatBytes(new Uint8Array([0x00]), source));
export const decodeBsvAddress = (source: string): Uint8Array => {
  const decoded = base58Decode(source);

  if (decoded.length !== 21) throw new Error("Unrecognised address format");

  const version = decoded[0];
  if (version !== 0x00) throw new Error("Unrecognised address format");

  return decoded.slice(1);
};

export const bsv = {
  name,
  coinType,
  encode: encodeBsvAddress,
  decode: decodeBsvAddress,
} as const satisfies Coin;
