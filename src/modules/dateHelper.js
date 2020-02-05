const today = new Date().toJSON().slice(0, 10)

export const yesterday = new Date(Date.now() - 864e5).toJSON().slice(0,10)

export default today