import {Card, CardDeck} from 'react-bootstrap'



const PortfolioSnapshot = () => {

    return (
        <CardDeck>
             <Card style ={{
                    "maxHeight":"30rem",
                    "maxWidth":"15rem",
                    "marginTop":"2rem"
                }} >
             <Card.Img variant="top" style = {{
                    "maxHeight": "26rem",
                    "maxWidth" : "12rem",
                }} src= "/assets/images/Shoes/Vans.jpg" />
            <Card.Body style = {{
                        "maxHeight" : "30rem",
                        "maxWidth": "15rem",
                        
                    }}>
                <Card.Title style ={{
                            "textAlign": "center"
                        }} > AFC Skate Shop </Card.Title>

                <Card.Subtitle className="mb-2 text-muted text-italic"> A Full Stack Web App that allows user to view and purchase skate wear and accessories. </Card.Subtitle>

            
                

            </Card.Body>
        </Card>


        <Card style ={{
                    "maxHeight":"30rem",
                    "maxWidth":"15rem",
                    "marginTop":"2rem"
                }} >
             <Card.Img variant="top" style = {{
                    "maxHeight": "26rem",
                    "maxWidth" : "12rem",
                }} src= "/assets/images/Shoes/Vans.jpg" />
            <Card.Body style = {{
                        "maxHeight" : "30rem",
                        "maxWidth": "15rem",
                        
                    }}>
                <Card.Title style ={{
                            "textAlign": "center"
                        }} >Vans Retro Stripes Authentic SF </Card.Title>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Price: 49.99 </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Stock: 10 </Card.Subtitle>
                
                

            </Card.Body>
        </Card>


        <Card style ={{
                    "maxHeight":"30rem",
                    "maxWidth":"15rem",
                    "marginTop":"2rem"
                }} >
             <Card.Img variant="top" style = {{
                    "maxHeight": "26rem",
                    "maxWidth" : "12rem",
                }} src= "/assets/images/Shoes/Vans.jpg" />
            <Card.Body style = {{
                        "maxHeight" : "30rem",
                        "maxWidth": "15rem",
                        
                    }}>
                <Card.Title style ={{
                            "textAlign": "center"
                        }} >Vans Retro Stripes Authentic SF </Card.Title>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Price: 49.99 </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted text-italic"> Stock: 10 </Card.Subtitle>
                
               

            </Card.Body>
        </Card>



    </CardDeck>
    )
}
