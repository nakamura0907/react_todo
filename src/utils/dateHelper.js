export const getDate = (date, separator = "/") => {
    return date.getFullYear() + separator + date.getMonth() + separator + date.getDate()
}


/**
 * dateが xxxx/x/x 00:00:00なので－になってしまう。なので+1
 */
export const diff = (date) => {
    return (date.getTime() - new Date().getTime()) / 86400000 + 1
}