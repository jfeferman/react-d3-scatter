# react-d3-scatter

[![react](https://img.shields.io/badge/built%20with-react-61dafb.svg)](https://reactjs.org/)
![npm version](https://img.shields.io/npm/v/react-d3-scatter.svg?style=flat) ![definition types](https://img.shields.io/npm/types/react-d3-scatter.svg)

## Install

`npm i -S react-d3-scatter`

## Prerequisites

`npm i -S react d3`

## Usage

Pass an array of x,y value pairs to the scatter plot. For instance:

```javascript
const data = [[1,1], [2,10], [5,16]]
```


```javascript
import { ScatterPlot } from 'react-d3-scatter'
...
<ScatterPlot data={data} />
```

## Props

| props | default | type | description |
| - | - | - | - |
| data | empty | array | Array of x, y value paris |
| width | 600 | number | The width of the scatter plot |
| width | 400 | number | The height of the scatter plot |
| padding | 60 | number | A padding value to properly display axis |
