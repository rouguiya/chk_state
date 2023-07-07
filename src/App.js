import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      show: false,
      FullName: 'Ousmane sonko',
      Biographie: 'Ousmane Sonko, né le 15 juillet 1974 à Thiès, est un homme politique sénégalais, député à Assemblée nationale de 2017 à 2022 et maire de la ville de Ziguinchor depuis 2022. Il est le président du parti Patriotes africains du Sénégal pour le travail, (PASTEF).',
      ImgSrc: <img src={"https://i0.wp.com/integrationemploi.com/wp-content/uploads/2022/08/ousmane-sonko-eco-togo.jpg?fit=960%2C696&ssl=1"} alt="photo" />};
  }

  componentDidMount(){
    console.log('Le composant est monte')
    setInterval( () =>{
      console.log('Le temps du montage')
    }, 1000)
  }
  

  render() {
    return (
      <div className='global'>
        <button className='bg-purple-900 text-white rounded py-2 px-3'
        onClick={ () => this.setState({show: !this.state.show})} 
        >Clicker</button>
        {
          this.state.show ? 
          <>
            <p style={{ borderRadius: 10 }}>{this.state.ImgSrc}</p>
            <p>Nom: {this.state.FullName}</p>
            <p>Biographie: {this.state.Biographie}</p>
          </>
          :null
        }
      </div>
    )
  }
}

export default App;