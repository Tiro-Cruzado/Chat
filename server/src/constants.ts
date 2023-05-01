export const DICEBEAR_STYLE_OPTIONS = [
  "adventurer",
  "avataaars",
  "big-smile",
  "lorelei",
  "micah",
  "miniavs",
  "open-peeps",
  "personas",
  "pixel-art"
];

type AvatarCacheConfig = {
  maxKeys: number;
}

export const AVATAR_CACHE_CONFIG: AvatarCacheConfig  = {
  maxKeys: parseInt(process.env.AVATAR_CACHE_MAX_IMAGES || "1000")
}
