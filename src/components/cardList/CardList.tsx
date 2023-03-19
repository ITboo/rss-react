import React from "react";
import Card from '../cards/Card'
import './CardList.css'
import '../../assets/img/1.jpg'


class CardList extends React.Component {
  render() {
    return (
        <div className="list__container">
      <Card name="3W CLINIC Green Tea Foam Cleansing" photo='https://lola.by/image/cache/tov/115-270x270.jpg' description="3W Clinic Green Tea Foam Cleansing - это пенка для умывания с экстрактом зелёного чая . Она быстро устраняет все загрязнения, растворяет излишки кожного сала, очищает поры, выводит чёрные точки и улучшает общее состояние кожи"/>
      <Card name="Elizavecca Gold Snail Cleansing Foam" photo='https://lola.by/image/cache/tov/119-270x270.jpg' description="Пенка для умывания с коллоидным золотом и муцином улитки. Она быстро устраняет все загрязнения, оздоравливает кожу, защищает от негативных внешних влияний и замедляет возрастные изменения."/>
      <Card name="3W CLINIC Brown Rice Foam Cleansing " photo='https://lola.by/image/cache/tov/476-270x270.jpg' description="Деликатно очищает кожу от загрязнений и остатков макияжа, не пересушивая ее и не вызывая раздражения. Глубоко проникая в поры, пенка очищает их и удаляет избыток жирных веществ, выделяемых кожей."/>
      <Card name="MISSHA Super Aqua Cell Renew Snail" photo='https://lola.by/image/cache/tov/643-270x270.jpg' description="Мягкая пенка для умывания Missha Super Aqua Cell Renew Snail Cleansing Foam поможет бережно очистить кожу, ускорить процесс ее обновления, в кратчайшие сроки регенерировать поврежденную и тусклую кожу. Пенка поможет вернуть коже упругость, чистый цвет, ускорить процесс обновления клеток кожи, осветлить ее."/>
      <Card name="3W CLINIC Rose Water Foam Cleansing" photo='https://lola.by/image/cache/tov/117-270x270.jpg' description="Пена для умывания с розовой водой. Она интенсивно увлажняет и смягчает кожу, удаляет все виды загрязнений, освобождает поры, придаёт лицу матовость и ухоженный вид."/>
      <Card name="3W CLINIC Collagen Foam Cleansing " photo='https://lola.by/image/cache/tov/782-270x270.jpg' description="Пенка для умывания с коллагеном содержит питательные вещества, способствующие регенерации и улучшению здоровья кожи."/>
      </div>
    );
  }
}
export default CardList;