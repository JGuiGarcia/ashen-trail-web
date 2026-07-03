import styles from "./Features.module.css";
import FeatureCard from "../FeatureCard/FeatureCard";

function Features(){
    return(
        <section className={styles.features}>
            <FeatureCard icon="⚔️" title="Classes" description="Escolha seu estilo de combate "/>
            <FeatureCard icon="🗺️" title="Mundo Aberto" description="Explore regioes unicas"/>
            <FeatureCard icon="👹" title="Chefes" description="Enfrente inimigos epicos"/>
            <FeatureCard icon="🏰" title="guildas" description="contrua aliancas "/>
        </section>
    )
}

export default Features;