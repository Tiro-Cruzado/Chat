export const DICEBEAR_STYLE_OPTIONS = ["lorelei"];

type AvatarCacheConfig = {
  maxKeys: number;
}

export const AVATAR_CACHE_CONFIG: AvatarCacheConfig  = {
  maxKeys: parseInt(process.env.AVATAR_CACHE_MAX_IMAGES || "1000")
}
