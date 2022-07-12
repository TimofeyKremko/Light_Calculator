import React from "react";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("transport");
  const [voltage1, setVoltage1] = useState("");
  const [type1, setType1] = useState(1);
  const [size1, setSize1] = useState(1);
  const [exterior1, setExterior1] = useState("");

  const [voltage3, setVoltage3] = useState("");
  const [type3, setType3] = useState(5);
  const [size3, setSize3] = useState(1);
  const [body3, setBody3] = useState("");
  const [direction3, setDirection3] = useState("");
  const [func3, setFunc3] = useState("");

  const [voltage4, setVoltage4] = useState("");
  const [color4, setColor4] = useState("");
  const [type4, setType4] = useState(`п`);
  const [timer4, setTimer4] = useState("");
  const [size4, setSize4] = useState(3);
  const [blackBody4, setBlackBody4] = useState(false);
  const [adaptive4, setAdaptive4] = useState(false);
  const [tvp4, setTvp4] = useState(false);

  const [voltage2, setVoltage2] = useState("");
  const [size2, setSize2] = useState(1);
  const [body2, setBody2] = useState("");
  const [blackBody2, setBlackBody2] = useState(false);
  const [func2, setFunc2] = useState(false);
  const [timerColor2, setTimerColor2] = useState("кз");
  const [aperture2, setAperture2] = useState(1);
  const [yellowCircle2, setYellowCircle2] = useState(false);
  const [screen2, setScreen2] = useState(false);
  const [blends2, setBlends2] = useState(false);
  const [adaptive2, setAdaptive2] = useState(false);
  const [tvp2, setTvp2] = useState(false);
  const [sound2, setSound2] = useState(false);

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
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      defaultChecked
                      onClick={() => setVoltage1("")}
                    />
                    220В, 50Гц
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage1(2)}
                    />
                    +42В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage1(3)}
                    />
                    +12В
                  </label>
                  <label>
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
                  <label>
                    <input
                      type="radio"
                      defaultChecked
                      name="type"
                      onClick={() => setType1(1)}
                    />
                    Т.1
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(2)}
                    />
                    Т.2
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(3)}
                    />
                    Т.3
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(6)}
                    />
                    Т.6
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(7)}
                    />
                    Т.7
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(8)}
                    />
                    Т.8
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(10)}
                    />
                    Т.10
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType1(11)}
                    />
                    Т.11
                  </label>
                  <label>
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
                  <label>
                    <input type="radio" name="body" />
                    Моно
                  </label>
                  <label>
                    <input type="radio" name="body" />
                    "Книга"
                  </label>
                  <label>
                    <input type="radio" name="body" />
                    Модульный
                  </label>
                  <hr />
                  <label>
                    <input type="checkbox" name="body" />
                    Экран
                  </label>
                  <hr />
                  <label>
                    <input type="checkbox" name="body" />
                    Козырьки (бленды)
                  </label>
                  <hr />
                  <label>
                    <input type="checkbox" name="body" />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Направление</h3>
                <form className="item_form" action="">
                  <label>
                    <input type="radio" name="direction" />
                    Налево
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                    Прямо
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                    Направо
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                  </label>
                  <label>
                    <input type="radio" name="direction" />
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form className="item_form" action="">
                  <label>
                    <input type="radio" name="size" />
                    200мм
                  </label>
                  <label>
                    <input type="radio" name="size" />
                    300мм
                  </label>
                  <label>
                    <input type="radio" name="size" />
                    300 + 200мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form className="item_form" action="">
                  <label>
                    <input type="checkbox" />
                    Таймер
                  </label>
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
                    <input type="radio" name="func" />
                    белый для обоих
                  </label>
                  <label>
                    <input type="radio" name="func" />
                    белый для красного
                  </label>
                  <label>
                    <input type="radio" name="func" />
                    белый для зеленого
                  </label>
                  <hr />
                  <label>
                    <input type="radio" name="aperture" />в квадратной апертуре
                  </label>
                  <label>
                    <input type="radio" name="aperture" />в круглой апертуре
                  </label>
                  <hr />
                  <label>
                    <input type="checkbox" />
                    Адаптивность
                  </label>
                  <label>
                    <input type="checkbox" />
                    ТВП
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Внешний вид</h3>
                <form className="item_form" action="">
                  <label>
                    <input type="radio" name="look" />
                    Обычный по ГОСТ
                  </label>
                  <label>
                    <input type="radio" name="look" />
                    Плотный по ГОСТ
                  </label>
                  <label>
                    <input type="radio" name="look" />
                    EN 12368
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Левая секция</h3>
                <form className="item_form" action="">
                  <label>
                    <input type="checkbox" />
                    Использовать
                  </label>
                  <hr />
                  <label>
                    <input type="checkbox" />
                    Красный круг
                  </label>
                  <label>
                    <input type="checkbox" />
                    Желтый круг
                  </label>
                  <hr />
                  <label>
                    <input type="radio" name="section--left" />
                    Налево
                  </label>
                  <label>
                    <input type="radio" name="section--left" />
                    45deg
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Правая секция</h3>
                <form className="item_form" action="">
                  <label>
                    <input type="checkbox" />
                    Использовать
                  </label>
                  <hr />
                  <label>
                    <input type="checkbox" />
                    Красный круг
                  </label>
                  <label>
                    <input type="checkbox" />
                    Желтый круг
                  </label>
                  <hr />
                  <label>
                    <input type="radio" name="section--right" />
                    Направо
                  </label>
                  <label>
                    <input type="radio" name="section--right" />
                    45deg
                  </label>
                  <label>
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
              <h1>
                П.2{yellowCircle2 ? ".ж" : ""}-{size2}М
                {body2 || blackBody2
                  ? `(${body2}${blackBody2 ? "ч" : ""})`
                  : body2}
                {func2 && `И(${aperture2}${timerColor2})`}
                {tvp2 && "Т"}
                {sound2 && "Г"}
                {adaptive2 && "А"}
                {blends2 && "Б"}
                {screen2 && "Э"}
                {voltage2}
              </h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      onClick={() => setVoltage2("")}
                      name="voltage"
                    />
                    220 В 50 Гц
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setVoltage2(2)}
                      name="voltage"
                    />
                    +42 В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage2(3)}
                    />
                    +12 В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage2(4)}
                    />
                    +24 В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      onClick={() => setSize2(1)}
                      name="size"
                    />
                    200 мм
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setSize2(2)}
                      name="size"
                    />
                    300 мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      onClick={() => setBody2("")}
                      defaultChecked
                      name="body"
                    />
                    Моно
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setBody2("3")}
                      name="body"
                    />
                    Модульный
                  </label>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setScreen2(!screen2)}
                      name=""
                    />
                    Экран
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setBlends2(!blends2)}
                      name=""
                    />
                    Козырьки (бленды)
                  </label>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setBlackBody2(!blackBody2)}
                      name=""
                    />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form action="" className="form">
                  <label>
                    <input
                      onClick={() => setYellowCircle2(!yellowCircle2)}
                      type="checkbox"
                      name=""
                    />
                    Желтый круг
                  </label>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      name="func"
                      onClick={() => setFunc2(!func2)}
                    />
                    <span className="func_title">Таймер</span>
                  </label>
                  {func2 && (
                    <div className="timer-radio">
                      <label>
                        <input
                          type="radio"
                          defaultChecked
                          name="func"
                          onClick={() => setTimerColor2("кз")}
                        />
                        для обоих
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="func"
                          onClick={() => setTimerColor2("к")}
                        />
                        для красного
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="func"
                          onClick={() => setTimerColor2("з")}
                        />
                        для зеленого
                      </label>
                      <hr />
                      <label>
                        <input
                          defaultChecked
                          type="radio"
                          name="aperture"
                          onClick={() => setAperture2(1)}
                        />
                        в квадратной апертуре
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="aperture"
                          onClick={() => setAperture2(2)}
                        />
                        в круглой апертуре
                      </label>
                    </div>
                  )}
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setAdaptive2(!adaptive2)}
                      name=""
                    />
                    Адаптивность
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setTvp2(!tvp2)}
                    />
                    ТВП
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setSound2(!sound2)}
                    />
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
              <h1>
                T.{type3}-{size3}M{voltage3}
              </h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage3("")}
                    />
                    220 В 50 Гц
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage3(2)}
                    />
                    +42 В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage3(3)}
                    />
                    +12 В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage3(4)}
                    />
                    +24 В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Тип</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType3(5)}
                    />
                    Т.5
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => setType3(9)}
                    />
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
              <h1>
                ТИ.{type4}
                {color4}-{size4}М{blackBody4 && "(ч)"}И{timer4}
                {tvp4 && "Т"}
                {adaptive4 && "А"}
                {voltage4}
              </h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage4("")}
                    />
                    220 В 50 Гц
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage4(2)}
                    />
                    +42 В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage4(3)}
                    />
                    +12 В
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setVoltage4(4)}
                    />
                    +24 В
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={() => {
                        setSize4(3);
                        setType4("п");
                      }}
                    />
                    400 мм
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={() => {
                        setSize4(5);
                        setType4("в");
                      }}
                    />
                    600 мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form action="" className="form">
                  <label>
                    <input checked type="radio" name="voltage" />
                    Моно
                  </label>

                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setBlackBody4(!blackBody4)}
                      name=""
                    />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Тип</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      defaultChecked
                      onClick={() => {
                        setSize4(3);
                        setType4("п");
                      }}
                    />
                    Пешеходный
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      onClick={() => {
                        setSize4(5);
                        setType4("в");
                      }}
                    />
                    Транспортный
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form action="" className="form">
                  <label>
                    <input checked disabled type="checkbox"></input>
                    Таймер
                  </label>
                  <label>
                    <input
                      defaultChecked
                      type="radio"
                      name="func"
                      onClick={() => setTimer4("")}
                    />
                    для обоих
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="func"
                      onClick={() => setTimer4("(к)")}
                    />
                    для красного
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="func"
                      onClick={() => setTimer4("(з)")}
                    />
                    для зеленого
                  </label>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setAdaptive4(!adaptive4)}
                    />
                    Адаптивность
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setTvp4(!tvp4)}
                    />
                    ТВП
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Цвет свечения</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      defaultChecked
                      onClick={() => setColor4("")}
                    />
                    Белый
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setColor4("(ж)")}
                    />
                    Желтый
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setColor4("(з)")}
                    />
                    Зеленый
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="voltage"
                      onClick={() => setColor4("(к)")}
                    />
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
