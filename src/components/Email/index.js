import React from 'react';
import { Helmet } from 'react-helmet';

import './index.scss';

const emailTemplateData = [
  {
    id: 1,
    title: null,
    fields: [
      'Здравствуйте, Покупатель Покупателевич',
      'Ваш заказ № T-RP/00129 оформлен',
      'Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.',
    ],
  },
  {
    id: 2,
    title: 'Информация о заказе:',
    fields: [
      'Заказчик: Покупатель Покупателевич',
      'Email: amozik@yandex.ru',
      'Адрес: 115487, г Москва, ул Садовая Б., д 45',
      'Телефон: +7 902 266-44-63',
      'Исполнитель: Группа компаний Fulogy',
      'Менеджер: Широков Евгений',
      'Телефон: +7(499)116-34-00',
      'Монтаж: Да',
    ],
  },
  {
    id: 3,
    title: 'Состав комплекта:',
    fields: [
      'Светильник по вашему размеру - 2 шт',
      'Блок питания 100 Вт. - 1 шт',
      'Крепления - саморезы каждые 30 см',
      'Комментарий: Можно мне гаечный ключ вместо отвертки',
      'Конфигурация светильника (вариант 2): scheme',
    ],
  },
  {
    id: 4,
    title: 'Технические характеристики:',
    fields: [
      'Длина 1-го светильника (L1): 1375 мм',
      'Длина 2-го светильника (L2): 2110 мм',
      'Вид профиля: Накладной профиль с молочным рассеивателем',
      'Лента: Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90',
      'Суммарная потребляемая мощность: 63 Вт',
      'Вывод питающего кабеля из светильника: через заглушку',
      'Стык светильников: под углом 45 градусов\n',
      'Длина кабеля до блока питания (Lcb): 240 см',
    ],
  },
  {
    id: 5,
    title: null,
    fields: ['ИТОГО: 14 000 РУБ.'],
  }
];

const Email = () => {
  return (
    <>
      <Helmet>
        <title>Email template</title>
        <meta name="description" content="Some email template" />
      </Helmet>
      <div>
        <table className="email__template-table">
          <tbody>
            {emailTemplateData.map(({ id, title, fields }) => (
              <tr key={id}>
                <td>
                  <table>
                    <tbody>
                      {title && (
                        <tr>
                          <td className="email__template-table_title">
                            {title}
                          </td>
                        </tr>
                      )}
                      {fields && fields.map((field) => (
                        <tr>
                          <td>{field}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Email;