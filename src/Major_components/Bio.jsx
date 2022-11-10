import Subtitle from "../Minor_components/Subtitle"
import Text from "../Minor_components/Text"
import Image from "../Minor_components/Image"
import Andreaimg from "../assets/andreaandfrida.jpg"

function Bio() {
    return (
        <div className="card">
            <Subtitle subtitle="Andréa Vetter de Andréa" />
            <Text content="Ex-advogada, estudante de Front-end. Olha essa gata fofa!" />
            <Image link={Andreaimg} />
        </div>
    )
}

export default Bio