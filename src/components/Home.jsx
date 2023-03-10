import React from "react";
import foto from "../images/foto.jpg";
import style from "../style/Home.module.css";

function Home() {
  return (
    <div className={style.contGeneral}>
      <div className={style.contMenu}>
      <img src={foto} alt="foto-perfil" className={style.foto} />
        <div className={style.todosItems}>
          <div className={style.item}>Home</div>
          <div className={style.item}>Sobre Mi</div>
          <div className={style.item}>Mis Proyectos</div>
          <div className={style.item}>Contacto</div>
        </div>
      </div>

      <div className={style.contInfo}>
        <div className={style.hola}>
          <img
            src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
            alt="gif"
            className={style.gif}
          />
          ¡Hola!{" "}
        </div>
        <div className={style.name}>Soy Jheinember Jimenez Nieto </div>
        <div className={style.dev}>Full Stack Developer</div>
        <div className={style.description}>
          Full Stack Developer con pensamiento creativo, resolución de problemas, trabajo en equipo,
          comunicación y autonomía.
        </div>
      </div>
    </div>
  );
}



export default Home;