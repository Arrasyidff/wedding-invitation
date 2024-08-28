import './aghniyaIzzul.scss'
import cover from '@assets/images/wedding.jpg'
import flower from '@assets/images/flower.png'
import rose from '@assets/images/rose.png'
import bride from '@assets/images/bride.png'
import brideMen from '@assets/images/bride-men.png'

function AghniyaIzzul() {
  return (
    <div className='agniya__container'>
      <section className='aghniya__cover'>
        <div className='aghniya__cover-image'>
          <img src={cover} alt="cover" />
        </div>
        <div className='aghniya__cover-title'>
          <img className='element-img' src={flower} alt="flower" />
          <img className='element-img' src={flower} alt="flower" />

          <div className='aghniya__cover-partner'>
            <h1>AGHNIYA</h1>
            <span className='comforter-brush-regular'>dan</span>
            <h1>IZZUL</h1>
            <img className="rose-element rotate-center" src={rose} alt="rose" />
          </div>
        </div>
      </section>

      <section className='aghniya__opening'>
        <p>
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

      <section className='aghniya__bride'>
        <div className='aghniya__top-rose'>
          <img className='rotate-center' src={rose} alt="rose" />
          <img className='rotate-center' src={rose} alt="rose" />
        </div>
        <img className='elemet-rose rotate-center' src={rose} alt="rose" />

        <div className='aghniya__bride-image'>
          <img src={bride} alt="bride" />
        </div>

        <p className='aghniya__bride--name'>Aghniya Rizqi Iarafadila</p>

        <p className='aghniya__bride--description'>
          Aghniya adalah putri pertama dari
          keluarga Bapak H. Mukhlis Wahyudin.
          Sebagai anak sulung, ia tumbuh
          dengan penuh tanggung jawab dan kasih
          sayang. Kini, ia siap membangun rumah
          tangga bersama pria yang ia cintai.
        </p>
      </section>

      <section className='aghniya__bride'>
        <div className='aghniya__top-rose'>
          <img className='rotate-center' src={rose} alt="rose" />
          <img className='rotate-center' src={rose} alt="rose" />
        </div>
        <img className='elemet-rose-left rotate-center' src={rose} alt="rose" />

        <div className='aghniya__bride-image'>
          <img src={brideMen} alt="bride" />
        </div>

        <p className='aghniya__bride--name'>Muhammad Zulfikar Nur</p>

        <p className='aghniya__bride--description'>
          Izzul, putra sulung keluarga Bapak Rudi, 
          dikenal sebagai sosok yang bertanggung jawab dan penuh perhatian.
          Dibentuk oleh nilai-nilai yang kuat dari keluarganya, 
          Izzul kini siap memulai babak baru dalam hidupnya 
          dengan penuh cinta dan dedikasi.
        </p>
      </section>
    </div>
  )
}

export default AghniyaIzzul