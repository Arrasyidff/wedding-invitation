import './aghniyaIzzul.scss'
import bg from '@assets/images/bg.png'
import cvFlower1 from '@assets/images/cover-flower1.png'
import cvFlower2 from '@assets/images/cover-flower2.png'
import topFlower from '@assets/images/top-flower.png'
import bsml from '@assets/images/bsml.png'
import frameFlower1 from '@assets/images/frame-flower1.png'
import frameFlower2 from '@assets/images/frame-flower2.png'
import brideFrame from '@assets/images/bride-frame.png'
import loveSeparator from '@assets/images/love-separator.png'

function AghniyaIzzul() {
  return (
    <div className='agniya__container'>
      {/* <img className='agniya--background' src={bg} alt="" /> */}
      <section className='aghniya__cover'>
        <div className='aghniya__cover-text'>
          <h3>The Wedding Of</h3>
          <h1>AGHNIYA</h1>
          <span className='comforter-brush-regular'>dan</span>
          <h1>IZZUL</h1>
          <h2 className='open-sans'>24.04.2024</h2>
        </div>
        <img className='aghniya__cover-flower' src={cvFlower1} alt="flower1" />
        <img className='aghniya__cover-flower' src={cvFlower2} alt="flower1" />
      </section>
      
      <section className='aghniya__opening'>
        <img className='top-flower' src={topFlower} alt="" />
        <div className='aghniya__opening-content section--content'>
          <img src={bsml} alt="" />
          <br />
          <p>
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah 
          Dia menciptakan pasangan-pasangan untukmu dari jenis 
          kamu sendiri, supaya kamu cenderung dan merasa tenteram 
          kepadanya, dan Dia menjadikan di antaramu rasa kasih 
          dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat 
          tanda-tanda bagi kaum yang berpikir.”
          <br />
          <br />
          QS Ar-Rum 21.
          </p>
        </div>
      </section>

      <section className='aghniya__bride'>
        <div className='aghniya__bride-flower'>
          <img src={frameFlower1} alt="" />
          <img src={frameFlower2} alt="" />
        </div>

        <div className='agniya__bride-content section--content'>
          <img src={brideFrame} alt="" />
          <p>Aghniya Rizqi Iarafadila</p>
          <p>
            Putri pertama dari keluarga Bapak H. Mukhlis Wahyudin. 
            Sebagai anak sulung, ia tumbuh dengan penuh tanggung jawab 
            dan kasih sayang. Kini, ia siap membangun rumah tangga 
            bersama pria yang ia cintai.
          </p>
        </div>
      </section>

      <section className='aghniya__bride'>
        <div className='aghniya__bride-flower'>
          <img src={frameFlower1} alt="" />
          <img src={frameFlower2} alt="" />
        </div>

        <div className='agniya__bride-content section--content'>
          <img src={brideFrame} alt="" />
          <p>Muhammad Zulfikar Nur</p>
          <p>
            Putra sulung dari keluarga Bapak Rudi, dikenal 
            sebagai sosok yang bertanggung jawab dan penuh perhatian. 
            Dibentuk oleh nilai-nilai yang kuat dari keluarganya, 
            Izzul kini siap memulai babak baru dalam hidupnya dengan 
            penuh cinta dan dedikasi.
          </p>
        </div>
      </section>

      <section className='aghniya__love-story'>
        <h1>LOVE STORY</h1>

        <div className='aghniya__love-story__content section--content'>
          <p>
            “Kami memulai perjalanan ini sebagai sahabat, 
            belajar tentang satu sama lain, dan saling mendukung 
            dalam setiap langkah. Dari kebersamaan itu, cinta kami 
            tumbuh kuat dan tak tergoyahkan. Kini, dengan penuh 
            kebahagiaan, kami mengundang kalian untuk menyaksikan awal 
            dari babak baru dalam hidup kami, saat kami mengucapkan 
            janji suci untuk selalu bersama, dalam suka dan duka, 
            seumur hidup.”
          </p>
        </div>
      </section>

      <section className='aghniya__wedding-details'>
        <div className="aghniya__wedding-details__content section--content">
          <div className="partner">
            <h1>A</h1>
            <img src={loveSeparator} alt="" />
            <h1>I</h1>
          </div>

          <p className='first-desc'>
            Atas berkah dan rahmat Allah SWT, kami akan melangsungkan pernikahan.
          </p>

          <div className='aghniya__title'>
            <h1>AGHNIYA</h1>
            <span className='comforter-brush-regular'>dan</span>
            <h1>IZZUL</h1>
          </div>

          <p className='invitation'>Dengan tulus kami mengundang:</p>
          <h3 className='person-invitation'>Arrasyid dan Fadel</h3>

          <div className='date-time'>
            <p>24.Desember.2024</p>
            <p>10.00am</p>
          </div>
        </div>
      </section>

      <section className='aghniya__e-gift'>
        <h1>E-Gift</h1>

        <div className='aghniya__e-gift__content section--content'>
          <p>
            Kebahagiaan kami adalah saat Anda bisa hadir di hari 
            bahagia kami. Jika Anda berniat memberikan hadiah, 
            kami dengan senang hati menerimanya sebagai tanda 
            cinta dan doa Anda.
          </p>

          <p>123456789010</p>
        </div>
      </section>

      <section className='aghniya__rsvp'>
        <h1>RSVP</h1>

        <div className='aghniya__rsvp-content section--content'>
          <p>
            Agar kami dapat mempersiapkan segala sesuatunya 
            dengan baik, mohon konfirmasi kehadiran Anda
          </p>

          <div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AghniyaIzzul