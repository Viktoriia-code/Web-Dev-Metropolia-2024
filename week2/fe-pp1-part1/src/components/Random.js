function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Random(props) {
  const randomNumber = getRandomInt(props.min, props.max);
  return (
    <div className="number-card">Random value between {props.min} and {props.max} =&gt; {randomNumber}</div>
  )
}

export default Random