import styles from "./Hero.module.css";

function Hero ()
{
    return(
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Ashen Trail
                </h1> 
                <p className={styles.subtitle}>
                    Forge Your Destiny
                </p> 
                <div className={styles.buttons}>
                    <button className={styles.primaryButton}>
                        Jogar Agora
                    </button>

                    <button className={styles.secondaryButton}>
                        Discord
                    </button>
                </div>
            </div>                             
        </section>
    );
}

export default Hero;