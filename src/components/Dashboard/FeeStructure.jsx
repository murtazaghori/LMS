import React from 'react';
import { useNavigate } from 'react-router-dom';  

import { feeData } from './feeData'; 

const FeeStructure = () => {
  const navigate = useNavigate(); 

  
  const handlePayClick = () => {
    navigate('/dashboard/feesubmission');  
  };

  return (
    <div style={{ marginTop: '50px', padding: '20px' ,marginRight:'150px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', flex: 1 }}>Fee Structure</h1>
        <button 
          onClick={handlePayClick} 
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Pay
        </button>
      </div>

     
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {feeData.map((item, index) => (
          <div 
            key={index} 
            style={{
              width: '300px', 
              border: '1px solid #ddd', 
              borderRadius: '10px', 
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
              textAlign: 'center',
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>
              Class {item.class}
            </h3>
            <div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Monthly Fee:</strong> {item.mothly}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Yearly Fee:</strong> {item.yearly}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeStructure;
