import React from 'react'
import { well } from '../assets'
import {HContainer, HFile, Hlogo, Hone, Htwo} from '../styles/home'
const Home = () => {
  return (
    <HContainer>
      <HFile>
        <Hlogo>
          <img src={well} />
        </Hlogo>
        <Hone style={{fontSize:"80px"}}>Wellcome !!!!!</Hone>
        <Hone>This is My Test Project</Hone>
        <Htwo>For: Addis Software</Htwo>
      
        
        
      </HFile>
  
        
    </HContainer>
  )
}

export default Home