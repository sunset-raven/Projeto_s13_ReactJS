import Subtitle from "../Minor_components/Subtitle"
import Text from "../Minor_components/Text"
import Image from "../Minor_components/Image"

function Cards() {
    return (
        <div className="cards">
            <div className="card">
                <Subtitle subtitle="GIT"/>
                <Text content="-- The treasure chest. Sometimes where you show your secrets to the world. Who knows, maybe some other person can deal with that damn skeleton. --"/>
                <Image link="https://www.filepicker.io/api/file/P6PH6rGbRym9RXh2F0by"/>
            </div>
            <div className="card">
                <Subtitle subtitle="HTML"/>
                <Text content="-- It's old and vile. The skeleton of everything. --"/>
                <Image link="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a7f701aed1f2088e09c5330fcc81bd07.jpg"/>
            </div>
            <div className="card">
                <Subtitle subtitle="CSS"/>
                <Text content="-- How you dress your skeleton to make it prettier! And maybe less violent and unruly. --"/>
                <Image link="https://i.ytimg.com/vi/9j8Fx0rraLU/maxresdefault.jpg"/>
            </div>
            <div className="card">
                <Subtitle subtitle="Javascript"/>
                <Text content="-- Oh the secrets... --"/>
                <Image link="https://allaboutcasualgames.com/wp-content/uploads/2020/10/whisperedsecrets11.jpg"/>
            </div>
            <div className="card">
                <Subtitle subtitle="ReactJS"/>
                <Text content="-- Well, you pile up your secrets and see it MOVE.--" />
                <Image link="https://i.kym-cdn.com/entries/icons/facebook/000/002/694/Screen_Shot_2021-02-01_at_3.06.05_PM.jpg"/>
            </div>
        </div>
    )
}

export default Cards