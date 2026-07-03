import styles from "./About.module.css"
import warimg from "../../assets/imagens/war.feature.card.png";


function About(){

    return(
        <section className={styles.about}>
            <div className={styles.content}>
                <span className={styles.tag}>
                    ABOUT THE GAME
                </span>
                <h2 className={styles.title}>
                    Forge Your Destiny
                </h2>
                <p className={styles.description}>
                    Ashen Trail é um MMORPG de fantasia medieval
                    inspirado em jogos como Zelda e Demon's Souls.
                </p>
                <p className={styles.description}>
                    Explore reinos esquecidos, enfrente criaturas
                    poderosas, descubra segredos antigos e construa
                    sua própria lenda em um mundo vivo e perigoso.
                </p>


                <button className={styles.button}>
                    Learn More
                </button>
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src={warimg}
                    alt="Ashen Trail"
                    className={styles.image}
                 />
            </div>
        </section>
    )
}

export default About;