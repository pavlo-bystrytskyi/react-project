export default interface NavigationElementProps {
    link: string,
    title: string,
    callback: (message: string) => void
}