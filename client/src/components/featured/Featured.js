import React from "react";
import useStyles from "./styles";
import { PlayArrow, InfoOutlined } from "@material-ui/icons"

const Featured = (props) => {
  const classes = useStyles();
  const type = props.type;

  return (
    <>
      <div className={classes.featured}>

        {type && (
          <div className={classes.category}>
            <span>{type === 'movie' ? "Movies": "Series"}</span>
            <select className={classes.select} name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}

        <img
          className={classes.featuredImage}
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
        alt="
        />
        <div className={classes.info}>
          <img className={classes.infoImg} src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" />
          <span className={classes.desc}>
            Ipsum non qui ex quis labore esse pariatur eu reprehenderit laborum
            irure veniam aliqua tempor. Cillum officia Lorem esse tempor
            proident officia eiusmod. Sit aliquip deserunt elit ex ipsum et
            magna cillum aute. Incididunt labore eu officia reprehenderit.
          </span>
          <div className={classes.buttons}>
            <button className={classes.play}>
                <PlayArrow />
                <span className={classes.buttonSpan}>Play</span>
            </button>
            <button className={classes.more}>
                <InfoOutlined />
                <span className={classes.buttonSpan}>Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
