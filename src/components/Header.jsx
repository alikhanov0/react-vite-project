export default function Header() {
    const now = new Date()
    return(
        <header>
            <h3>Online-Cinema</h3>
            
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}