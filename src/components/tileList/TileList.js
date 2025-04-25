import React from "react";
import { Tile } from "../tile/Tile"

/*export const TileList = ({items}) => {
  return (
    <div>
      {(items || []).map(({name, ...rest}, index) => (
          <Tile 
            name={name}
            key={index}
            description={rest}
          />
      ))}
    </div>
  );
};*/

export const TileList = ({ tiles = [] }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        const {name, ...description } = tile;
        return <Tile key={index} name={name} description={description}/>
    })}
    </div>
  );
};

