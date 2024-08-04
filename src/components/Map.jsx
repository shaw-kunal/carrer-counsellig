'use client';
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#e7e5e4"
        stroke="#71717a"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-0.1276, 51.5074]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: '#fff',
          strokeWidth: 3,
          strokeLinecap: 'round',
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize={20}
          fill="#4338ca"
        >
          {'United Kingdom'}
        </text>
      </Annotation>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: '#fff',
          strokeWidth: 3,
          strokeLinecap: 'round',
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize={20}
          fill="#4338ca"
        >
          {'Paris'}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
