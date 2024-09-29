import './bride.scss'
import contentBackground from '@assets/images/content-background.png'
import coverImg from '@assets/images/cover-img.png'

function Bride() {
  return (
    <section className='agniya__bride'>
      <img className='agniya--cover-background' src={contentBackground} alt="" />

      <div className='agniya__bride-container'>
        <div className="agniya__bride-image">
          <img className='agniya__bride-image' src={coverImg} alt="" />
        </div>

        <p className='agniya__bride-name'>Agjniyarrizqi Iara Fadhilla</p>
        <p className='agniya__bride-description'>Putri dari Bapak Mukhlis Wahyudin dan Ibu Sri Utami</p>
      </div>

      <p className='agniya__bride--separator'>and</p>

      <div className='agniya__bride-container'>
        <div className="agniya__bride-image">
          <img className='agniya__bride-image' src={coverImg} alt="" />
        </div>

        <p className='agniya__bride-name'>Agjniyarrizqi Iara Fadhilla</p>
        <p className='agniya__bride-description'>Putri dari Bapak Mukhlis Wahyudin dan Ibu Sri Utami</p>
      </div>
    </section>
  )
}

export default Bride