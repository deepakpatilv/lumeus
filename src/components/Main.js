import React from 'react';
import { Graph } from 'react-d3-graph';

const ContainerDataCoOrd = {
    nodes: [
              { id: "Google", x: 50, y: 25, size: 400,
                svg: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              },
              { id: "New York - Sites", x: 20, y: 350, size: 400,
                svg:"https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1435607516/ryq4bpc3duuhdak44s9x.png"
              },
              { id: "New Jersey - Sites", x: 220, y: 350, size: 400,
                svg:"https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1435607516/ryq4bpc3duuhdak44s9x.png"
              },
              { id: "Vermount - Sites", x: 440, y: 350, size: 400,
                svg:"https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1435607516/ryq4bpc3duuhdak44s9x.png"
              },
              { id: "Massachusetts - Sites", x: 660, y:350, size: 400,
                svg:"https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1435607516/ryq4bpc3duuhdak44s9x.png"
              },
              { id: "California - Sites", x: 880, y: 350, size: 400,
                svg:"https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1435607516/ryq4bpc3duuhdak44s9x.png"
              },
    ],

    links: [ 
              { source: "Google", target: "New York - Sites" },
              { source: "Google", target: "New Jersey - Sites" },
              { source: "Google", target: "Vermount - Sites" },
              { source: "Google", target: "Massachusetts - Sites" },
              { source: "Google", target: "California - Sites" }
    ]
  };
  
  const graphConfig = {
    width: 1200,
    height: 1000,
    initialZoom:1,
    node: {
      color: "gray",
      size: 350,
      fontSize: 16,
      highlightFontSize: 16,
      highlightStrokeColor: "black",
      labelProperty: "label"
    },
    link: {
      highlightColor: "black"
    },
    d3: {
      alphaTarget: 0.05,
      gravity: -400,
      linkLength: 600,
      linkStrength: 2,
      disableLinkForce: false
    }
  };


function Main() {
  const [data, setData] = React.useState(ContainerDataCoOrd);
  const [config, setConfig] = React.useState(graphConfig);

  return (
    <>
      <Graph
        id="graph-id" 
        data={data}
        config={config}
      />
    </>
  );
}

export default Main