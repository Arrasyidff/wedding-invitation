import './aghniyaIzzul.scss'
import cover from '@assets/images/wedding.jpg'
import flower from '@assets/images/flower.png'
import rose from '@assets/images/rose.png'

function AghniyaIzzul() {
  return (
    <div className='agniya__container'>
      <section className='aghniya__cover'>
        <div className='aghniya__cover-image fade-in-top'>
          <img src={cover} alt="cover" />
        </div>
        <div className='aghniya__cover-title'>
          <img className='element-img fade-in-left' src={flower} alt="flower" />
          <img className='element-img fade-in-right' src={flower} alt="flower" />

          <div className='aghniya__cover-partner fade-in-top'>
            <h1>AGHNIYA</h1>
            <span className='comforter-brush-regular'>dan</span>
            <h1>IZZUL</h1>
            <img className="rose-element rotate-center" src={rose} alt="rose" />
          </div>

          <h1 className='questrial-regular fade-in-top'>24.12.2024</h1>
        </div>
      </section>

      <section className='aghniya__opening'>
        <p className='fade-in-top'>
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenis kamu sendiri, supaya kamu
          cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
          di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
          itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”
          <br />
          <br />
          QS Ar-Rum 21.
        </p>
        <img className='elemet-rose rotate-center' src={rose} alt="rose" />
        <img className='elemet-rose rotate-center' src={rose} alt="rose" />
      </section>
    </div>
  )
}

export default AghniyaIzzul