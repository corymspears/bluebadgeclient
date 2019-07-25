import React, {useState} from 'react';
import { Container, Col, Row, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';

const Builder = (props) => {

    const handleSubmit = (e) => { //1
        e.preventDefault();
        fetch('http://localhost:5000/api/userpedal/', { //3
          method: 'POST', 
          body: JSON.stringify({pedalId:[1, 2, 3]}), //4
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token //5
          })
        }) .then((res) => res.json())
        .then((result) => { //6
          console.log(result);
        })
      }

      // Functions for dropdowns
        const [dropdownOpen1, setDropdownOpen1] = useState(false);
        const toggle1 = () => {
            setDropdownOpen1(
                !dropdownOpen1
        );
        }
        const [dropdownOpen2, setDropdownOpen2] = useState(false);
        const toggle2 = () => {
            setDropdownOpen2(
                !dropdownOpen2
        );
        }
        const [dropdownOpen3, setDropdownOpen3] = useState(false);
        const toggle3 = () => {
            setDropdownOpen3(
                !dropdownOpen3
        );
        }
        const [dropdownOpen4, setDropdownOpen4] = useState(false);
        const toggle4 = () => {
            setDropdownOpen4(
                !dropdownOpen4
        );
        }
        const [dropdownOpen5, setDropdownOpen5] = useState(false);
        const toggle5 = () => {
            setDropdownOpen5(
                !dropdownOpen5
        );
        }
        const [dropdownOpen6, setDropdownOpen6] = useState(false);
        const toggle6 = () => {
            setDropdownOpen6(
                !dropdownOpen6
        );
        }

      // Functions for populating liste items
        const [pedal1name, setpedal1name] = useState('Empty');
        const populate1 = (e, pedalname, id) => {
            setpedal1name(
                pedalname
        );
        }

        const [pedal2name, setpedal2name] = useState('Empty');
        const populate2 = (e, pedalname, id) => {
            setpedal2name(
                pedalname
        );
        }

        const [pedal3name, setpedal3name] = useState('Empty');
        const populate3 = (e, pedalname, id) => {
            setpedal3name(
                pedalname
        );
        }

        const [pedal4name, setpedal4name] = useState('Empty');
        const populate4 = (e, pedalname, id) => {
            setpedal4name(
                pedalname
        );
        }

        const [pedal5name, setpedal5name] = useState('Empty');
        const populate5 = (e, pedalname, id) => {
            setpedal5name(
                pedalname
        );
        }

        const [pedal6name, setpedal6name] = useState('Empty');
        const populate6 = (e, pedalname, id) => {
            setpedal6name(
                pedalname
        );
        }

        // const [pedalgroup, setpedalgroup] = useState([]);
        // const setpedalgroup = (e, pedalname, id) => {
        //     setpedal1name(
        //         pedalname
        // );
        // }
    
    return (
    <Container className="wrapper">
        <Row>
        <Col sm={{ size: 3 }}>  
            <div>
                <br/>
                <br/>
                <br/>
                    <Row>
                        <h4>Select Your Pedals</h4>   
                    </Row>
                <br/>
                    <Row>
                    <ButtonDropdown direction="right" isOpen={dropdownOpen1} toggle={toggle1}>
                        <DropdownToggle caret>
                        Select Your First Pedal
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Delay</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Boss DD-7', 1)} value='1' pvalue='1'>Boss DD-7</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'MXR Carbon Copy', 1)} value='2' pvalue='1'>MXR Carbon Copy</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'TC Electronic Feedback', 1)} value='3' pvalue='1'>TC Electronic Flashback</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Overdrive/Distortion</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Fulltone OCD', 1)} value='4' pvalue='1'>Fulltone OCD</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'JHS Morning Glory', 1)} value='5' pvalue='1'>JHS Morning Glory</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Ibanez TS9 Tubescreamer', 1)} value='6' pvalue='1'>Ibanez TS9 Tubescreamer</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Reverb</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Boss RV-6', 1)} value='7' pvalue='1'>Boss RV-6</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'TC Electronic Hall of Fame', 1)} value='8' pvalue='1'>TC Electronic Hall of Fame</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'MXR Reverb', 1)} value='9' pvalue='1'>MXR Reverb</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Modulation</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Walrus Audio Julia Chorus', 1)} value='10' pvalue='1'>Walrus Audio Julia Chorus</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Boss BF3 Flanger', 1)} value='11' pvalue='1'>Boss BF3 Flanger</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'MXR phase 90 Phaser', 1)} value='12' pvalue='1'>MXR phase 90 Phaser</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Dynamics</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Walrus Audio Deep Six Compressor', 1)} value='13' pvalue='1'>Walrus Audio Deep Six Compressor</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Xotic EP Booster', 1)} value='14' pvalue='1'>Xotic EP Booster</DropdownItem>
                            <DropdownItem onClick={(e)=>populate1(e, 'Dunlop CryBaby Wah Pedal', 1)} value='15' pvalue='1'>Dunlop CryBaby Wah Pedal</DropdownItem>
                        </DropdownMenu>
                        </ButtonDropdown>
                    </Row>              
                    <br/>
                    <Row>
                    <ButtonDropdown direction="right" isOpen={dropdownOpen2} toggle={toggle2}>
                        <DropdownToggle caret>
                            Select Your Second Pedal
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Delay</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Boss DD-7', 1)} value='1' pvalue='2'>Boss DD-7</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'MXR Carbon Copy', 1)} value='2' pvalue='2'>MXR Carbon Copy</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'TC Electronic Feedback', 1)} value='3' pvalue='2'>TC Electronic Flashback</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Overdrive/Distortion</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Fulltone OCD', 1)} value='4' pvalue='2'>Fulltone OCD</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'JHS Morning Glory', 1)} value='5' pvalue='2'>JHS Morning Glory</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Ibanez TS9 Tubescreamer', 1)} value='6' pvalue='2'>Ibanez TS9 Tubescreamer</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Reverb</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Boss RV-6', 1)} value='7' pvalue='2'>Boss RV-6</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'TC Electronic Hall of Fame', 1)} value='8' pvalue='2'>TC Electronic Hall of Fame</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'MXR Reverb', 1)} value='9' pvalue='2'>MXR Reverb</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Modulation</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Walrus Audio Julia Chorus', 1)} value='10' pvalue='2'>Walrus Audio Julia Chorus</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Boss BF3 Flanger', 1)} value='11' pvalue='2'>Boss BF3 Flanger</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'MXR phase 90 Phaser', 1)} value='12' pvalue='2'>MXR phase 90 Phaser</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Dynamics</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Walrus Audio Deep Six Compressor', 1)} value='13' pvalue='2'>Walrus Audio Deep Six Compressor</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Xotic EP Booster', 1)} value='14' pvalue='2'>Xotic EP Booster</DropdownItem>
                            <DropdownItem onClick={(e)=>populate2(e, 'Dunlop CryBaby Wah Pedal', 1)} value='15' pvalue='2'>Dunlop CryBaby Wah Pedal</DropdownItem>
                        </DropdownMenu>
                        </ButtonDropdown>
                    </Row>
                    <br/>
                    <Row>
                    <ButtonDropdown direction="right" isOpen={dropdownOpen3} toggle={toggle3}>
                        <DropdownToggle caret>
                        Select Your Third Pedal
                        </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem header>Delay</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Boss DD-7', 1)} value='1' pvalue='3'>Boss DD-7</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'MXR Carbon Copy', 1)} value='2' pvalue='3'>MXR Carbon Copy</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'TC Electronic Feedback', 1)} value='3' pvalue='3'>TC Electronic Flashback</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Overdrive/Distortion</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Fulltone OCD', 1)} value='4' pvalue='3'>Fulltone OCD</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'JHS Morning Glory', 1)} value='5' pvalue='3'>JHS Morning Glory</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Ibanez TS9 Tubescreamer', 1)} value='6' pvalue='3'>Ibanez TS9 Tubescreamer</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Reverb</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Boss RV-6', 1)} value='7' pvalue='3'>Boss RV-6</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'TC Electronic Hall of Fame', 1)} value='8' pvalue='3'>TC Electronic Hall of Fame</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'MXR Reverb', 1)} value='9' pvalue='3'>MXR Reverb</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Modulation</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Walrus Audio Julia Chorus', 1)} value='10' pvalue='3'>Walrus Audio Julia Chorus</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Boss BF3 Flanger', 1)} value='11' pvalue='3'>Boss BF3 Flanger</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'MXR phase 90 Phaser', 1)} value='12' pvalue='3'>MXR phase 90 Phaser</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Dynamics</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Walrus Audio Deep Six Compressor', 1)} value='13' pvalue='3'>Walrus Audio Deep Six Compressor</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Xotic EP Booster', 1)} value='14' pvalue='3'>Xotic EP Booster</DropdownItem>
                            <DropdownItem onClick={(e)=>populate3(e, 'Dunlop CryBaby Wah Pedal', 1)} value='15' pvalue='3'>Dunlop CryBaby Wah Pedal</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Row>
                    <br/>
                    <Row>
                    <ButtonDropdown direction="right" isOpen={dropdownOpen4} toggle={toggle4}>
                        <DropdownToggle caret>
                        Select Your Fourth Pedal
                        </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem header>Delay</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Boss DD-7', 1)} value='1' pvalue='4'>Boss DD-7</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'MXR Carbon Copy', 1)} value='2' pvalue='4'>MXR Carbon Copy</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'TC Electronic Feedback', 1)} value='3' pvalue='4'>TC Electronic Flashback</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Overdrive/Distortion</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Fulltone OCD', 1)} value='4' pvalue='4'>Fulltone OCD</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'JHS Morning Glory', 1)} value='5' pvalue='4'>JHS Morning Glory</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Ibanez TS9 Tubescreamer', 1)} value='6' pvalue='4'>Ibanez TS9 Tubescreamer</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Reverb</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Boss RV-6', 1)} value='7' pvalue='4'>Boss RV-6</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'TC Electronic Hall of Fame', 1)} value='8' pvalue='4'>TC Electronic Hall of Fame</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'MXR Reverb', 1)} value='9' pvalue='4'>MXR Reverb</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Modulation</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Walrus Audio Julia Chorus', 1)} value='10' pvalue='4'>Walrus Audio Julia Chorus</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Boss BF3 Flanger', 1)} value='11' pvalue='4'>Boss BF3 Flanger</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'MXR phase 90 Phaser', 1)} value='12' pvalue='4'>MXR phase 90 Phaser</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem header>Dynamics</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Walrus Audio Deep Six Compressor', 1)} value='13' pvalue='4'>Walrus Audio Deep Six Compressor</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Xotic EP Booster', 1)} value='14' pvalue='4'>Xotic EP Booster</DropdownItem>
                            <DropdownItem onClick={(e)=>populate4(e, 'Dunlop CryBaby Wah Pedal', 1)} value='15' pvalue='4'>Dunlop CryBaby Wah Pedal</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Row>
                    <br/>
                    <Row>
                    <ButtonDropdown direction="right" isOpen={dropdownOpen5} toggle={toggle5}>
                            <DropdownToggle caret>
                            Select Your Fifth Pedal
                            </DropdownToggle>
                                <DropdownMenu>
                                <DropdownItem header>Delay</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Boss DD-7', 1)} value='1' pvalue='5'>Boss DD-7</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'MXR Carbon Copy', 1)} value='2' pvalue='5'>MXR Carbon Copy</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'TC Electronic Feedback', 1)} value='3' pvalue='5'>TC Electronic Flashback</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Overdrive/Distortion</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Fulltone OCD', 1)} value='4' pvalue='5'>Fulltone OCD</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'JHS Morning Glory', 1)} value='5' pvalue='5'>JHS Morning Glory</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Ibanez TS9 Tubescreamer', 1)} value='6' pvalue='5'>Ibanez TS9 Tubescreamer</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Reverb</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Boss RV-6', 1)} value='7' pvalue='5'>Boss RV-6</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'TC Electronic Hall of Fame', 1)} value='8' pvalue='5'>TC Electronic Hall of Fame</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'MXR Reverb', 1)} value='9' pvalue='5'>MXR Reverb</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Modulation</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Walrus Audio Julia Chorus', 1)} value='10' pvalue='5'>Walrus Audio Julia Chorus</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Boss BF3 Flanger', 1)} value='11' pvalue='5'>Boss BF3 Flanger</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'MXR phase 90 Phaser', 1)} value='12' pvalue='5'>MXR phase 90 Phaser</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Dynamics</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Walrus Audio Deep Six Compressor', 1)} value='13' pvalue='5'>Walrus Audio Deep Six Compressor</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Xotic EP Booster', 1)} value='14' pvalue='5'>Xotic EP Booster</DropdownItem>
                                <DropdownItem onClick={(e)=>populate5(e, 'Dunlop CryBaby Wah Pedal', 1)} value='15' pvalue='5'>Dunlop CryBaby Wah Pedal</DropdownItem>
                                </DropdownMenu>
                    </ButtonDropdown>
                    </Row>
                    <br/>
                    <Row>
                    <ButtonDropdown direction="right" isOpen={dropdownOpen6} toggle={toggle6}>
                        <DropdownToggle caret>
                            Select Your Sixth Pedal
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Delay</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Boss DD-7', 1)} value='1' pvalue='6'>Boss DD-7</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'MXR Carbon Copy', 1)} value='2' pvalue='6'>MXR Carbon Copy</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'TC Electronic Feedback', 1)} value='3' pvalue='6'>TC Electronic Flashback</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Overdrive/Distortion</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Fulltone OCD', 1)} value='4' pvalue='6'>Fulltone OCD</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'JHS Morning Glory', 1)} value='5' pvalue='6'>JHS Morning Glory</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Ibanez TS9 Tubescreamer', 1)} value='6' pvalue='6'>Ibanez TS9 Tubescreamer</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Reverb</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Boss RV-6', 1)} value='7' pvalue='6'>Boss RV-6</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'TC Electronic Hall of Fame', 1)} value='8' pvalue='6'>TC Electronic Hall of Fame</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'MXR Reverb', 1)} value='9' pvalue='6'>MXR Reverb</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Modulation</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Walrus Audio Julia Chorus', 1)} value='10' pvalue='6'>Walrus Audio Julia Chorus</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Boss BF3 Flanger', 1)} value='11' pvalue='6'>Boss BF3 Flanger</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'MXR phase 90 Phaser', 1)} value='12' pvalue='6'>MXR phase 90 Phaser</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Dynamics</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Walrus Audio Deep Six Compressor', 1)} value='13' pvalue='6'>Walrus Audio Deep Six Compressor</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Xotic EP Booster', 1)} value='14' pvalue='6'>Xotic EP Booster</DropdownItem>
                                <DropdownItem onClick={(e)=>populate6(e, 'Dunlop CryBaby Wah Pedal', 1)} value='15' pvalue='6'>Dunlop CryBaby Wah Pedal</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Row>
            </div>
        </Col> 
                  
        <Col>
            <div>
                <Col md={{ size: 10, offset: 2 }}>
                    <ListGroup>
                        <h5>Pedal 1</h5>
                        <ListGroupItem>{pedal1name}</ListGroupItem>
                        <br/>
                        <h5>Pedal 2</h5>
                        <ListGroupItem>{pedal2name}</ListGroupItem>
                        <br/>
                        <h5>Pedal 3</h5>
                        <ListGroupItem>{pedal3name}</ListGroupItem>
                        <br/>
                        <h5>Pedal 4</h5>
                        <ListGroupItem>{pedal4name}</ListGroupItem>
                        <br/>
                        <h5>Pedal 5</h5>
                        <ListGroupItem>{pedal5name}</ListGroupItem>
                        <br/>
                        <h5>Pedal 6</h5>
                        <ListGroupItem>{pedal6name}</ListGroupItem>         
                    </ListGroup>
                </Col>
        
            </div>

            <div>
                <br/>
                <br/>
                    <Row>
                        <Col>
                        <Button onClick={handleSubmit}>Save</Button>
                        </Col>
                        <Col>
                        <Button>Edit</Button>
                        </Col>
                        <Col>
                        <Button>Delete</Button>
                        </Col>
                    </Row>   
            </div>
        </Col>
        </Row>
    </Container>     
    );             
}

export default Builder;
