import React from 'react';
import Card from './shared/Card';

const ImageCard = ({img}) => {
  return (
    <Card title="Original Image">
      <div style={styles.imgContainer}> 
        <img src={img} style={styles.img} className="img-responsive"/>
      </div>
    </Card>  
  );  
}

export default ImageCard;

const styles = {
  img: {
    marginLeft: 'auto', 
    marginRight: 'auto', 
  },
  imgContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
};
