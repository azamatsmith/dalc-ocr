import React from 'react';
import Card from './shared/Card';

const ResultsCard = ({html, confidence}) => {
  return (
    <Card title="Results">
            
      <div style={styles.results}>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>

      <div style={styles.confidence}>
        <h4 className="text-center" style={styles.text}>Confidence Level: {confidence}</h4>
      </div>
    </Card>  
  );  
}

export default ResultsCard;

const styles = {
  results: {
    height: 300,
    backgroundColor: '#FCFCFC', 
    marginLeft: 10,
    marginRight: 10,
    padding: 15
  },
  confidence: {
    position: 'absolute', 
    bottom: -15,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    color: '#EC915C',
  }
};
