import { Windowcontrol } from "#components"
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"
import { Bold } from "lucide-react";

const Contact = () => {
  return (
    <>
    <div id="window-header">
        <Windowcontrol target={'contact'}/>
        <h2>Contact me</h2>
    </div>

    <div className="p-5 space-y-5">
        <div className="flex items-start justify-items-start gap-10">
            <div>
                <img src="/images/gallary/surya.png" alt="surya" className="w-20 rounded-full" />
                <h3>Let's connect</h3>
            </div>
            <div>
                <h4><b>Name:</b> Surya tomar </h4>
                <h4><b>Email:</b> suryatomar@zohomail.in </h4>
            </div>
        </div>

        <ul>
            {socials.map(({id, bg, link, text, icon})=>(
                <li key={id} style={{backgroundColor: bg}}>
                    <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow