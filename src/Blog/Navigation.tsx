import Element from "./Navigation/Element.tsx";

export default function Navigation() {
    const navigationElements = [
        {
            title: 'First entry',
            link: '#first-entry'
        },
        {
            title: 'Second entry',
            link: '#second-entry'
        },
        {
            title: 'Third entry',
            link: '#third-entry'
        },
    ];
    const showSelected = function (message: string) {
        alert('Selected article: ' + message);
    }
    return <div className="navigation">
        <h2>Navigation</h2>
        <nav className="navbar">
            <ul className="nav-ul">
                {
                    navigationElements.map(
                        (props) =>
                            <Element link={props.link} title={props.title} callback={showSelected}/>
                    )
                }
            </ul>
        </nav>
    </div>
}
