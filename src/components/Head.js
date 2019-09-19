import React from 'react';

export function Head({ name, title }) {
  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-9 mx-auto my-1 text-center'>
            <h1 className='text-capitalize font-weight-bold'>{name} <strong className='text-blue'>{title}</strong></h1>
          </div>
        </div>
      </div>
    </>
  )
}









