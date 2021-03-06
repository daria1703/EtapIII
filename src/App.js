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
        <p class="card-text">Robert Baratheon , w??adca Siedmiu Kr??lestw, zaparsza swojego starego druha Eddara Starka i proponuje mu zostanie namiestnikiem kr??lestwa. Ten podejrzewaj??c, ??e poprzednik pe??ni??cy to stanowisko zosta?? zamordowany, zgadza si??, aby zbada?? spraw??. Okazuje si??, ??e o przej??ciu tronu marzy kilka rodzin. Prawdziwa "Gra o tron" w??a??nie si?? zacz????a.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="ty2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ty</h5>
        <p class="card-text">B??yskotliwy menad??er ksi??garni Joe poznaje m??od?? aspiruj??c?? pisark?? Beck . Pos??uguj??c si?? mediami spo??eczno??ciowymi, m????czyzna zdobywa wiedz?? na temat dziewczyny, by m??c si?? do niej zbli??y??. Z czasem jego niewinne zauroczenie przeradza si?? w obsesj??. Joe szybko zaczyna likwidowa?? ka??d?? przeszkod??, kt??ra mog??aby zak????ci?? jego plan zdobycia kobiety.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="wikingowie.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Wikingowie</h5>
        <p class="card-text">M??ody wiking, Ragnar Lothbrok, pragnie, by wyprawy ??upie??cze odbywa??y si?? nie tylko na wsch??d, ale tak??e w kierunku przeciwnym.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="see.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">See</h5>
        <p class="card-text">Wirus zdziesi??tkowa?? ludzko????, a ocalali zostali pozbawieni wzroku. Jason Momoa w roli ojca narodzonych setki lat p????niej bli??ni??t, obdarzonych zdolno??ci?? widzenia, kt??ra dla innych sta??a si?? mitem, musi ochroni?? swoje plemi?? przed ????dn?? w??adzy kr??low??.</p>
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

