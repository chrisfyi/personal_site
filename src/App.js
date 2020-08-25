import React from "react";


import NavigationBar from './components/NavigationBar';
import MyImage from './components/LogoFigure';
import ParagraphCard from './components/ParagraphCard';
import PortfolioCardGroups from './components/PortfolioCardGroups';
import SkillsSection from './components/SkillsSection';
import YoutubeVid from './components/YoutubeVid'




const App =() => {

    
        return(
          <div class= "columns  is-centered">
            <div class= "column is-11">
              
                  <div> 
                    <NavigationBar />
                    <MyImage />
                    <ParagraphCard />
                    <SkillsSection/>  
                    <PortfolioCardGroups />
                    <YoutubeVid />
                  </div> 
            </div>
          </div>
    )
}

export default App;