import './BoxColor.css';

function BoxColor(props) {
  function toHex(color) {
    const hexaDecimal = color.toString(16);
    return hexaDecimal.length === 1 ? '0' + hexaDecimal : hexaDecimal;
  }

  function rgbToHex(r, g, b) {
    // return '#' + toHex(r) + toHex(g) + toHex(b);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  const boxColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  return (
    <div style={boxColor} className="box-color">
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  )
}

export default BoxColor