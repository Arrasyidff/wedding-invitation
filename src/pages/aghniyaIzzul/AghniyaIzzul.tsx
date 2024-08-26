import './aghniyaIzzul.scss'
import cover from '@assets/images/wedding.jpg'
import flower from '@assets/images/flower.png'
import rose from '@assets/images/rose.png'
import bride from '@assets/images/bride.png'
import brideMen from '@assets/images/bride-men.png'
import { useEffect, useRef } from 'react'

function AghniyaIzzul() {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      // Mendapatkan index dari section saat ini
      const currentSectionIndex = Math.round(window.scrollY / window.innerHeight);
      
      // Menentukan arah scroll (ke bawah atau ke atas)
      const direction = event.deltaY > 0 ? 1 : -1;
      const newSectionIndex = currentSectionIndex + direction;

      // Pastikan index baru dalam rentang yang valid
      if (newSectionIndex >= 0 && newSectionIndex < sectionRefs.current.length) {
        sectionRefs.current[newSectionIndex].scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Menambahkan event listener untuk wheel (scroll) event
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <div className='agniya__container'>
      <section ref={(el) => (sectionRefs.current[0] = el!)} className='aghniya__cover'>
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

      <section ref={(el) => (sectionRefs.current[1] = el!)} className='aghniya__opening'>
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

      <section ref={(el) => (sectionRefs.current[2] = el!)} className='aghniya__bride'>
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

      <section ref={(el) => (sectionRefs.current[3] = el!)} className='aghniya__bride'>
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