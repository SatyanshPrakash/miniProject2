import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react'
import useStyles from './styles';
import ListItem from '../listItem/ListItem';


const List = () => {
    const classes = useStyles();
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 27;
        if(direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance + 6*slideNumber}px)`
        }
        else if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance + 6*slideNumber}px)`
        }
    }
  return (
    <>
        <div className={classes.list}>
            <span className={classes.listTitle}>Continue to Watch</span>
            <div className={classes.wrapper}>
                <ArrowBackIosOutlined className={classes.sliderArrowLeft} onClick={() => handleClick('left')}/>
                <div className={classes.container} ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className={classes.sliderArrowRight} onClick={() => handleClick('right')}/>
            </div>



            <span className={classes.listTitle}>Continue to Watch</span>
            <div className={classes.wrapper}>
                <ArrowBackIosOutlined className={classes.sliderArrowLeft} onClick={() => handleClick('left')}/>
                <div className={classes.container} ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className={classes.sliderArrowRight} onClick={() => handleClick('right')}/>
            </div>
        </div>
    </>
  )
}

export default List