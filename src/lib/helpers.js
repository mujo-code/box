export const mapToPair = props => key => [key, props[key]]
export const noPairFoundError = (key, value) =>
  `Prop ${key}="${value}" found in style guide`
export const mapToStyleGuildValue = ({ used = [], key, value }) => (
  val,
  curr
) => {
  if (val) return val
  if (curr[key]) {
    used.push(key)
    if (!curr[key][value]) {
      console.error(noPairFoundError(key, value))
    } else {
      return curr[key][value]
    }
  }
  return val
}
const cssDataPattern = /^data-css/
export const propsToStyles = stylesObjs => props => {
  const used = []
  const styles = Object.keys(props)
    .map(mapToPair(props))
    .map(pair => {
      const [key, value] = pair
      if (cssDataPattern.test(key)) {
        used.push(key)
        return key.replace(cssDataPattern, 'css')
      }
      return stylesObjs.reduce(mapToStyleGuildValue({ used, key, value }), null)
    })
    .filter(x => x)
  return { used, styles }
}
