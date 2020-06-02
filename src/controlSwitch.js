import React from "react";
import "./controlSwitch.css";
import "./login.css";
const mqtt = require("mqtt");
const topic1 = "esp32/lamp1";
const topic2 = "esp32/lamp2";
const topic3 = "esp32/ac";
const ip = "mqtt://192.168.0.2:4000";

class controlSwitch extends React.Component {
  state = { clientId: "" };
  handleChange = (e) => {
    //console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleClick = (e) => {
  //   console.log("Button was clicked");
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form was submitted");
    //console.log(this.state.clientId);
    if (this.state.clientId === "") {
      alert("Debes introducir un nombre para conectarse al servidor");
    } else {
      // console.log(nombre);
      // console.log(this.state);
      let nombre = this.state;
      const client = mqtt.connect(ip, nombre);
      client.on("connect", () => {
        client.subscribe(topic1);
        client.subscribe(topic2);
        client.subscribe(topic3);
        alert("Conectado correctamente al servidor");
        client.publish("test/message", "Hola y adios");
        client.end();
      });
    }
  };
  constructor(props) {
    super(props);

    this.switchState = {
      checked: false,
      checked1: false,
      checked2: false,
    };
  }

  // switchState = false;
  // handleSwitch = (e) => {
  //   let ayuda = this.props.id
  //   console.log(ayuda.checked)
  //   //controlSwitch.switchState();
  //   console.log(this.switchState);
  //   console.log("ayudaaaaaa");
  // };
  handleSwitch = (e) => {
    if (this.state.clientId === "") {
      alert("Debes introducir un nombre para conectarse al servidor");
    } else {
      if (this.switchState.checked === false) {
        let nombre = this.state;
        const client = mqtt.connect(ip, nombre);
        client.on("connect", () => {
          client.publish(topic1, "Encendido");
          client.end();
        });
        this.switchState.checked = true;
        this.setState({ checked: e });
      } else {
        let nombre = this.state;
        const client = mqtt.connect(ip, nombre);
        client.on("connect", () => {
          client.publish(topic1, "Apagado");
          client.end();
        });
        this.switchState.checked = false;
        this.setState({ checked: e });
      }
    }
  };
  handleSwitch1 = (e) => {
    if (this.state.clientId === "") {
      alert("Debes introducir un nombre para conectarse al servidor");
    } else {
      if (this.switchState.checked1 === false) {
        let nombre = this.state;
        const client = mqtt.connect(ip, nombre);
        client.on("connect", () => {
          client.publish(topic2, "Encendido");
          client.end();
        });
        this.switchState.checked1 = true;
        this.setState({ checked: e });
      } else {
        let nombre = this.state;
        const client = mqtt.connect(ip, nombre);
        client.on("connect", () => {
          client.publish(topic2, "Apagado");
          client.end();
        });
        this.switchState.checked1 = false;
        this.setState({ checked: e });
      }
    }
  };
  handleSwitch2 = (e) => {
    if (this.state.clientId === "") {
      alert("Debes introducir un nombre para conectarse al servidor");
    } else {
      if (this.switchState.checked2 === false) {
        let nombre = this.state;
        const client = mqtt.connect(ip, nombre);
        client.on("connect", () => {
          client.publish(topic3, "Encendido");
          client.end();
        });
        this.switchState.checked2 = true;
        this.setState({ checked: e });
      } else {
        let nombre = this.state;
        const client = mqtt.connect(ip, nombre);
        client.on("connect", () => {
          client.publish(topic3, "Apagado");
          client.end();
        });
        this.switchState.checked2 = false;
        this.setState({ checked: e });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="formBox">
          <h1 className="title">Login</h1>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Nombre</label>
              <input
                onChange={this.handleChange}
                className="formStyle"
                type="text"
                name="clientId"
                value={this.state.clientId}
              />
            </div>
            <div className="boton">
              <button onClick={this.handleClick} className="btn">
                Conectarse
              </button>
            </div>
          </form>
        </div>
        <div className="control-switch">
          <p className="dark-mode-title">{this.props.title}</p>
          <input
            type="checkbox"
            className="checkbox"
            id={this.props.id}
            checked={this.switchState.checked}
            onChange={this.handleSwitch}
            //onClick={this.props.handleToggle}
          />
          <label htmlFor={this.props.id} className="switch"></label>
        </div>
        <div className="control-switch">
          <p className="dark-mode-title">{this.props.title1}</p>
          <input
            type="checkbox"
            className="checkbox"
            id={this.props.id1}
            checked={this.switchState.checked1}
            onChange={this.handleSwitch1}
            //onClick={this.props.handleToggle1}
          />
          <label htmlFor={this.props.id1} className="switch"></label>
        </div>
        <div className="control-switch">
          <p className="dark-mode-title">{this.props.title2}</p>
          <input
            type="checkbox"
            className="checkbox"
            id={this.props.id2}
            checked={this.switchState.checked2}
            onChange={this.handleSwitch2}
            //onClick={this.props.handleToggle2}
          />
          <label htmlFor={this.props.id2} className="switch"></label>
        </div>
      </div>
    );
  }
}

export default controlSwitch;
