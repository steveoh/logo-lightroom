import * as React from 'react'
import { SketchPicker } from 'react-color';
import './App.css'

function App() {
  const [tree, setTree] = React.useState('#7fdbff');
  const [base, setBase] = React.useState('#f1f1f1');
  const [diamondLeft, setDiamondLeft] = React.useState('#16697a');
  const [diamondRight, setDiamondRight] = React.useState('#0d3f49');
  const [halo, setHalo] = React.useState('#db6400');
  const [haloOutline, setHaloOutline] = React.useState('ffa62b');

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.09 195.09">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <rect style={{ fill: 'none' }} width="195.09" height="195.09" />
              <path style={{ fill: halo }} d="M98.51,114.63l71.24,29.1a74.53,74.53,0,1,0-144.41,0l71.24-29.1A2.58,2.58,0,0,1,98.51,114.63Z" />
              <path style={{ fill: haloOutline }} d="M98.42,115l64.44,26.32a67.41,67.41,0,1,0-130.62,0L96.67,115A2.31,2.31,0,0,1,98.42,115Z" />
              <path style={{ fill: base }} d="M188,142.46,98.71,178.94a3.13,3.13,0,0,1-2.33,0L7.09,142.46a3.08,3.08,0,0,1,0-5.7l89.29-36.47a3,3,0,0,1,2.33,0L188,136.76A3.08,3.08,0,0,1,188,142.46Z" />
              <path style={{ fill: tree }} d="M151.36,143.45,99.49,178.11a1.74,1.74,0,0,1-2.64-.93l-13-41.5a1.72,1.72,0,0,1,.08-1.26l39-84.47a1.76,1.76,0,0,1,3.27.21l27.37,87.07A5.48,5.48,0,0,1,151.36,143.45Z" />
              <path style={{ fill: tree }} d="M43.74,143.46,95.58,178.1a1.77,1.77,0,0,0,2.68-.94l13-41.47a1.75,1.75,0,0,0-.09-1.27L72.2,50a1.77,1.77,0,0,0-3.3.21l-27.36,87A5.52,5.52,0,0,0,43.74,143.46Z" />
              <path style={{ fill: diamondLeft }} d="M132.05,137.44,99.29,177.3a2.26,2.26,0,0,1-3.48,0L62,136.12a2.25,2.25,0,0,1-.42-2.06L95.38,17.55a2.26,2.26,0,0,1,4.33,0l33.37,114.87A5.48,5.48,0,0,1,132.05,137.44Z" />
              <path style={{ fill: diamondRight }} d="M133.52,135.66,99.52,177a1.11,1.11,0,0,1-2-.71V17.92a1.11,1.11,0,0,1,2.18-.31l34,117A1.11,1.11,0,0,1,133.52,135.66Z" />
            </g>
          </g>
        </svg>
        <pre>
          {JSON.stringify({
            base: base,
            trees: tree,
            diamondLeft: diamondLeft,
            diamondRight: diamondRight,
            halo: halo,
            haloOutline: haloOutline
          }, null, 2)}
        </pre>
      </div>
      <div style={{ display: 'grid', textAlign: 'center', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        <div>
          <p>base color</p>
          <SketchPicker
            color={base}
            onChange={(color) => setBase(color.hex)}
          ></SketchPicker>
        </div>
        <div>
          <p>background color</p>
          <SketchPicker
            color={tree}
            onChange={(color) => setTree(color.hex)}
          ></SketchPicker>
        </div>
        <div>
          <p>diamond left</p>
          <SketchPicker
            color={diamondLeft}
            onChange={(color) => setDiamondLeft(color.hex)}
          ></SketchPicker>
        </div>
        <div>
          <p>diamond left</p>
          <SketchPicker
            color={diamondRight}
            onChange={(color) => setDiamondRight(color.hex)}
          ></SketchPicker>
        </div>
        <div>
          <p>halo color</p>
          <SketchPicker
            color={halo}
            onChange={(color) => setHalo(color.hex)}
          ></SketchPicker>
        </div>
        <div>
          <p>halo outline color</p>
          <SketchPicker
            color={haloOutline}
            onChange={(color) => setHaloOutline(color.hex)}
          ></SketchPicker>
        </div>
      </div>
    </div>
  )
}

export default App
