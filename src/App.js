import React from "react";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("transport");
  const [voltage1, setVoltage1] = useState("");
  const [type1, setType1] = useState(1);
  const [size1, setSize1] = useState(1);
  const [exterior1, setExterior1] = useState("");

  const renderTab = () => {
    switch (tab) {
      case "transport":
        return (
          <div className="tranport_tab">
            <div className="tab_title">
              <h1>
                {type1 === "ТДС" ? "ТДС.1" : `Т.${type1}`}-{size1}M{exterior1}
                {voltage1}
              </h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="voltage"
                      defaultChecked
                      onClick={() => setVoltage1("")}
                    />
                    220В, 50Гц
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage1(2)}
                    />
                    +42В
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage1(3)}
                    />
                    +12В
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage1(4)}
                    />
                    +24В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Тип</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input
                      type="radio"
                      defaultChecked
                      name="type"
                      onClick={() => setType1(1)}
                    />
                    Т.1
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(2)}
                    />
                    Т.2
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(3)}
                    />
                    Т.3
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(6)}
                    />
                    Т.6
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(7)}
                    />
                    Т.7
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(8)}
                    />
                    Т.8
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(10)}
                    />
                    Т.10
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(11)}
                    />
                    Т.11
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1("ТДС")}
                    />
                    ТДС
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="radio" name="body" />
                    Моно
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="body" />
                    "Книга"
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="body" />
                    Модульный
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="checkbox" name="body" />
                    Экран
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="checkbox" name="body" />
                    Козырьки (бленды)
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="checkbox" name="body" />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Направление</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="radio" name="direction" />
                    Налево
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="direction" />
                    Прямо
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="direction" />
                    Направо
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="direction" />
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="direction" />
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="direction" />
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="radio" name="size" />
                    200мм
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="size" />
                    300мм
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="size" />
                    300 + 200мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Таймер
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="func" />
                    для обоих
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="func" />
                    для красного
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="func" />
                    для зеленого
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="func" />
                    белый для обоих
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="func" />
                    белый для красного
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="func" />
                    белый для зеленого
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="radio" name="aperture" />в квадратной апертуре
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="aperture" />в круглой апертуре
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="checkbox" />
                    Адаптивность
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    ТВП
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Внешний вид</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="radio" name="look" />
                    Обычный по ГОСТ
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="look" />
                    Плотный по ГОСТ
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="look" />
                    EN 12368
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Левая секция</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Использовать
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="checkbox" />
                    Красный круг
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Желтый круг
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="radio" name="section--left" />
                    Налево
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="section--left" />
                    45deg
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Правая секция</h3>
                <form className="item_form" action="">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Использовать
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="checkbox" />
                    Красный круг
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Желтый круг
                  </label>
                  <hr />
                  <label htmlFor="">
                    <input type="radio" name="section--right" />
                    Направо
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="section--right" />
                    45deg
                  </label>
                  <label htmlFor="">
                    <input type="radio" name="section--right" />
                    Прямо
                  </label>
                </form>
              </div>
            </div>
          </div>
        );
      case "pedestrian":
        return (
          <div className="pedestrian_tab">
            <div className="tab_title">
              <h1></h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    220 В 50 Гц
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +42 В
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +12 В
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +24 В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="size" />
                    200 мм
                  </label>
                  <label>
                    <input type="radio" name="size" />
                    300 мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    Моно
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    Модульный
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Экран
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Козырьки (бленды)
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form action="" className="form">
                  <label>
                    <input type="checkbox" name="" />
                    Желтый круг
                  </label>
                  <hr />
                  <h4>Таймер</h4>
                  <label>
                    <input type="radio" name="func" />
                    для обоих
                  </label>
                  <label>
                    <input type="radio" name="func" />
                    для красного
                  </label>
                  <label>
                    <input type="radio" name="func" />
                    для зеленого
                  </label>
                  <hr />
                  <label>
                    <input type="radio" name="aperture" />в квадратной апертуре
                  </label>
                  <label>
                    <input type="radio" name="aperture" />в круглой апертуре
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Адаптивность
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    ТВП
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Звуковой извещатель
                  </label>
                </form>
              </div>
            </div>
          </div>
        );
      case "tram":
        return (
          <div className="pedestrian_tab">
            <div className="tab_title">
              <h1></h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    220 В 50 Гц
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +42 В
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +12 В
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +24 В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Тип</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="type" />
                    Т.5
                  </label>
                  <label>
                    <input type="radio" name="type" />
                    Т.9 (СТБ 1300)
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Горизонтаьный
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    Моно
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    Модульный
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Экран
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="size" />
                    200 мм
                  </label>
                  <label>
                    <input type="radio" name="size" />
                    300 мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Направление</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="direction" />
                    Прямо
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                    Налево
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                    Направо
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Направление</h3>
                <form action="" className="form">
                  <label>
                    <input type="checkbox" name="" />
                    Адаптивность
                  </label>
                </form>
              </div>
            </div>
          </div>
        );
      case "countdown":
        return (
          <div className="pedestrian_tab">
            <div className="tab_title">
              <h1></h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    220 В 50 Гц
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +42 В
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +12 В
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    +24 В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="size" />
                    200 мм
                  </label>
                  <label>
                    <input type="radio" name="size" />
                    300 мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    Моно
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Тип</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="type" />
                    Пешеходный
                  </label>
                  <label>
                    <input type="radio" name="type" />
                    Транспортный
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form action="" className="form">
                  <h4>Таймер</h4>
                  <label>
                    <input type="radio" name="func" />
                    для обоих
                  </label>
                  <label>
                    <input type="radio" name="func" />
                    для красного
                  </label>
                  <label>
                    <input type="radio" name="func" />
                    для зеленого
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    Адаптивность
                  </label>
                  <label>
                    <input type="checkbox" name="" />
                    ТВП
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Цвет свечения</h3>
                <form action="" className="form">
                  <label>
                    <input type="radio" name="voltage" />
                    Белый
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    Желтый
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    Зеленый
                  </label>
                  <label>
                    <input type="radio" name="voltage" />
                    Красный
                  </label>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="tranport_tab">
            <p>Transport</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left-content">left-content</div>
        <div className="right-content">
          <div className="tab_buttons">
            <button
              onClick={() => setTab("transport")}
              className="tab tab_transport_btn"
            >
              Транспортные
            </button>
            <button
              onClick={() => setTab("pedestrian")}
              className="tab tab_pedestrian_btn"
            >
              Пешеходные
            </button>
            <button onClick={() => setTab("tram")} className="tab tab_tram_btn">
              Трамвайные
            </button>
            <button
              onClick={() => setTab("countdown")}
              className="tab tab_countdown_btn"
            >
              Табло информационное обратного отсчета
            </button>
          </div>
          <div className="tabs">{renderTab()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
