export const isProd = () => process.env.NODE_ENV === 'production'
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
