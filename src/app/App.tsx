import { CoinsProvider } from "../contexts";
import { AppStateProvider } from "../features";

export const App = () => {
    return (
        <main>
            <CoinsProvider>
                <AppStateProvider />
            </CoinsProvider>
        </main>
    )
}