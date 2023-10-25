import React from 'react'
import { Router } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
        <form
          onSubmit={e => {
            e.preventDefault();

            Router.push({
              pathname: '/User'
            });

        
          }}>

       
          <label htmlFor="username">Find Your OctoProfile</label>
          <input name="username" type="text"  />
        </form>
    </div>
  )
}