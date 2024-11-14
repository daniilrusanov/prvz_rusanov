import '../App.css';
import '../index.css';
import './css/Sections.css';
import section1 from './json/section1.json';
import section2 from './json/section2.json';
import section3 from './json/section3.json';

export function Section1() {
    return(
        <>
        <div id='section1' className="content">
            {section1.map((sect, index) => (
                <div key={sect.id} className={index % 2 === 0 ? "left_content bg-white" : "right_content bg-white"}>
                    <div className="image_info">
                        <img src={sect.image} alt={sect.h2} />
                    </div>
                    <h2>{sect.h2}</h2>
                    <div className="text">
                        <p>{sect.li1}</p>
                        <p>{sect.li2}</p>
                        <p>{sect.li3}</p>
                        <p>{sect.li4}</p>
                        <p>{sect.li5}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export function Section2() {
    return(
        <>
        <div id='section2' className="content bg-blue">
            {section2.map((sect, index) => (
                <div key={sect.id} className={index % 2 === 0 ? "left_content" : "right_content"}>
                    <div className="image_info2 image2">
                        <img src={sect.image} alt={sect.h2} />
                    </div>
                    <h2>{sect.h2}</h2>
                </div>
            ))}
        </div>
        </>
    )
}

export function Section3() {
    return (
        <>
            <div id='section3' className="contacts">
                <div className="contacts_left">
                    <h2>Contacts</h2>
                    {section3.map((contact) => (
                        <h3 key={contact.id} className="h3_contacts">&#8227; {contact.social}</h3>
                    ))}
                </div>
                <div className="contacts_right">
                    <h2>Comment</h2>
                    <textarea className="contacts_textarea" placeholder="Залиште свій коментар тут"></textarea>
                </div>
            </div>
        </>
    );
}