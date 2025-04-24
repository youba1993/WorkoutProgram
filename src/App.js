import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our workout Program with photos</h1>
        <a href='https://www.docteur-fitness.com/exercice-musculation'>Website source</a>
        <div>
            <h2>Pectoraux, Epaules LT AV, Triceps</h2>
            <h4>Pectoraux</h4>
            <div className='exercise-card'>
              <p>Dev coucher 4 x 8-12</p>
              <img alt='dev coucher' src="https://www.docteur-fitness.com/wp-content/uploads/2019/08/developpe-couche.gif" />
            </div>
            <div className='exercise-card'>
              <p>Ecarte coucher 4 x 8-12</p>
              <img alt='ecarter coucher' src='https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecarte-couche-haltere.gif' />
            </div>
            <div className='exercise-card'>
              <p>Dev incline 3 x 8 /12</p>
              <img alt='dev incline' src='https://www.docteur-fitness.com/wp-content/uploads/2021/10/developpe-incline-barre.gif' />
            </div>
            <div className='exercise-card'>
              <p>Ecarter incline 3 x 8 /12 </p>
              <img alt='ecarter incline' src='https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecartes-incline-avec-halteres.gif' />
            </div>
            <div className='exercise-card'>
              <p>Dips 3 x max</p>
              <img alt='dips' src='https://www.docteur-fitness.com/wp-content/uploads/2000/01/dips-pectoraux.gif' />
            </div>
            <h4>Epaules LT/AV</h4>
            <div className='exercise-card'>
              <p>Developpe assis presse 4 x 12</p>
              <img alt='dev assis presse' src='https://www.docteur-fitness.com/wp-content/uploads/2022/02/developpe-epaule-halteres.gif' />
            </div>
            <div className='exercise-card'>
              <p>Elevation laterale avec haltere 3 x 12</p>
              <img alt='laterale avec altere' src='https://www.docteur-fitness.com/wp-content/uploads/2000/08/elevations-laterales-exercice-musculation.gif' />
            </div>
            <div className='exercise-card'>
              <p>élévation frontale avec haltères 3 x 12</p>
              <img alt='élévation frontale avec haltères' src='https://www.docteur-fitness.com/wp-content/uploads/2000/08/elevations-frontales-exercice-musculation.gif' />
            </div>
            <h4>Triceps</h4>
            <div className='exercise-card'>
              <p>Barre front prise supination 3 x 12</p>
              <img alt='barre front prise supination' src='https://www.fitadium.com/fstrz/r/s/www.fitadium.com/conseils/wp-content/uploads/2020/07/00351301-Barbell-Decline-Close-Grip-To-Skull-Press_Upper-Arms_720.gif?frz-v=1529' />
            </div>
            <div className='exercise-card'>
              <p>Barre front prise pronation 3 x 12  (same as the one above twist hand )</p>
              <img alt='Barre front prise pronation' src='https://www.fitadium.com/fstrz/r/s/www.fitadium.com/conseils/wp-content/uploads/2020/07/00351301-Barbell-Decline-Close-Grip-To-Skull-Press_Upper-Arms_720.gif?frz-v=1529' />
            </div>
            <div className='exercise-card'>
              <p>Kick back 4 x 12</p>
              <img alt='Kick back' src='https://www.docteur-fitness.com/wp-content/uploads/2021/09/kickback.gif' />
            </div>
            <h4>Abdos</h4>
            <div className='exercise-card'>
              <p>relevé des jambes 4 x 15</p>
              <img alt='relevé des jambes' src='https://www.docteur-fitness.com/wp-content/uploads/2022/04/releve-jambes-chaise-romaine-abdominaux.gif' />
            </div>
            <h2>Dos, Epaules AR, Biceps</h2>
            <h4>Dos</h4>
            <div className='exercise-card'>
              <p>Lambert 4 x 12</p>
              <img alt='Lambert' src='https://julienquaglierini.com/wp-content/uploads/2017/10/extension-lombaire-au-banc.jpg.webp' />
            </div>
            <div className='exercise-card'>
              <p>Tractions 3 x max</p>
              <img alt='Tractions' src='https://www.docteur-fitness.com/wp-content/uploads/2022/02/traction-musculation-dos.gif' />
            </div>
            <div className='exercise-card'>
              <p>Tirage verticale avant large 3 x 8 /12</p>
              <img alt='Tirage verticale avant large' src='https://www.docteur-fitness.com/wp-content/uploads/2022/01/tirage-vertical-prise-inversee.gif' />
            </div>
            <div className='exercise-card'>
              <p>Rowing barre 3 x 8 /12</p>
              <img alt='rowing barre ' src='https://www.docteur-fitness.com/wp-content/uploads/2021/09/rowing-barre.gif' />
            </div>
            <div className='exercise-card'>
              <p>Tirage horizontal 3 x 8 /12</p>
              <img alt='Tirage horizontal' src='https://www.docteur-fitness.com/wp-content/uploads/2022/02/tirage-horizontal-poulie.gif' />
            </div>
            <h4>Epaules AR</h4>
            <div className='exercise-card'>
              <p>Oiseau 3 x 12</p>
              <img alt='Oiseau' src='https://www.docteur-fitness.com/wp-content/uploads/2021/12/oiseau-assis-sur-banc.gif' />
            </div>
            <div className='exercise-card'>
              <p>Face pull 3 x 12</p>
              <img alt='Face pull' src='https://www.docteur-fitness.com/wp-content/uploads/2022/01/face-pull.gif' />
            </div>
            <h4>Biceps</h4>
            <div className='exercise-card'>
              <p>Curl barre Exterieur 3 x 12</p>
              <img alt='Curl barre exterieur' src='https://www.docteur-fitness.com/wp-content/uploads/2021/09/curl-barre.gif' />
            </div>
            <div className='exercise-card'>
              <p>Curl barre interieur 3 x 12</p>
              <img alt='curl barre interieur' src='https://www.docteur-fitness.com/wp-content/uploads/2022/04/curl-inverse-barre.gif' />
            </div>
            <div className='exercise-card'>
              <p>Curl haltere alterne 3 x 12</p>
              <img alt='Curl haltere' src='https://www.docteur-fitness.com/wp-content/uploads/2022/08/curl-biceps-avec-halteres-alterne.gif' />
            </div>
            <div className='exercise-card'>
              <p>Curl marteau 3 x 12</p>
              <img alt='Curl marteau' src='https://www.docteur-fitness.com/wp-content/uploads/2021/10/curl-haltere-prise-marteau-pupitre.gif' />
            </div>
            <h4>Abdos</h4>
            <div className='exercise-card'>
              <p>Crunch 4 x 15</p>
              <img alt='Crunch' src='https://www.docteur-fitness.com/wp-content/uploads/2000/07/crunch-au-sol-exercice-musculation.gif' />
            </div>
            <h2>Jambes</h2>
            <div className='exercise-card'>
              <p>Squats 5 x 25/20/18/15/15</p>
              <img style={{ backgroundColor: "white" }} alt='Squat' src='https://enarahealth.com/wp-content/uploads/2022/03/PngItem_2810409-e1647565708516.png' />
            </div>
            <div className='exercise-card'>
              <p>Leg curl 4 x 15</p>
              <img alt='Leg curl' src='https://www.docteur-fitness.com/wp-content/uploads/2021/10/leg-curl-allonge.gif' />
            </div>
            <div className='exercise-card'>
              <p>Leg extension 4 x 15</p>
              <img alt='Leg extension' src='https://www.docteur-fitness.com/wp-content/uploads/2000/06/leg-extension-exercice-musculation.gif' />
            </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
