import React from 'react'

import NavBar from '../NavBar'
import Hero from '../Hero'
import Body from '../Body'
import OurServices from '../OurServices'
import OurFeatures from '../OurFeatures'
import OurTeam from '../OurServices'



function Link() {
  return (
    <div className='overflow-x-hidden '>
       
    < NavBar/>
    < Hero/>
  < Body/>
  <OurServices/>
  <OurFeatures/>
  <OurTeam />
</div>
  )
}

export default Link
