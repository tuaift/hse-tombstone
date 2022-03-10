import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import Draggable, {DraggableCore} from 'react-draggable';
import './index.css';
import './transition.css';
import './forms.css';
import './tombstone_constructor.css';
import disclaimerImg from './img_test/icon_disclaimer.svg';
import splashImg from './img_test/logo_inside_both.svg';
import blob from './img_test/ryba_new.svg';
import finalBlob from './img_test/final_blob.svg';
import graveartRyba from './img_test/graveart_ryba.svg';

function customClose() {
  window.opener=null;
  window.open('','_self');
  window.close();
}

function breakLine(text) {
    var br = React.createElement('br');
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line, index) {
        return line.match(regex) ? <br key={"key_" + index} /> : line;
    });
}

class ExitScreen extends React.Component {
  render() {
    return (
      <div className='exit-container'>
        <div className="btn-container-exit">
          <button className="btn-exit btn-close-window" onClick={() => customClose()}>exit</button>
          <button className="btn-exit btn-graveyard">go to the graveyard</button>
        </div>
      </div>
    );
  }
}

function Splash() {
  return(
    <div className="splash-screen">
      <div className="img-container splash">
        <img className="splash-img logo-inside" src={splashImg} alt=""/>
      </div>
      <h2>(scroll to discuss death)</h2>
    </div>
  );
}

function Q1({ formData, setFormData }) {
  return (
    <div className="q-container">
      <textarea
        value={formData.q1}
        onChange={(event) =>
          setFormData({ ...formData, q1: event.target.value })
        }
      />
    </div>
  );
}

function Q2({ formData, setFormData }) {
  return (
    <div className="q-container">
      <textarea
        value={formData.q2}
        onChange={(e) => {
          setFormData({ ...formData, q2: e.target.value });
        }}
      />
    </div>
  );
}

function Q3({ formData, setFormData }) {
  return (
    <div className="q-container">
      <textarea
        value={formData.q3}
        onChange={(e) => {
          setFormData({ ...formData, q3: e.target.value });
        }}
      />
    </div>
  );
}

function Q4({ formData, setFormData }) {
  return (
    <div className="q-container">
      <textarea
        value={formData.q4}
        onChange={(e) => {
          setFormData({ ...formData, q4: e.target.value });
        }}
      />
    </div>
  );
}

function Q5({ formData, setFormData }) {
  return (
    <div className="q-container">
      <textarea
        value={formData.q5}
        onChange={(e) => {
          setFormData({ ...formData, q5: e.target.value });
        }}
      />
    </div>
  );
}

// form submit and transition to tombstone construction
// ex Questions
function Continue() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const FormTitles = [
    "1. <br /> am i afraid <br /> of death?",
    "2. <br /> how do i see <br /> my death?",
    "3. <br /> what legacy <br /> will i leave?",
    "4. <br /> how will i be <br /> remembered?",
    "5. <br /> what happens <br /> after i die?"
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Q1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Q2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Q3 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Q4 formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Q5 formData={formData} setFormData={setFormData} />;
    }
  };

  const [showForm, setShowForm] = useState(true);
  const [showTombstone, setShowTombstone] = useState(false);

  const transitionToTombstone = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowTombstone(true);
    }, 4000);
  };

  return (
    <div className='continue-container'>
      <CSSTransition
        in={showForm}
        timeout={3000}
        classNames="questions"
        unmountOnExit
        onExiting={() => setShowForm(false)}
      >
      {<div className="container-app">
        <Splash />
        <div className="splash-screen">
          <div className="form">
            <div className="form-container">
              <h1>{breakLine(FormTitles[page])}</h1>
              {PageDisplay()}
              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    transitionToTombstone();
                    console.log(formData.q1);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
              </button>
            </div>
          </div>
        </div>
      </div>}
      </CSSTransition>
      <CSSTransition
        in={showTombstone}
        timeout={3000}
        classNames="constructor-3s"
        unmountOnExit
        onEnter={() => setShowForm(false)}
      >
      <TombstoneConstructor />
      </CSSTransition>
    </div>
  );
}


// class Continue extends React.Component {
//   render() {
//     return (
//       <div className='continue-container'>
//         <Splash />
//         <Questions />
//       </div>
//     );
//   }
// }

function CharacterLeft() {
  return (
    <div className='draggable-container'>
      <div className="draggable-l">
        <Draggable>
          <div className="circle chs ch1"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch2"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch3"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch4"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch5"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch6"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch7"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch8"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch9"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch10"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch11"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch12"></div>
        </Draggable>
      </div>
    </div>
  );
}

function CharacterRight() {
  return (
    <div className='draggable-container right'>
      <div className="draggable-r">
        <Draggable>
          <div className="circle chs ch13"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch14"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch15"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch16"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch17"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch18"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch19"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch20"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch21"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch22"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch23"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs ch24"></div>
        </Draggable>
      </div>
    </div>
  );
}

function ValuesLeft() {
  return (
    <div className='draggable-container values'>
      <div className="draggable-l">
        <Draggable>
          <div className="circle chs vl1"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl2"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl3"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl4"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl5"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl6"></div>
        </Draggable>
      </div>
    </div>
  );
}

function ValuesRight() {
  return (
    <div className='draggable-container values right'>
      <div className="draggable-r">
        <Draggable>
          <div className="circle chs vl7"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl8"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl9"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl10"></div>
        </Draggable>
        <Draggable>
          <div className="circle chs vl11"></div>
        </Draggable>
      </div>
    </div>
  );
}

function Characters() {
  return (
    <div>
      <CharacterLeft />
      <CharacterRight />
    </div>
  );
}

function Values() {
  return (
    <div>
      <ValuesLeft />
      <ValuesRight />
    </div>
  );
}

