export const stringIsNullOrEmpty = (param?: string): boolean => {
  if (param === null || param === undefined || param === '') {
    return true
  }

  return false
}
