import React from "react";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("transport");

  const [voltage1, setVoltage1] = useState("");
  const [type1, setType1] = useState(1);
  const [size1, setSize1] = useState(1);
  const [body1, setBody1] = useState("");
  const [screen1, setScreen1] = useState(false);
  const [blends1, setBlends1] = useState(false);
  const [blackBody1, setBlackBody1] = useState(false);
  const [horizontal1, setHorizontal1] = useState(false);
  const [screenColor1, setScreenColor1] = useState("");
  const [func1, setFunc1] = useState(false);
  const [timerColor1, setTimerColor1] = useState("кз");
  const [aperture1, setAperture1] = useState(1);
  const [adaptive1, setAdaptive1] = useState(false);
  const [tvp1, setTvp1] = useState(false);
  const [exterior1, setExterior1] = useState("");
  const [leftSection1, setLeftSection1] = useState(false);
  const [rightSection1, setRightSection1] = useState(false);
  

  const [voltage3, setVoltage3] = useState("");
  const [type3, setType3] = useState(5);
  const [size3, setSize3] = useState(1);
  const [body3, setBody3] = useState("");
  const [direction3, setDirection3] = useState("");
  const [adaptive3, setAdaptive3] = useState(false);
  const [horizontal3, setHorizontal3] = useState(false);
  const [blackBody3, setBlackBody3] = useState(false);
  const [screen3, setScreen3] = useState(false);

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
                {type1 === "ТДС" ? "ТДС.1" : `Т.${type1}`}
                {leftSection1 || rightSection1 ? "." : ""}
                {rightSection1 && "п"}{leftSection1 && "л"}
                {horizontal1 && ".г"}-{size1}M
                {body1 ? `(${body1}${blackBody1 ? "ч" : ""})` : ""}
                {func1 && `И(${aperture1}${timerColor1})`}
                {tvp1 && "Т"}
                {adaptive1 && "А"}
                {exterior1 && `X${exterior1}`}
                {blends1 && "Б"}
                {screen1 && "Э"}
                {screenColor1 && "(2)"}
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
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setHorizontal1(!horizontal1)}
                    />
                    Горизонтаьный
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form className="item_form" action="">
                  <label>
                    <input
                      type="radio"
                      onClick={() => setBody1("")}
                      name="body"
                    />
                    Моно
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setBody1(2)}
                      name="body"
                    />
                    "Книга"
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setBody1(3)}
                      name="body"
                    />
                    Модульный
                  </label>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setScreen1(!screen1)}
                      name="body"
                    />
                    Экран
                  </label>
                  {screen1 && (
                    <div className="screen_block">
                      <label>
                        <input
                          defaultChecked
                          type="radio"
                          name="screen_color"
                          onClick={() => setScreenColor1("")}
                        />
                        Черный
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="screen_color"
                          onClick={() => setScreenColor1("(2)")}
                        />
                        Белый
                      </label>
                    </div>
                  )}

                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setBlends1(!blends1)}
                      name="body"
                    />
                    Козырьки (бленды)
                  </label>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setBlackBody1(!blackBody1)}
                      name="body"
                    />
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
                    <input
                      type="radio"
                      onClick={() => setSize1(1)}
                      name="size"
                      defaultChecked
                    />
                    200мм
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setSize1(2)}
                      name="size"
                    />
                    300мм
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setSize1(3)}
                      name="size"
                    />
                    300 + 200мм
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form className="item_form" action="">
                  <label>
                    <input onClick={() => setFunc1(!func1)} type="checkbox" />
                    Таймер
                  </label>
                  {func1 && (
                    <div className="timer-radio">
                      <label>
                        <input
                          type="radio"
                          defaultChecked
                          name="func"
                          onClick={() => setTimerColor1("кз")}
                        />
                        для обоих
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="func"
                          onClick={() => setTimerColor1("к")}
                        />
                        для красного
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="func"
                          onClick={() => setTimerColor1("з")}
                        />
                        для зеленого
                      </label>
                      <hr />
                      <label>
                        <input
                          defaultChecked
                          type="radio"
                          name="aperture"
                          onClick={() => setAperture1(1)}
                        />
                        в квадратной апертуре
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="aperture"
                          onClick={() => setAperture1(2)}
                        />
                        в круглой апертуре
                      </label>
                    </div>
                  )}
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => setAdaptive1(!adaptive1)}
                      name=""
                    />
                    Адаптивность
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setTvp1(!tvp1)}
                    />
                    ТВП
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Внешний вид</h3>
                <form className="item_form" action="">
                  <label>
                    <input
                      type="radio"
                      onClick={() => setExterior1("")}
                      name="look"
                    />
                    Обычный по ГОСТ
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setExterior1("(2)")}
                      name="look"
                    />
                    Плотный по ГОСТ
                  </label>
                  <label>
                    <input
                      type="radio"
                      onClick={() => setExterior1("(3)")}
                      name="look"
                    />
                    EN 12368
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Левая секция</h3>
                {!horizontal1 && (
                  <form className="item_form" action="">
                    <label>
                      <input
                        onClick={() => setLeftSection1(!leftSection1)}
                        type="checkbox"
                      />
                      Использовать
                    </label>
                    {leftSection1 && (
                      <div className="leftSection_btns">
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
                          <input defaultChecked type="radio" name="section--left" />
                          Налево
                        </label>
                        <label>
                          <input type="radio" name="section--left" />
                          45deg
                        </label>
                      </div>
                    )}
                  </form>
                )}
              </div>
              <div className="item">
                <h3 className="item_header">Правая секция</h3>
                {!horizontal1 && (
                  <form className="item_form" action="">
                    <label>
                      <input
                        type="checkbox"
                        onClick={() => setRightSection1(!rightSection1)}
                      />
                      Использовать
                    </label>
                    {rightSection1 && (
                      <div className="rightSection_btns">
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
                          <input defaultChecked type="radio" name="section--right" />
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
                      </div>
                    )}
                  </form>
                )}
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
                T.{type3}
                {type3 === 9 ? `${horizontal3 ? ".г" : ""}${direction3}` : ""}-
                {size3}М
                {body3 === 3 || blackBody3
                  ? `(${body3}${blackBody3 ? "ч" : ""})`
                  : ""}
                {type3 === 9 ? screen3 && "Э" : ""}
                {adaptive3 && "А"}
                {voltage3}
              </h1>
            </div>
            <div className="tab_content">
              <div className="item">
                <h3 className="item_header">Напряжение</h3>
                <form action="" className="form">
                  <label>
                    <input
                      defaultChecked
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
                      defaultChecked
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
                      onClick={() => {
                        setType3(9);
                        setHorizontal3(false);
                        setSize3(1);
                        setDirection3("");
                        setBody3("");
                        setScreen3(false);
                      }}
                    />
                    Т.9 (СТБ 1300)
                  </label>
                  {type3 === 9 ? (
                    <>
                      <hr />
                      <label>
                        <input
                          type="checkbox"
                          name=""
                          onClick={() => setHorizontal3(!horizontal3)}
                        />
                        Горизонтаьный
                      </label>
                    </>
                  ) : (
                    ""
                  )}
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Корпус</h3>
                <form action="" className="form">
                  <label>
                    <input
                      defaultChecked
                      type="radio"
                      name="voltage"
                      onClick={() => setBody3("")}
                    />
                    Моно
                  </label>
                  {type3 === 9 ? (
                    <>
                      <label>
                        <input
                          type="radio"
                          name="voltage"
                          onClick={() => setBody3(3)}
                        />
                        Модульный
                      </label>
                      <hr />
                      <label>
                        <input
                          type="checkbox"
                          name=""
                          onClick={() => setScreen3(!screen3)}
                        />
                        Экран
                      </label>
                    </>
                  ) : (
                    ""
                  )}
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setBlackBody3(!blackBody3)}
                    />
                    Черный корпус
                  </label>
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Размер</h3>
                <form action="" className="form">
                  {type3 === 5 ? (
                    <label>
                      <input
                        checked
                        disabled
                        type="radio"
                        name="size"
                        onClick={() => setSize3(1)}
                      />
                      100 мм
                    </label>
                  ) : (
                    <>
                      <label>
                        <input
                          defaultChecked
                          type="radio"
                          name="size1"
                          onClick={() => setSize3(1)}
                        />
                        200 мм
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="size1"
                          onClick={() => setSize3(2)}
                        />
                        300 мм
                      </label>
                    </>
                  )}
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Направление</h3>
                <form action="" className="form">
                  {type3 === 9 ? (
                    <>
                      <label>
                        <input
                          defaultChecked
                          type="radio"
                          name="direction"
                          onClick={() => setDirection3("")}
                        />
                        Прямо
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="direction"
                          onClick={() => setDirection3("л")}
                        />
                        Налево
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="direction"
                          onClick={() => setDirection3("п")}
                        />
                        Направо
                      </label>
                    </>
                  ) : (
                    ""
                  )}
                </form>
              </div>
              <div className="item">
                <h3 className="item_header">Функции</h3>
                <form action="" className="form">
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      onClick={() => setAdaptive3(!adaptive3)}
                    />
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
