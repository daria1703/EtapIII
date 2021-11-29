import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown, Nav, Navbar, NavDropdown} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg='dark' variant='dark' sticky='top'expand='lg'>
        <Navbar.Brand>
          <div class='logo'>
          <img src="./youtube.png" alt="" width="32" height="32" class="d-inline-block align-text-top"/>
          Films
          </div>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav calss='components'>
            <NavDropdown title='Filmy'>
              <NavDropdown.Item href='filmy/komedia'>Komedia</NavDropdown.Item>
              <NavDropdown.Item href='filmy/akcja'>Akcja</NavDropdown.Item>
              <NavDropdown.Item href='filmy/dramat'>Dramat</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Seriale'>
              <NavDropdown.Item href='seriale/wojenny'>Wojenne</NavDropdown.Item>
              <NavDropdown.Item href='seriale/fantazy'>Fantazy</NavDropdown.Item>
              <NavDropdown.Item href='seriale/sience_fiction'>Sience Fiction</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Stacje'>
              <NavDropdown.Item href='stacja/hbo'>HBO</NavDropdown.Item>
              <NavDropdown.Item href='stacja/canal'>CANAL+</NavDropdown.Item>
              <NavDropdown.Item href='stacja/comedy_central'>Comedy Central</NavDropdown.Item>
            </NavDropdown>
          <div class="search">
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Szukaj" aria-label="Search"/>
            <button type="button" class="btn btn-outline-light">Szukaj</button>
            </form>
          </div>
          <div calss='button2'>
          <button type="button" class="btn btn-outline-light">Zaloguj</button>
          <button type="button" class="btn btn-outline-light">Zajerestruj</button>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
      <div className='content'>
      <div class="row row-cols-1 row-cols-md-4 g-1">
  <div class="col">
    <div class="card h-100">
      <img src="gra-o-tron.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Gra o tron</h5>
        <p class="card-text">Robert Baratheon , władca Siedmiu Królestw, zaparsza swojego starego druha Eddara Starka i proponuje mu zostanie namiestnikiem królestwa. Ten podejrzewając, że poprzednik pełniący to stanowisko został zamordowany, zgadza się, aby zbadać sprawę. Okazuje się, że o przejęciu tronu marzy kilka rodzin. Prawdziwa "Gra o tron" właśnie się zaczęła.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="ty2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ty</h5>
        <p class="card-text">Błyskotliwy menadżer księgarni Joe poznaje młodą aspirującą pisarkę Beck . Posługując się mediami społecznościowymi, mężczyzna zdobywa wiedzę na temat dziewczyny, by móc się do niej zbliżyć. Z czasem jego niewinne zauroczenie przeradza się w obsesję. Joe szybko zaczyna likwidować każdą przeszkodę, która mogłaby zakłócić jego plan zdobycia kobiety.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="wikingowie.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Wikingowie</h5>
        <p class="card-text">Młody wiking, Ragnar Lothbrok, pragnie, by wyprawy łupieżcze odbywały się nie tylko na wschód, ale także w kierunku przeciwnym.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="see.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">See</h5>
        <p class="card-text">Wirus zdziesiątkował ludzkość, a ocalali zostali pozbawieni wzroku. Jason Momoa w roli ojca narodzonych setki lat później bliźniąt, obdarzonych zdolnością widzenia, która dla innych stała się mitem, musi ochronić swoje plemię przed żądną władzy królową.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default App;