function FinalRyba() {
  const [showForm, setShowForm] = useState(true);
  const [showTombstone, setShowTombstone] = useState(false);
  const [showEx, setShowEx] = useState(false);

  const transitionToEx = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowEx(true);
    }, 4000);
  };

  const transitionToFinal = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowTombstone(true);
    }, 4000);
  };

  return (
    <div className="dark-screen">
      <CSSTransition
        in={showForm}
        timeout={3000}
        classNames="questions"
        unmountOnExit
        onExiting={() => setShowForm(false)}
      >{<div className="final-container">
          <h1 className="constructor-header">your <br /> tombstone</h1>
          <div className="constructor-field final">
            <div className="img-container">
              <img className="final-img" src={finalBlob} alt=""/>
            </div>
            <p className="">i am afraid of death</p>
            <p className="">and i cant see myself dying</p>
            <p className="">i will leave nothing</p>
            <p className="">no one will remember me</p>
            <p className="">after i die there is nothing</p>
          </div>
          <div className="btn-final">
            <button>download</button>
            <button>share</button>
          </div>
          <div className='disclaimer-container final'>
            <h1>do you want <br /> to visit digital <br /> graveyard?</h1>
            <div className="txt-main">
              <p>your tombstone will become a part of big digital
                <br/>graveart. you can explore each others
                <br/>tombstone and pay respect
              </p>
            </div>
            <div className="btn-container">
              <button className="btn-disclaimer" onClick={() => transitionToEx()}>end your experience</button>
              <button className="btn-disclaimer" onClick={() => transitionToFinal()}>i want to continue</button>
            </div>
          </div>
        </div>}
      </CSSTransition>
      <CSSTransition
        in={showEx}
        timeout={5000}
        classNames="ex"
        unmountOnExit
        onEnter={() => setShowForm(false)}
      >
      <ExitScreen />
      </CSSTransition>
      <CSSTransition
        in={showTombstone}
        timeout={5000}
        classNames="ex"
        unmountOnExit
        onEnter={() => setShowForm(false)}
      >
      <GraveartRyba />
      </CSSTransition>
    </div>
  );
}

function GraveartRyba() {
  return (
    <div className="ryba-container">
      <h1 className="constructor-header">graveart</h1>
      <div className="img-container ryba">
        <img className="graveart-ryba" src={graveartRyba}/>
      </div>
    </div>
  );
}


function TombstoneConstructor() {
  const [page, setPage] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const [showTombstone, setShowTombstone] = useState(false);

  const transitionToFinal = () => {
    setShowForm(false);
    setTimeout(() => {
      setShowTombstone(true);
    }, 4000);
  };
  const FormTitles = [
    "what about <br /> the form of your <br /> tombstone?",
    "choose what best <br /> describes you <br /> as a person",
    "<br /> what is important <br /> for you?"
  ];

  const CharacterDisplay = () => {
    if (page === 1) {
      return <Characters />
    } else if (page === 2) {
      return <Values />
    }
  };

  return(
    <div className="dark-screen">
      <CSSTransition
        in={showForm}
        timeout={3000}
        classNames="questions"
        unmountOnExit
        onExiting={() => setShowForm(false)}
      >
      {<div className="constructor-container">
        <div className="constructor-steps">
          <h1 className="constructor-header">{breakLine(FormTitles[page])}</h1>
          <div className="constructor-field">
            <div className="img-container tombstone">
              <img className="ryba-img" src={blob} alt=""/>
            </div>
          </div>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                transitionToFinal();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
          </button>
          {CharacterDisplay()}
          </div>
        </div>
    }
      </CSSTransition>
      <CSSTransition
        in={showTombstone}
        timeout={3000}
        classNames="constructor-3s"
        unmountOnExit
        onEnter={() => setShowForm(false)}
      >
      <FinalRyba />
      </CSSTransition>
    </div>
  );
}



function DisclaimerTransition() {
  const [showButton, setShowButton] = useState(true);
  const [showContinue, setShowContinue] = useState(false);
  const [showEx, setShowEx] = useState(false);

  const transitionToEx = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowEx(true);
    }, 4000);
  };

  const transitionToContinue = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowContinue(true);
    }, 4000);
  };

  return (
    <div className='container-app'>
      <CSSTransition
        in={showButton}
        timeout={4000}
        classNames="disc"
        unmountOnExit
        onExiting={() => setShowButton(false)}
      >
      {<div className='disc-container-wrap'>
        <div className='disclaimer-container'>
          <div className="img-container">
            <img className="disclaimer-img" src={disclaimerImg}/>
          </div>
          <h1>disclaimer</h1>
          <div className="txt-main">
            <p>this site is made for therapeutic and reflective
              <br/>purposes for people who are open to the topic
              <br/>of their mortality. if discussing death can trigger
              <br/>you or if you are still having a hard time
              <br/>discussing this subject, it is better
              <br/>to&nbsp;end your experience right now.</p>
          </div>
          <div className="btn-container">
            <button className="btn-disclaimer" onClick={() => transitionToEx()}>end your experience</button>
            <button className="btn-disclaimer" onClick={() => transitionToContinue()}>i want to continue</button>
          </div>
        </div>
      </div>}
      </CSSTransition>

      <CSSTransition
        in={showEx}
        timeout={5000}
        classNames="ex"
        unmountOnExit
        onEnter={() => setShowButton(false)}
      >
      <ExitScreen />
      </CSSTransition>

      <CSSTransition
        in={showContinue}
        timeout={4000}
        classNames="continue"
        unmountOnExit
        onEnter={() => setShowButton(false)}
      >
      <Continue />
      </CSSTransition>

    </div>
  );
}



ReactDOM.render(
  <DisclaimerTransition />,
  document.getElementById('root')
);
