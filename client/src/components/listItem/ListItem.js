import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./styles";

const ListItem = ({ index }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className={classes.listItem}
      style={{ left: isHovered && index * 230 - 27 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={classes.previewImage}
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
      />
      {isHovered ? (
        <>
          <video
            className={classes.trailer}
            src={trailer}
            autoPlay={true}
            loop
          />
          <div className={classes.itemInfo}>
            <div className={classes.infoIcons}>
              <PlayArrow className={classes.icon} style={{fontSize: '15px'}}/>
              <Add className={classes.icon} style={{fontSize: '15px'}}/>
              <ThumbUpAltOutlined className={classes.icon} style={{fontSize: '15px'}}/>
              <ThumbDownAltOutlined className={classes.icon} style={{fontSize: '15px'}}/>
            </div>
            <div className={classes.infoItemTop}>
              <span style={{marginRight: '1vw'}}>1 hour 14 mins</span>
              <span style={{marginRight: '1vw', border: '1px solid grey', padding: '0px 1px'}}>+16</span>
              <span>1999</span>
            </div>
            <div className={classes.desc}>
              Ut pariatur pariatur ipsum nisi ea est. Fugiat est Lorem consequat
              consectetur non fugiat magna cupidatat anim.
            </div>
            <div className={classes.genre}>Action</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ListItem;
