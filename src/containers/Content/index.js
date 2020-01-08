import React, { PureComponent, createRef } from 'react';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../components/Modal';

import photoOne from '../../images/1.jpg';
import photoTwo from '../../images/2.jpg';
import photoThree from '../../images/3.jpg';

import hotLightImg from '../../images/hot.jpg';
import daylightLightImg from '../../images/daylight.jpg';
import coldLightImg from '../../images/cold.jpg';

import Slider from '../Slider';
import Menu from '../Menu';

import './index.scss';

const lightOptions = [
  {
    id: 1,
    preview: hotLightImg,
    images: [photoOne, photoTwo, photoThree],
    type: 'Теплый',
  },
  {
    id: 2,
    preview: daylightLightImg,
    images: [photoOne, photoTwo, photoThree],
    type: 'Дневной',
  },
  {
    id: 3,
    preview: coldLightImg,
    images: [photoOne, photoTwo, photoThree],
    type: 'Холодный',
  },
];

class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colorLightId: 1,
      isShowModal: false,
    };

    this.menuRef = createRef();
  }

  componentDidMount() {
    this.clickDocumentListner = document.addEventListener('click', (event) => {
      if (!event.target.dataset.burger) this.props.closeMenu();
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickDocumentListner);
  }

  chooseColorLight = (colorLightId) => this.setState({ colorLightId });

  closeModal = () => this.setState({ isShowModal: false });
  showModal = () => this.setState({ isShowModal: true });

  render() {
    const { isShowMenu, closeMenu } = this.props;
    const { colorLightId, isShowModal } = this.state;

    const currentOptions = lightOptions.find(({ id }) => id === colorLightId);

    return (
      <div className="content">
        <Menu ref={this.menuRef} isShowMenu={isShowMenu} closeMenu={closeMenu} />
        <div>
          <div className="content__slider">
            <Slider slides={currentOptions.images}/>
          </div>
          <div className="content__detail-info">
            <div className="content__detail-info_table">
              <table>
                <tbody>
                <tr>
                  <td>Класс:</td>
                  <td><span>Standart</span></td>
                </tr>
                <tr>
                  <td>Потребляемая мощность:</td>
                  <td>59 Вт.</td>
                </tr>
                <tr>
                  <td>Сила света:</td>
                  <td>3459 Люмен = 7,5 ламп накаливания по 40 Вт.</td>
                </tr>
                <tr>
                  <td>Гарантия:</td>
                  <td>3 года</td>
                </tr>
                <tr>
                  <td>Монтаж:</td>
                  <td>Да</td>
                </tr>
                <tr>
                  <td>Итого сумма:</td>
                  <td>2594 рублей</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="content__detail-info_choose-block">
              <span onClick={this.showModal}>i</span>
              <span>Выберите цвет свечения</span>
              <Modal isOpen={isShowModal} closeModal={this.closeModal} />
            </div>
            <div className="content__color-types-options">
              {lightOptions && lightOptions.map(({ id, preview, type }) => (
                <div
                  key={id}
                  style={id === colorLightId ? { transform: 'scale(1.1)'} : null}
                  onClick={() => this.chooseColorLight(id)}
                >
                  <img src={preview} alt="" />
                  {id === colorLightId && (
                    <span className="content__color-types-options_icon">
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </span>
                  )}
                  <span className="content__color-types-options_type">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;