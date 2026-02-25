import { useThemeStore } from "../features/stores/theme.store"

export default function Zustand() {
    const toggle = useThemeStore((s) => { s.toggle })
    const dark = useThemeStore((s) => { s.dark })
    return (
        <>
            <p>Zustand</p>

            {dark}
            <button onClick={() => toggle}>click</button>
        </>
    )
}