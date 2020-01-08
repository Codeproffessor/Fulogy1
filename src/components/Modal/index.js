import React from 'react';

import Portal from './components/Portal';

import './index.scss';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="modal">
        <div onClick={closeModal}><span>&lt; Вернуться</span></div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut cumque, distinctio doloremque ex hic, nisi non quae, quisquam recusandae repellendus ullam vel? A architecto atque, consectetur deleniti deserunt dicta dolore dolorum enim error ex facere incidunt magnam nam natus nihil porro quas quo recusandae reprehenderit sed similique suscipit voluptatibus. Aliquid at commodi consequatur dolore est et illum impedit magnam necessitatibus, nobis possimus quibusdam reprehenderit suscipit tempora voluptatum! A commodi cumque, distinctio dolorem eius et facere harum iste iusto nam nihil numquam omnis placeat possimus quaerat quam quis rem repellendus repudiandae, sequi sunt temporibus ut! Consequuntur debitis nam reiciendis? Atque cum dicta dolores enim esse ex excepturi fuga id impedit incidunt ipsum laborum molestiae necessitatibus nemo, officia placeat velit? Dolores esse hic incidunt, iste magni minima quod ratione, sapiente tempore totam ullam ut? Ab accusantium deleniti doloribus enim est id incidunt iure laudantium nam quas quia, repellendus soluta, tempore unde?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et facilis illum iure reiciendis tempore veniam? Iure laudantium nemo praesentium sed vitae! A ab aperiam consequatur distinctio, dolorum eaque excepturi facere ipsa ipsum iste laborum mollitia, neque placeat quibusdam reiciendis repellat repellendus reprehenderit sit vel velit. Accusamus aliquam, cumque dolorem dolores doloribus est maxime omnis optio placeat, quo repudiandae suscipit ullam? Ab at dignissimos ex iure laboriosam nemo nulla suscipit tenetur voluptates voluptatum. Accusamus ad alias aliquam architecto aspernatur at beatae delectus deserunt dicta dolore, doloribus ea eos exercitationem explicabo facere fugit inventore iste laboriosam magnam, nihil odio officia omnis praesentium quidem quisquam saepe tempora ullam vero voluptas voluptate. Accusantium ex, quo? Ad adipisci amet aperiam architecto asperiores assumenda atque consequuntur cumque dolor dolorem, dolores explicabo, facere fugit laudantium libero magnam magni minus molestias nisi odit perferendis perspiciatis porro possimus quaerat quod recusandae saepe sed suscipit ullam unde ut vitae.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem illo inventore labore praesentium saepe sequi similique tempore! Ab dicta enim harum minus nam provident, quasi temporibus. Aliquid architecto blanditiis dolore doloremque explicabo molestiae molestias natus nulla provident repellat! Aperiam assumenda at deleniti doloremque dolores doloribus earum eligendi hic, libero magni mollitia natus neque nesciunt numquam perferendis quam quis quod sint tempore voluptas? Ad aut, consequatur dolorum expedita fugit inventore laboriosam molestias nostrum numquam, officia sit voluptates. Architecto cum dolore dolores id labore laboriosam magnam neque, nostrum numquam optio pariatur possimus sunt veritatis voluptatem voluptatibus! Eligendi eos eum excepturi iste laboriosam laudantium natus perspiciatis sit velit vero. Alias aspernatur assumenda at deleniti dignissimos dolorem dolorum eos ex excepturi fugit harum hic laboriosam magni maiores, nam natus nihil nisi officiis, optio perspiciatis porro possimus quaerat quas reiciendis sed tenetur ullam unde velit veritatis voluptates! Alias architecto, delectus hic laboriosam tenetur totam.</p>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;