import React from "react";


import NavigationBar from './components/NavigationBar';
import MyImage from './components/LogoFigure';
import ParagraphCard from './components/ParagraphCard';
import PortfolioCardGroups from './components/PortfolioCardGroups';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm'
import IntroSection from "./components/IntroSection";




const App =() => {

    
        return(
          <div class= "columns">
            <div class= "column">
              
                  <div> 
                    <NavigationBar />,
                    <br />
                    <br />
                    <IntroSection />,
                    <MyImage />,
                    <ParagraphCard />,
                    <br />
                    <br />
                    <SkillsSection/>,
                    <br />
                    <br />
                    {/* <PortfolioSnapshot />, */}
                    <PortfolioCardGroups />
                    <ContactForm />
                  </div> 
               
            </div>
         </div>
    )

   
}

export default App;