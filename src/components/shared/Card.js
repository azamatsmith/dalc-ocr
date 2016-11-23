import React from 'react';

const Card = ({height, title, children}) => {
  const topHeight = (height / 3) * 2;
  const bottomHeight = height - topHeight;
  return (
    <div className="box" style={styles.main}>
      <h3 className="text-white text-center" style={styles.title}>{title}</h3>    
      {children} 
    </div>  
  );  
}

export default Card;

const styles = {
  main: {
    paddingTop: 0,  
  },
  title: {
    padding: 6,
    paddingTop: 16,
    letterSpacing: 2,
  },
};
