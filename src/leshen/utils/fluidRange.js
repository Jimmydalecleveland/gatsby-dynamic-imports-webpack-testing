export default (property, sizes, start = 480, end = 1200) => {
  const min = sizes[0]
  const max = sizes[1]
  const multiplier = ((max - min) / (end - start)) * 100
  const adder = (min * end - max * start) / (end - start)

  return `
    ${property}: calc(${multiplier}vw + ${adder}px);

    @media (max-width: ${start}px) {
      ${property}: ${min}px;
    }

    @media (min-width: ${end}px) {
      ${property}: ${max}px;
    }
  `
}
