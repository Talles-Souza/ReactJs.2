export default function App() {

  const Bemvindo = () => <h2>Bem-vindo</h2>
  const PassandoProps = (props) => {
    return (
      <div>
        <h2>Bem-vindo {props.nome} </h2>
      </div>
    );
  }

  return (<div>

    <Bemvindo />
    <PassandoProps nome="Talles" />
    <h1>Bem vindo ao sistema</h1>
  </div>);
};
