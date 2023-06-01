import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/Gallery"
import AppLayout from "../layout/AppLayout";

export default function Home() {

  return(
    <AppLayout>
      <Container className="my-4">
        <Row>
          <Col>
           <h2>Home</h2>
          </Col>
           </Row>

           <Row>
            <Col md={11} lg={9} xl={8}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quo sint quas nisi libero deleniti veritatis. Deleniti dolorem distinctio sapiente voluptatum quasi asperiores, iusto, optio voluptate dolore cupiditate vero ullam.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus laudantium doloremque repellat deleniti quia animi eius vitae quo necessitatibus natus suscipit architecto voluptatibus reiciendis ratione, temporibus expedita nemo placeat! Labore!</p>
            </Col>
          </Row>
      
      </Container>
      <Gallery />

    </AppLayout>
  )
}