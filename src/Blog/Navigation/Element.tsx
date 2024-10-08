import NavigationElementProps from "./Element/NavigationElementProps.tsx";

export default function Element(props: Readonly<NavigationElementProps>) {
    const callback = function () {
        props.callback(props.title)
    }
    return <li className="nav-li">
        <a href={props.link} onClick={callback}>{props.title}</a>
    </li>
}